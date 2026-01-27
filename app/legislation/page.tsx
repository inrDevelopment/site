"use client";

import ClickForMoreButton from "@/components/Buttons/ClickForMore";
import PageList from "@/components/ItemsList/PageList";
import { ItemProps } from "@/lib/types/bulletin";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LegislationPage() {
  const [legislation, setLegislation] = useState<ItemProps[]>([]);
  const [offset, setOffset] = useState(10);
  const limit = 10;

  const pageComment = (
    <div>
      <p>
        Os textos legais e infralegais de interesse das atividades notariais e
        de registro são criteriosamente selecionados entre os publicados
        oficialmente. É fonte de pesquisa de legislação, por exemplo, o Caderno
        Executivo do Diário Oficial da União.
      </p>
      <p>
        Contudo, esta seção tem índole meramente informativa. Os atos legais e
        infralegais são por aqui divulgados exatamente como publicados
        oficialmente. Eventuais alterações posteriores em seu conteúdo, ou sua
        revogação, não são consideradas, isto é, o ato de interesse é divulgado,
        mas ele permanecerá, na Base de Dados INR, tal qual veio ao mundo
        jurídico, ainda que, posteriormente, alterado ou revogado.
      </p>
    </div>
  );

  useEffect(() => {
    async function initialFetch() {
      const res = await fetch(
        `/api/bulletin?table=legislation&limit=10&offset=0`,
      );

      const data = await res.json();

      setLegislation(data);
    }

    initialFetch();
  }, []);

  async function loadMoreLegislation() {
    const res = await fetch(
      `/api/bulletin?table=legislation&limit=${limit}&offset=${offset}`,
    );
    if (!res.ok) {
      return;
    }

    const data: ItemProps[] = await res.json();

    setLegislation((prev) => {
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

      <PageList
        content={legislation}
        title="Últimos Atos Legais"
        pageComment={pageComment}
      />

      <ClickForMoreButton
        text="Clique aqui e veja mais legislação"
        onClick={loadMoreLegislation}
      />
    </div>
  );
}
