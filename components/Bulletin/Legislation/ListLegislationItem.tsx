import { stripHtml } from "@/lib/db/functions";
import { LegislationItem } from "@/lib/types/bulletin";
import Link from "next/link";

type LegislationItemProps = {
  content: LegislationItem[];
};

export default function ListLegislationItem({ content }: LegislationItemProps) {
  return (
    <div className="container px-14 py-6">
      <ul className="space-y-2 py-5">
        {content.map((item) => (
          <li key={item.idlegislacao}>
            <Link
              href={`/legislation/${item.idlegislacao}`}
              className="cursor-pointer py-1 font-semibold text-blue-500 hover:text-blue-500 hover:underline"
            >
              <span suppressHydrationWarning>
                [+] {item.date} -{" "}
                {item.titulo ? stripHtml(item.titulo) : "Título Não Encontrado"}{" "}
                - {stripHtml(item.resumo)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
