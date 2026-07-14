"use client";

import { useEffect, useState } from "react";
import PaperCard from "@/components/PaperCard";
import type { Paper } from "@/types/paper";

export default function Papers() {

  const [papers, setPapers] = useState<Paper[]>([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [search, setSearch] = useState("");


  useEffect(() => {

    const savedPapers = JSON.parse(
      localStorage.getItem("papers") || "[]"
    );


    const defaultPaper: Paper = {
      id: "default-working-memory",
      title: "Working Memory",
      author: "Baddeley (1974)",
      tag: "Memory",
    };


    const allPapers = [
      defaultPaper,
      ...savedPapers,
    ];


    const uniquePapers = allPapers.filter(
      (paper: Paper, index: number, self: Paper[]) =>
        index ===
        self.findIndex(
          (p) => p.id === paper.id
        )
    );


    setPapers(uniquePapers);


    localStorage.setItem(
      "papers",
      JSON.stringify(uniquePapers)
    );


  }, []);



  function addPaper() {

    if (!title || !author || !tag) return;


    const newPaper: Paper = {
      id: crypto.randomUUID(),
      title,
      author,
      tag,
    };


    const alreadyExists = papers.some(
      (paper) =>
        paper.title === title &&
        paper.author === author
    );


    if (alreadyExists) {
      return;
    }


    const updatedPapers = [
      ...papers,
      newPaper,
    ];


    setPapers(updatedPapers);


    localStorage.setItem(
      "papers",
      JSON.stringify(updatedPapers)
    );


    setTitle("");
    setAuthor("");
    setTag("");

  }



  function deletePaper(id: string) {

    const updatedPapers = papers.filter(
      (paper) =>
        paper.id !== id
    );


    setPapers(updatedPapers);


    localStorage.setItem(
      "papers",
      JSON.stringify(updatedPapers)
    );

  }



  const filteredPapers = papers.filter((paper) =>
    paper.title.toLowerCase().includes(search.toLowerCase()) ||
    paper.author.toLowerCase().includes(search.toLowerCase()) ||
    paper.tag.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        Research Papers 📚
      </h1>


      <p className="mt-2 text-gray-600">
        Organise and review your psychology papers.
      </p>



      <input
        className="mt-6 w-full rounded border p-3"
        placeholder="Search papers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />



      <div className="mt-8 rounded-lg border p-6">


        <h2 className="text-2xl font-bold">
          Add New Paper
        </h2>



        <input
          className="mt-4 w-full rounded border p-3"
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
          placeholder="Topic (e.g. Memory)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />



        <button
          onClick={addPaper}
          className="mt-4 rounded bg-black px-5 py-3 text-white"
        >
          Add Paper
        </button>


      </div>



      <div className="mt-8 grid gap-6 md:grid-cols-3">


      {filteredPapers.map((paper) => (
  <PaperCard
    key={paper.id}
    paper={paper}
    onDelete={deletePaper}
  />
))}


      </div>


    </main>
  );
}