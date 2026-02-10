"use client";

import { stripHtml } from "@/lib/db/functions";
import { ItemProps } from "@/lib/types/bulletin";
import he from "he";

type ItemDisplayProps = {
  item: ItemProps;
};

export default function ItemDisplay({ item }: ItemDisplayProps) {
  if (!item) return null;
  const decodedText = he.decode(item.text || "");

  const titleClass = "mb-4 text-4xl font-semibold ";
  const subtitleClass = "mb-6 text-2xl font-semibold ";
  console.info(item);

  return (
    <div className="mx-auto mt-5 max-w-5xl px-4 sm:px-6 lg:px-8">
      <h1 className={titleClass} style={{ color: "#006092" }}>
        {stripHtml(item.title)}
      </h1>

      {item.subtitle && (
        <h2 className={subtitleClass} style={{ color: "#006092" }}>
          {stripHtml(item.subtitle)}
        </h2>
      )}

      <div className={subtitleClass} style={{ color: "#006092" }}>
        {item.date}
      </div>

      <div
        className="mx-auto max-w-full"
        dangerouslySetInnerHTML={{ __html: decodedText }}
      ></div>
      <div className="mt-5">
        <a
          target="_blank"
          href={item.source || "#"}
          rel="noopener noreferrer"
          className="mb-5 cursor-pointer text-lg text-blue-500 hover:underline"
        >
          {item.source}
        </a>
      </div>
      <div className="my-5 border-1" style={{ borderColor: "#006092" }}></div>
    </div>
  );
}
