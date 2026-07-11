import Link from "next/link";
export default function Home() {
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
    href="/papers"
    className="rounded-lg border p-6 hover:bg-gray-100"
  >
    <h2 className="text-xl font-bold">
      📝 Notes
    </h2>
    <p className="mt-2">
      Review your study notes
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
      Organise your revision
    </p>
  </Link>

</div>

</main>
  );
}