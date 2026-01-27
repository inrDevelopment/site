"use client";

import ClickForMoreButton from "@/components/Buttons/ClickForMore";
import PageList from "@/components/ItemsList/PageList";
import { ItemProps } from "@/lib/types/bulletin";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function JurisprudencePage() {
  const [jurisprudence, setJurisprudence] = useState<ItemProps[]>([]);
  const [offset, setOffset] = useState(10);
  const limit = 10;

  const pageComment = (
    <div>
      <p>
        As Publicações INR reúnem o maior e mais completo banco de dados
        jurisprudencial de interesse de Notários e Registradores. São
        consultadas, diariamente, para obtenção dos documentos encontrados nesta
        seção, todas as páginas dos "DJe" do Conselho Nacional de Justiça, do
        Superior Tribunal de Justiça, do Tribunal de Justiça do Estado do
        Paraná, do Tribunal de Justiça do Estado do Rio Grande do Sul, do
        Tribunal de Justiça do Estado de São Paulo e de alguns tribunais
        federais. São selecionadas decisões que interessam à classe, notadamente
        nas áreas Constitucional, Civil, Processual Civil, Notarial, Registral,
        Tributária e Trabalhista.
      </p>
    </div>
  );

  useEffect(() => {
    async function initialFetch() {
      const res = await fetch(
        `/api/bulletin?table=jurisprudence&limit=10&offset=0`,
      );

      const data = await res.json();

      setJurisprudence(data);
    }

    initialFetch();
  }, []);

  async function loadMoreJurisprudence() {
    const res = await fetch(
      `/api/bulletin?table=jurisprudence&limit=${limit}&offset=${offset}`,
    );
    if (!res.ok) {
      return;
    }

    const data: ItemProps[] = await res.json();

    setJurisprudence((prev) => {
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
          src="https://inrpublicacoes.com.br/site/img/jurisprudencias/banner.jpg"
          alt="Banner de Jurisprudência"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Jurisprudência
          </h1>
        </div>
      </div>

      <PageList
        content={jurisprudence}
        title="Últimas Decisões"
        pageComment={pageComment}
      />

      <ClickForMoreButton
        text="Clique aqui e veja mais jurisprudência"
        onClick={loadMoreJurisprudence}
      />
    </div>
  );
}
