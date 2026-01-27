"use client";

import CustomPagination from "@/components/Classificators/Pagination";
import PageList from "@/components/ItemsList/PageList";
import { ItemProps } from "@/lib/types/bulletin";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ClassRSPage() {
  const [classRS, setClassRS] = useState<ItemProps[]>([]);
  const [offset, setOffset] = useState(10);
  const limit = 10;

  const pageComment = (
    <div className="text-start">
      <p>
        Após minuciosa garimpagem no DJe - Diário da Justiça eletrônico do
        Estado do Rio Grande do Sul, os atos de interesse das atividades
        notariais e de registro são levados ao Classificador correspondente e
        enviados aos Notários e Registradores diariamente.
      </p>
      <p>
        Fazem parte dos Classificadores encaminhados cotidianamente ao Assinante
        das Publicações INR os atos dos seguintes cadernos:
      </p>
      <ul className="ml-5 list-disc space-y-2 pl-5 marker:text-lg">
        <li>
          Caderno Administrativo (Tribunal de Justiça/Conselho Superior da
          Magistratura/Corregedoria Geral da Justiça etc.);
        </li>
        <li>Caderno Capital 1º Grau (Vara de Registros Públicos);</li>
        <li>
          Caderno Capital 2º Grau (Decisões, na íntegra, dos processos
          selecionados); e
        </li>
        <li>Caderno de Editais (Editais CDAs).</li>
      </ul>
      <p>
        Ressalta-se que os atos contidos nas edições diárias são inseridos na
        Base de Dados INR no mesmo dia de sua divulgação oficial.
      </p>
      <p>
        A Base de Dados INR dispõe de moderna ferramenta de busca, permitindo ao
        usuário pesquisas sempre muito rápidas e certeiras.
      </p>
    </div>
  );

  useEffect(() => {
    async function initialFetch() {
      const res = await fetch(`/api/bulletin?table=classRS&limit=10&offset=0`);

      const data = await res.json();

      setClassRS(data);
    }

    initialFetch();
  }, []);

  async function loadMoreClassRS() {
    const res = await fetch(
      `/api/bulletin?table=classRS&limit=${limit}&offset=${offset}`,
    );
    if (!res.ok) {
      return;
    }

    const data: ItemProps[] = await res.json();

    setClassRS((prev) => {
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
          src="https://inrpublicacoes.com.br/site/img/classificadores/banner_rs.jpg"
          alt="Banner de Classificadores PR"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Classificadores INR RS
          </h1>
        </div>
      </div>

      <PageList content={classRS} title="Índice" pageComment={pageComment} />
      <CustomPagination />
    </div>
  );
}
