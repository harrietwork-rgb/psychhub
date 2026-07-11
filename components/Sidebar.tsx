import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r p-6">

      <h1 className="text-2xl font-bold mb-8">
        🧠 PsychHub
      </h1>

      <nav className="space-y-4">

        <Link href="/">
          🏠 Dashboard
        </Link>

        <Link href="/papers">
          📚 Papers
        </Link>

        <Link href="/notes">
         📝 Notes
        </Link>

        <Link href="/favourites">
          ⭐ Favourites
        </Link>

        <Link href="/planner">
          📅 Planner
        </Link>

      </nav>

    </aside>
  );
}