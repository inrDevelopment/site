"use client";

import ClickForMoreButton from "@/components/Buttons/ClickForMore";
import PageList from "@/components/ItemsList/PageList";
import { ItemProps } from "@/lib/types/bulletin";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [noticias, setNoticias] = useState<ItemProps[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  useEffect(() => {
    async function initialFetch() {
      const res = await fetch(`/api/bulletin/news?limit=10&offset=0`);

      const data = await res.json();
      console.info(data);

      setNoticias(data);
    }

    initialFetch();
  }, []);

  async function loadMoreNews() {
    const res = await fetch(
      `/api/bulletin/news&limit=${limit}&offset=${offset}`,
    );
    if (!res.ok) {
      return;
    }

    const data: ItemProps[] = await res.json();

    setNoticias((prev) => {
      const seen = new Set(prev.map((item) => item.id));
      const merged = [...prev, ...data.filter((item) => !seen.has(item.id))];
      return merged;
    });

    setOffset((prev) => prev + data.length);
  }

  return (
    <div className="w-full">
      <div className="relative h-64 w-full md:h-86">
        <Image
          src="https://inrpublicacoes.com.br/site/img/noticias/banner.jpg"
          alt="Banner de Notícias"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Notícias
          </h1>
        </div>
      </div>

      <PageList
        content={noticias}
        title="Últimas Notícias"
        pageComment="Grande esforço de garimpagem resulta na divulgação responsável de informações recentes colecionadas a partir de busca nos sítios oficiais na rede mundial de computadores, especialmente nos endereços de órgãos públicos relacionados com as áreas do Direito de interesse de notários e registradores. São, também, visitadas as páginas de tribunais estaduais e tribunais superiores, além de algumas pertencentes às entidades de classe que representam os delegados dos serviços extrajudiciais."
      />

      <ClickForMoreButton
        text="Clique aqui e veja mais notícias"
        onClick={loadMoreNews}
      />
    </div>
  );
}
