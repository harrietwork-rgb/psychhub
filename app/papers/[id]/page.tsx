"use client";

import { use, useEffect, useState } from "react";
import type { Paper } from "@/types/paper";

export default function PaperDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [paper, setPaper] = useState<Paper | null>(null);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const savedPapers: Paper[] = JSON.parse(
      localStorage.getItem("papers") || "[]"
    );

    const defaultPaper: Paper = {
      id: "default-working-memory",
      title: "Working Memory",
      author: "Baddeley (1974)",
      tag: "Memory",
    };

    const allPapers = [defaultPaper, ...savedPapers];

    const foundPaper = allPapers.find(
      (paper) => paper.id === id
    );

    if (foundPaper) {
      setPaper(foundPaper);

      const savedNotes = localStorage.getItem(
        `notes-${foundPaper.id}`
      );

      if (savedNotes) {
        const parsed = JSON.parse(savedNotes);
        setNotes(parsed.content);
      }
    }
  }, [id]);

  function saveNotes() {
    if (!paper) return;

    const noteData = {
      paperId: paper.id,
      paperTitle: paper.title,
      content: notes,
    };

    localStorage.setItem(
      `notes-${paper.id}`,
      JSON.stringify(noteData)
    );

    alert("Notes saved!");
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
        {paper.title}
      </h1>

      <div className="mt-8 rounded-lg border p-6">

        <h2 className="text-xl font-bold">
          Author
        </h2>

        <p>
          {paper.author}
        </p>

        <h2 className="mt-6 text-xl font-bold">
          Topic
        </h2>

        <p>
          {paper.tag}
        </p>

        <h2 className="mt-6 text-xl font-bold">
          Notes
        </h2>

        <textarea
          className="mt-2 w-full rounded border p-3"
          placeholder="Write notes about this paper..."
          rows={6}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button
          onClick={saveNotes}
          className="mt-4 rounded bg-black px-5 py-3 text-white"
        >
          Save Notes
        </button>

      </div>

    </main>
  );
}