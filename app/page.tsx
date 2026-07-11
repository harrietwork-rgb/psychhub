"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
const [stats, setStats] = useState({
  notes: 0,
  favourites: 0,
  tasks: 0,
});

useEffect(() => {
  let noteCount = 0;
  let favouriteCount = 0;
  let taskCount = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key?.startsWith("notes-")) {
      noteCount++;
    }

    if (key?.startsWith("favourite-")) {
      const value = localStorage.getItem(key);

      if (value === "true") {
        favouriteCount++;
      }
    }

    if (key === "planner-tasks") {
      const savedTasks = localStorage.getItem(key);

      if (savedTasks) {
        taskCount = JSON.parse(savedTasks).length;
      }
    }
  }

  setStats({
    notes: noteCount,
    favourites: favouriteCount,
    tasks: taskCount,
  });

}, []);
  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        🧠 PsychHub Dashboard
      </h1>

      <p className="mt-3 text-gray-600">
        Your psychology study companion
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

  <Link
    href="/papers"
    className="rounded-lg border p-6 hover:bg-gray-100"
  >
    <h2 className="text-xl font-bold">
      📚 Papers
    </h2>
    <p className="mt-2">
      Manage your research papers
    </p>
  </Link>


  <Link
  href="/notes"
    className="rounded-lg border p-6 hover:bg-gray-100"
  >
    <h2 className="text-xl font-bold">
      📝 Notes
    </h2>

    <p className="mt-2">
  {stats.notes} saved notes
</p>
  </Link>

<Link
  href="/favourites"
  className="rounded-lg border p-6 hover:bg-gray-100"
>
  <h2 className="text-xl font-bold">
    ⭐ Favourites
  </h2>

  <p className="mt-2">
    {stats.favourites} favourite papers
  </p>
</Link>

    <Link
    href="/planner"
    className="rounded-lg border p-6 hover:bg-gray-100"
  >
    <h2 className="text-xl font-bold">
      📅 Planner
    </h2>

    <p className="mt-2">
     {stats.tasks} study tasks
    </p>
  </Link>

</div>

</main>
  );
}