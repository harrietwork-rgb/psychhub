"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Paper } from "@/types/paper";

export default function EditPaper({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const router = useRouter();

  const [paper, setPaper] = useState<Paper | null>(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [articleUrl, setArticleUrl] = useState("");


  useEffect(() => {
    const savedPapers: Paper[] = JSON.parse(
      localStorage.getItem("papers") || "[]"
    );


    const foundPaper = savedPapers.find(
      (paper) => paper.id === id
    ) || {
      id: "default-working-memory",
      title: "Working Memory",
      author: "Baddeley (1974)",
      tag: "Memory",
      pdfUrl: "",
      articleUrl: "",
    };


    if (foundPaper) {
      setPaper(foundPaper);

      setTitle(foundPaper.title);
      setAuthor(foundPaper.author);
      setTag(foundPaper.tag);
      setPdfUrl(foundPaper.pdfUrl || "");
      setArticleUrl(foundPaper.articleUrl || "");
    }

  }, [id]);



  function saveChanges() {

    if (!paper) return;


    const updatedPaper: Paper = {
      id: paper.id,
      title,
      author,
      tag,
      pdfUrl,
      articleUrl,
    };


    const savedPapers: Paper[] = JSON.parse(
      localStorage.getItem("papers") || "[]"
    );


    const updatedPapers = savedPapers.map((paper) =>
      paper.id === id
        ? updatedPaper
        : paper
    );


    localStorage.setItem(
      "papers",
      JSON.stringify(updatedPapers)
    );


    router.push(`/papers/${id}`);
  }



  if (!paper) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">
          Paper not found
        </h1>
      </main>
    );
  }



  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        Edit Paper ✏️
      </h1>


      <input
        className="mt-6 w-full rounded border p-3"
        placeholder="Paper title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />


      <input
        className="mt-4 w-full rounded border p-3"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />


      <input
        className="mt-4 w-full rounded border p-3"
        placeholder="Topic"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />


      <input
        className="mt-4 w-full rounded border p-3"
        placeholder="PDF URL (optional)"
        value={pdfUrl}
        onChange={(e) => setPdfUrl(e.target.value)}
      />


      <input
        className="mt-4 w-full rounded border p-3"
        placeholder="Journal Article URL (optional)"
        value={articleUrl}
        onChange={(e) => setArticleUrl(e.target.value)}
      />


      <button
        onClick={saveChanges}
        className="mt-6 rounded bg-black px-5 py-3 text-white"
      >
        Save Changes
      </button>

    </main>
  );
}