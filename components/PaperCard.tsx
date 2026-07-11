import Link from "next/link";

type Paper = {
  title: string;
  author: string;
  tag: string;
};

export default function PaperCard({ paper }: { paper: Paper }) {
  return (
    <Link
      href={`/papers/${paper.title}`}
      className="block rounded-lg border p-6"
    >
      <h2 className="text-xl font-bold">
        📄 {paper.title}
      </h2>

      <p className="mt-2">
        {paper.author}
      </p>

      <span className="mt-4 inline-block rounded bg-gray-200 px-3 py-1">
        {paper.tag}
      </span>
    </Link>
  );
}