"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Paper } from "@/types/paper";

export default function FavouritesPage() {

  const [favourites, setFavourites] = useState<Paper[]>([]);


  function loadFavourites() {

    const savedPapers: Paper[] = JSON.parse(
      localStorage.getItem("papers") || "[]"
    );


    const favouritePapers = savedPapers.filter(
      (paper) =>
        localStorage.getItem(
          `favourite-${paper.id}`
        ) === "true"
    );


    setFavourites(favouritePapers);

  }


  useEffect(() => {

    loadFavourites();

  }, []);



  function removeFavourite(id: string) {

    localStorage.setItem(
      `favourite-${id}`,
      "false"
    );


    loadFavourites();

  }



  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        ⭐ Favourite Papers
      </h1>


      <p className="mt-3 text-gray-600">
        Your saved important research papers.
      </p>



      <div className="mt-10 grid gap-6 md:grid-cols-3">


        {favourites.length === 0 ? (

          <p>
            No favourite papers yet.
          </p>

        ) : (

          favourites.map((paper) => (

            <div
              key={paper.id}
              className="rounded-lg border p-6"
            >

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


              <button
                onClick={() => removeFavourite(paper.id)}
                className="mt-4 block rounded border px-4 py-2"
              >
                ☆ Remove Favourite
              </button>


            </div>

          ))

        )}


      </div>

    </main>
  );
}