export default function Dashboard() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">
        PsychHub Dashboard 🧠
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-gray-100 p-6">
          <h2 className="text-xl font-bold">
            📚 Papers
          </h2>
          <p>0 papers saved</p>
        </div>

        <div className="rounded-lg bg-gray-100 p-6">
          <h2 className="text-xl font-bold">
            📝 Notes
          </h2>
          <p>0 notes created</p>
        </div>

        <div className="rounded-lg bg-gray-100 p-6">
          <h2 className="text-xl font-bold">
            📖 Flashcards
          </h2>
          <p>0 flashcards</p>
        </div>
      </div>
    </main>
  );
}