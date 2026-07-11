"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavourites: string[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key && key.startsWith("favourite-")) {
        const value = localStorage.getItem(key);

        if (value === "true") {
          savedFavourites.push(
            key.replace("favourite-", "")
          );
        }
      }
    }

    setFavourites(savedFavourites);
  }, []);

  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        ⭐ Favourite Papers
      </h1>

      <p className="mt-3 text-gray-600">
        Your saved important research papers.
      </p>

      <div className="mt-10 space-y-4">

        {favourites.length === 0 ? (
          <p>
            No favourite papers yet.
          </p>
        ) : (
          favourites.map((paper) => (
        <Link
            key={paper}
            href={`/papers/${paper}`}
            className="block rounded-lg border p-6 hover:bg-gray-100"
        >
            📄 {paper}
        </Link>
          ))
        )}

      </div>

    </main>
  );
}