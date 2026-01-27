"use client";

import ClickForMoreButton from "@/components/Buttons/ClickForMore";
import PageList from "@/components/ItemsList/PageList";
import { ItemProps } from "@/lib/types/bulletin";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SuplementsPage() {
  const [suplements, setSuplements] = useState<ItemProps[]>([]);
  const [offset, setOffset] = useState(10);
  const limit = 10;

  const pageComment = (
    <div>
      <p>
        A Consultoria mantida pelo INR apoia-se em relevante acervo técnico para
        instruir com prudência e competência seus usuários. São textos
        produzidos pelos membros da consultoria, com supervisão ativa dos seus
        coordenadores (Antonio Herance Filho e Anderson Herance), que dão
        suporte teórico à opinião revelada ao consulente.
      </p>
      <p>
        Esses textos, que invariavelmente abordam questões ligadas aos Direitos
        Tributário, Trabalhista e Previdenciário, estão agora disponíveis a
        todos os assinantes INR, mesmo àqueles poucos que jamais nos dirigiram
        uma só consulta. Encontre por aqui várias informações que lhe ajudarão a
        resolver problemas cotidianos. E, claro, restando alguma dúvida depois
        da leitura de quaisquer dos conteúdos, sinta-se à vontade para procurar
        pela Consultoria INR.
      </p>
      <p>
        Neste ambiente podem ser acessados todos os Suplementos publicados pelo
        INR.
      </p>
    </div>
  );

  useEffect(() => {
    async function initialFetch() {
      const res = await fetch(
        `/api/bulletin?table=suplements&limit=10&offset=0`,
      );

      const data = await res.json();

      setSuplements(data);
    }

    initialFetch();
  }, []);

  async function loadMoreSuplements() {
    const res = await fetch(
      `/api/bulletin?table=suplements&limit=${limit}&offset=${offset}`,
    );
    if (!res.ok) {
      return;
    }

    const data: ItemProps[] = await res.json();

    setSuplements((prev) => {
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
          src="https://inrpublicacoes.com.br/site/img/suplementos/banner.jpg"
          alt="Banner de Suplementos"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Suplementos da Consultoria INR
          </h1>
        </div>
      </div>

      <PageList content={suplements} title="" pageComment={pageComment} />

      <ClickForMoreButton
        text="Clique aqui e veja mais Suplementos"
        onClick={loadMoreSuplements}
      />
    </div>
  );
}
