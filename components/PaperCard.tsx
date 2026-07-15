"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Paper } from "@/types/paper";

export default function PaperCard({
  paper,
  onDelete,
}: {
  paper: Paper;
  onDelete: (id: string) => void;
}) {

  const [favourite, setFavourite] = useState(false);


  useEffect(() => {
    const savedFavourite = localStorage.getItem(
      `favourite-${paper.id}`
    );

    setFavourite(savedFavourite === "true");

  }, [paper.id]);



  function toggleFavourite() {

    const newValue = !favourite;

    setFavourite(newValue);

    localStorage.setItem(
      `favourite-${paper.id}`,
      String(newValue)
    );

  }



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



      <div className="mt-4 flex gap-3">

        <button
          onClick={toggleFavourite}
          className="rounded border px-4 py-2"
        >
          {favourite ? "⭐ Favourited" : "☆ Favourite"}
        </button>


        <button
          onClick={() => onDelete(paper.id)}
          className="rounded border px-4 py-2"
        >
          🗑 Delete
        </button>

      </div>


    </div>
  );
}