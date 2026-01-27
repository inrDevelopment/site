"use client";

import ClickForMoreButton from "@/components/Buttons/ClickForMore";
import PageList from "@/components/ItemsList/PageList";
import { ItemProps } from "@/lib/types/bulletin";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function QuestionsAndAnswersPage() {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<ItemProps[]>(
    [],
  );
  const [offset, setOffset] = useState(10);
  const limit = 10;

  const pageComment = (
    <div>
      <p>
        A equipe de colunistas dos artigos opinativos que auxiliam nossos
        clientes na tomada de decisões é formada por integrantes das Publicações
        INR e por renomados profissionais.
      </p>
    </div>
  );

  useEffect(() => {
    async function initialFetch() {
      const res = await fetch(
        `/api/bulletin?table=questions&limit=10&offset=0`,
      );

      const data = await res.json();

      setQuestionsAndAnswers(data);
    }

    initialFetch();
  }, []);

  async function loadMoreQuestionsAndAnswers() {
    const res = await fetch(
      `/api/bulletin?table=questions&limit=${limit}&offset=${offset}`,
    );
    if (!res.ok) {
      return;
    }

    const data: ItemProps[] = await res.json();

    setQuestionsAndAnswers((prev) => {
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
          src="https://inrpublicacoes.com.br/site/img/perguntas_respostas/banner.jpg"
          alt="Banner de Perguntas e Respostas"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Perguntas e Respostas
          </h1>
        </div>
      </div>

      <PageList
        content={questionsAndAnswers}
        title="Últimas Consultas"
        pageComment={pageComment}
      />

      <ClickForMoreButton
        text="Clique aqui e veja mais Perguntas e Respostas"
        onClick={loadMoreQuestionsAndAnswers}
      />
    </div>
  );
}
