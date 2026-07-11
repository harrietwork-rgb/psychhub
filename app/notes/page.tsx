"use client";

import { useEffect, useState } from "react";

export default function NotesPage() {
  const [notes, setNotes] = useState<
    { paper: string; content: string }[]
  >([]);

  useEffect(() => {
    const savedNotes: { paper: string; content: string }[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key && key.startsWith("notes-")) {
        const note = localStorage.getItem(key);

        if (note) {
          savedNotes.push(JSON.parse(note));
        }
      }
    }

    setNotes(savedNotes);
  }, []);

  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        📝 Notes
      </h1>

      <p className="mt-3 text-gray-600">
        Your saved psychology study notes.
      </p>

      <div className="mt-10 space-y-4">

        {notes.length === 0 ? (
          <p>
            No notes saved yet.
          </p>
        ) : (
          notes.map((note, index) => (
            <div
              key={index}
              className="rounded-lg border p-6"
            >
              <h2 className="font-bold">
                📄 {note.paper}
              </h2>

              <p className="mt-3">
                {note.content}
              </p>

            </div>
          ))
        )}

      </div>

    </main>
  );
}