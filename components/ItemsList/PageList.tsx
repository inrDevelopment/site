import { stripHtml } from "@/lib/db/functions";
import { PageListProps } from "@/lib/types/bulletin";
import Link from "next/link";
import PageTitle from "../PageTitle/PageTitle";

export default function PageList({
  title,
  content,
  pageComment,
}: PageListProps) {
  return (
    <div className="container px-14 py-6">
      <h5 className="py-5 text-center">{pageComment}</h5>
      <PageTitle>{title}</PageTitle>

      <ul className="space-y-2 py-5">
        {content.map((item) => (
          <li key={item.id}>
            <Link
              href={`/news/${item.id}`}
              className="cursor-pointer py-1 font-semibold text-blue-600 hover:text-blue-500 hover:underline"
            >
              {`${item.date} - ${stripHtml(item.title)}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
