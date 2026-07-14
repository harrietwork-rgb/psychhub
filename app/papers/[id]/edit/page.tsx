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
 };

    if (foundPaper) {
      setPaper(foundPaper);
      setTitle(foundPaper.title);
      setAuthor(foundPaper.author);
      setTag(foundPaper.tag);
    }

  }, [id]);


  function saveChanges() {

    if (!paper) return;

    const updatedPaper = {
      id: paper.id,
      title,
      author,
      tag,
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />


      <input
        className="mt-4 w-full rounded border p-3"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />


      <input
        className="mt-4 w-full rounded border p-3"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
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