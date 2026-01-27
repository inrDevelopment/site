"use client";

import ClickForMoreButton from "@/components/Buttons/ClickForMore";
import PageList from "@/components/ItemsList/PageList";
import { ItemProps } from "@/lib/types/bulletin";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StoriesOfTheCraftPage() {
  const [storiesOfTheCraft, setStoriesOfTheCraft] = useState<ItemProps[]>([]);
  const [offset, setOffset] = useState(10);
  const limit = 10;

  const pageComment = (
    <div>
      <p>
        "Histórias do Ofício" É uma iniciativa em parceria entre o INR e a
        jornalista Samila Ariana Machado. A coluna traz entrevistas exclusivas
        com personalidades do setor notarial e registral do Brasil e do
        exterior, revelando não apenas suas trajetórias profissionais, mas
        também seu impacto social e sua essência humana. O projeto conta com o
        apoio de importantes nomes e instituições do segmento: ICNR — Instituto
        de Compliance Notarial e Registral, Blog do DG, GADEC Cartórios — Grupo
        de Alto Desempenho em Estudos de Cartório, Pedro Rocha (Tabelião e
        Registrador Civil), Rogério Silva (empresário especializado em livros
        raros, clássicos e antigos), Jornal Diário, Douglas Gavazzi — Advocacia
        e Consultoria Notarial e Registral, e Estudos Notariais.
      </p>
      <p>
        Com um olhar sensível e aprofundado, Histórias do Ofício valoriza os
        profissionais que constroem, com ética e dedicação, o presente e o
        futuro do serviço extrajudicial.
      </p>
    </div>
  );

  useEffect(() => {
    async function initialFetch() {
      const res = await fetch(
        `/api/bulletin?table=storiesofthecraft&limit=10&offset=0`,
      );

      const data = await res.json();

      setStoriesOfTheCraft(data);
    }

    initialFetch();
  }, []);

  async function loadMoreStoriesofthecraft() {
    const res = await fetch(
      `/api/bulletin?table=storiesofthecraft&limit=${limit}&offset=${offset}`,
    );
    if (!res.ok) {
      return;
    }

    const data: ItemProps[] = await res.json();

    setStoriesOfTheCraft((prev) => {
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
          src="https://inrpublicacoes.com.br/site/img/historias/banner.png"
          alt="Banner de Histórias do Ofício"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Histórias do Ofício
          </h1>
        </div>
      </div>

      <PageList
        content={storiesOfTheCraft}
        title="Últimas Histórias"
        pageComment={pageComment}
      />

      <ClickForMoreButton
        text="Clique aqui e veja mais Histórias do Ofício"
        onClick={loadMoreStoriesofthecraft}
      />
    </div>
  );
}
