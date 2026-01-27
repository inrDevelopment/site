"use client";

import ClickForMoreButton from "@/components/Buttons/ClickForMore";
import PageList from "@/components/ItemsList/PageList";
import { ItemProps } from "@/lib/types/bulletin";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EditorsMessagesPage() {
  const [editorsMessages, setEditorsMessages] = useState<ItemProps[]>([]);
  const [offset, setOffset] = useState(10);
  const limit = 10;

  const pageComment = (
    <div>
      <p>
        É por meio desta seção que os editores das Publicações INR fazem contato
        direto com seus leitores. Ora para esmiuçar alguma informação, ora para
        falar sobre o próprio INR, as Mensagens dos Editores servem justamente
        para aproximar os assinantes daqueles que fazem o INR.
      </p>
    </div>
  );

  useEffect(() => {
    async function initialFetch() {
      const res = await fetch(
        `/api/bulletin?table=editorsmessages&limit=10&offset=0`,
      );

      const data = await res.json();

      setEditorsMessages(data);
    }

    initialFetch();
  }, []);

  async function loadMoreEditorsMessages() {
    const res = await fetch(
      `/api/bulletin?table=editorsmessages&limit=${limit}&offset=${offset}`,
    );
    if (!res.ok) {
      return;
    }

    const data: ItemProps[] = await res.json();

    setEditorsMessages((prev) => {
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
          alt="Banner de Mensagens dos Editores"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Mensagens dos Editores
          </h1>
        </div>
      </div>

      <PageList
        content={editorsMessages}
        title="Últimas Mensagens"
        pageComment={pageComment}
      />

      <ClickForMoreButton
        text="Clique aqui e veja mais mensagens"
        onClick={loadMoreEditorsMessages}
      />
    </div>
  );
}
