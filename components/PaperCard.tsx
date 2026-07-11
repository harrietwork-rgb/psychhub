"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Paper = {
  title: string;
  author: string;
  tag: string;
};

export default function PaperCard({ paper }: { paper: Paper }) {
  const [favourite, setFavourite] = useState(false);
  useEffect(() => {
  const saved = localStorage.getItem(`favourite-${paper.title}`);

  if (saved === "true") {
    setFavourite(true);
  }
}, [paper.title]);

  return (
    <div className="rounded-lg border p-6">

      <Link href={`/papers/${paper.title}`}>
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

      <button
        onClick={() => {
          const newValue = !favourite;

          setFavourite(newValue);

          localStorage.setItem(
              `favourite-${paper.title}`,
              String(newValue)
          );
        }}
        
        className="mt-4 block rounded border px-4 py-2"
      >
        {favourite ? "⭐ Favourite" : "☆ Add Favourite"}
      </button>

    </div>
  );
}