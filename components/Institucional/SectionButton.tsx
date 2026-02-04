import { SectionButtonType } from "@/lib/types/institucional";
import Image from "next/image";
import Link from "next/link";

export default function SectionButton({ item }: { item: SectionButtonType }) {
  return (
    <Link
      href={item.href}
      className={item.linkClassName ? item.linkClassName : ""}
    >
      <div className="relative h-10 w-10">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className={item.imageClassName ? item.imageClassName : ""}
        />
      </div>

      <span
        className={item.spanClassName ? item.spanClassName : ""}
        style={{ color: item.nameColor ?? "#006092" }}
      >
        {item.name}
      </span>
    </Link>
  );
}
