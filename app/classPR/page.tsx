"use client";

import CustomPagination from "@/components/Classificators/Pagination";
import PRIntroduction from "@/components/Classificators/PRIntroduction";
import { colors } from "@/lib/colors";
import { ItemProps } from "@/lib/types/bulletin";
import { DBClassifierItem } from "@/lib/types/classifiers";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClassPRPage() {
  const [classPR, setClassPR] = useState<DBClassifierItem[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 12;

  useEffect(() => {
    async function initialFetch() {
      try {
        const res = await fetch(`/api/classifiers?state=3&limit=12&offset=0`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Erro ao buscar classificadores");
        }

        const data = await res.json();

        console.info(data);

        setClassPR(data);
      } catch (error) {
        console.warn(error instanceof Error ? error.message : error);
      }
    }

    initialFetch();
  }, []);

  async function loadMoreClassPR() {
    const res = await fetch(
      `/api/bulletin?table=classPR&limit=${limit}&offset=${offset}`,
    );
    if (!res.ok) {
      return;
    }

    const data: ItemProps[] = await res.json();

    // setClassPR((prev) => {
    //   const seen = new Set(prev.map((item) => item.id));
    //   const merged = [...prev, ...data.filter((item) => !seen.has(item.id))];
    //   return merged;
    // });

    setOffset((prev) => prev + data.length);
  }

  return (
    <div className="w-full px-10">
      <div className="relative h-64 w-full md:h-86">
        <Image
          src="https://inrpublicacoes.com.br/site/img/classificadores/banner_pr.jpg"
          alt="Banner de Classificadores PR"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Classificadores INR PR
          </h1>
        </div>
      </div>
      <div>
        <PRIntroduction />
      </div>

      <h1
        className="my-10 text-4xl font-semibold"
        style={{ color: colors.primary.title }}
      >
        Índice
      </h1>

      <ul>
        {classPR.map((item) => (
          <li className="my-5 hover:underline">
            <Link
              href={`/classPRIndex?date=${encodeURIComponent(item.data_iso)}`}
              key={item.id}
              className="text-lg font-semibold"
              style={{ color: colors.primary.title }}
            >
              [+] {item.datacad}
            </Link>
          </li>
        ))}
      </ul>
      <CustomPagination />
    </div>
  );
}
