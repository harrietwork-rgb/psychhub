export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-900 p-6 text-white">
      <h1 className="text-2xl font-bold">
        PsychHub 🧠
      </h1>

      <nav className="mt-8 space-y-4">
        <a href="/dashboard">
          📊 Dashboard
        </a>

        <a href="/papers">
          📚 Papers
        </a>

        <a href="/notes">
          📝 Notes
        </a>

        <a href="/flashcards">
          📖 Flashcards
        </a>

        <a href="/planner">
          📅 Planner
        </a>

        <a href="/stats">
          📈 Statistics
        </a>
      </nav>
    </aside>
  );
}