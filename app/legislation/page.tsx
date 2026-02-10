"use client";

import ListLegislationItem from "@/components/Bulletin/Legislation/ListLegislationItem";
import ClickForMoreButton from "@/components/Buttons/ClickForMore";
import { LegislationItem } from "@/lib/types/bulletin";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LegislationPage() {
  const [legislation, setLegislation] = useState<LegislationItem[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  useEffect(() => {
    async function initialFetch() {
      const res = await fetch(`/api/bulletin/legislation?limit=10&offset=0`);

      const data = await res.json();
      console.info(data);

      setLegislation(data);
    }

    initialFetch();
  }, []);

  async function loadMoreLegislation() {
    const res = await fetch(
      `/api/bulletin/legislation?limit=${limit}&offset=${offset}`,
    );
    if (!res.ok) {
      return;
    }

    const data: LegislationItem[] = await res.json();

    setLegislation((prev) => {
      const seen = new Set(prev.map((item) => item.idlegislacao));
      const merged = [
        ...prev,
        ...data.filter((item) => !seen.has(item.idlegislacao)),
      ];
      return merged;
    });

    setOffset((prev) => prev + data.length);
  }

  return (
    <div className="w-full">
      <div className="relative h-64 w-full md:h-86">
        <Image
          src="https://inrpublicacoes.com.br/site/img/legislacoes/banner.jpg"
          alt="Banner de Legislação"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Legislação
          </h1>
        </div>
      </div>

      <ListLegislationItem content={legislation} />

      <ClickForMoreButton
        text="Clique aqui e veja mais notícias"
        onClick={loadMoreLegislation}
      />
    </div>
  );
}
