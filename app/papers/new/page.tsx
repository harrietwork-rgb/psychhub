"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPaperPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");

  function savePaper() {
    if (!title || !author || !tag) return;

    const newPaper = {
      title,
      author,
      tag,
    };

    const existing =
      JSON.parse(
        localStorage.getItem("papers") || "[]"
      );

    localStorage.setItem(
      "papers",
      JSON.stringify([
        ...existing,
        newPaper,
      ])
    );

    router.push("/papers");
  }

  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        ➕ Add Research Paper
      </h1>

      <div className="mt-8 space-y-4 max-w-xl">

        <input
          className="w-full rounded border p-3"
          placeholder="Paper title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Topic (e.g. Memory)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />

        <button
          onClick={savePaper}
          className="rounded bg-black px-5 py-3 text-white"
        >
          Save Paper
        </button>

      </div>

    </main>
  );
}