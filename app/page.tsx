"use client";

import CustomCarousel from "@/components/Home/CustomCarousel";
import ItemCard from "@/components/Home/ItemCard";

export default function Page() {
  return (
    <div className="max-w-8xl mx-auto px-30 py-5">
      <CustomCarousel />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ItemCard
          href="/"
          id="1"
          imageUrl="/images/highlight1.jpg"
          title="Title 1"
          isFavorite={false}
        />
        <ItemCard
          href="/"
          id="1"
          imageUrl="/images/highlight1.jpg"
          title="Sistema Justiça Aberta terá nova versão; atualização de dados será realizada em fevereiro – (CNJ).
"
          isFavorite={false}
        />
        <ItemCard
          href="/"
          id="1"
          imageUrl="/images/highlight1.jpg"
          title="Sistema Justiça Aberta terá nova versão; atualização de dados será realizada em fevereiro – (CNJ).
"
          isFavorite={false}
        />
        <ItemCard
          href="/"
          id="1"
          imageUrl="/images/highlight1.jpg"
          title="Sistema Justiça Aberta terá nova versão; atualização de dados será realizada em fevereiro – (CNJ).
"
          isFavorite={false}
        />
        <ItemCard
          href="/"
          id="1"
          imageUrl="/images/highlight1.jpg"
          title="Title 1"
          isFavorite={false}
        />
      </div>
    </div>
  );
}
