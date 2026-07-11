"use client";

import { useState, use, useEffect } from "react";

export default function PaperDetails({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = use(params);

  const [notes, setNotes] = useState("");
  useEffect(() => {
  const savedNotes = localStorage.getItem(`notes-${title}`);

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, [title]);
  function saveNotes() {
  localStorage.setItem(`notes-${title}`, notes);
  alert("Notes saved!");
}

  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      <div className="mt-8 rounded-lg border p-6">

        <h2 className="text-xl font-bold">
          Author
        </h2>

        <p>
          Unknown author
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