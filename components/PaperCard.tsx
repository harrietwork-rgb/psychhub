"use client";

import Link from "next/link";
import type { Paper } from "@/types/paper";

export default function PaperCard({
  paper,
  onDelete,
}: {
  paper: Paper;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="rounded-lg border p-6">

      <Link href={`/papers/${paper.id}`}>
        <h2 className="text-xl font-bold hover:underline">
          📄 {paper.title}
        </h2>
      </Link>

      <p className="mt-2">
        {paper.author}
      </p>

      <span className="mt-4 inline-block rounded bg-gray-200 px-3 py-1">
        {paper.tag}
      </span>

      <Link
        href={`/papers/${paper.id}/edit`}
        className="mt-4 block rounded border px-4 py-2 text-center"
      >
        ✏️ Edit
      </Link>

      <button
        onClick={() => onDelete(paper.id)}
        className="mt-4 block rounded border px-4 py-2"
      >
        🗑 Delete
      </button>

    </div>
  );
}