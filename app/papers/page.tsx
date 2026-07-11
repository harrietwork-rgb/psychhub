"use client";

import { useState } from "react";
import PaperCard from "@/components/PaperCard";

export default function Papers() {
  const [papers, setPapers] = useState([
    {
      title: "Working Memory",
      author: "Baddeley (1974)",
      tag: "Memory",
    },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [search, setSearch] = useState("");

  function addPaper() {
    if (!title || !author || !tag) return;

    setPapers([
      ...papers,
      {
        title,
        author,
        tag,
      },
    ]);

    setTitle("");
    setAuthor("");
    setTag("");
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
       {filteredPapers.map((paper, index) => (
            
<PaperCard
  key={index}
  paper={paper}
/>
        ))}
      </div>

    </main>
  );
}