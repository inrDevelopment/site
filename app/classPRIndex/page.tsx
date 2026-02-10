"use client";

import { colors } from "@/lib/colors";
import formatDateBR from "@/lib/functions";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function classPRIndex() {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const formatedDate = formatDateBR(date || "");

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.info("date recebido da URL:", date);
  }, [date]);

  function normalizeDate(date: string) {
    return date.split("T")[0];
  }

  useEffect(() => {
    if (!date) return;

    setLoading(true);

    const normalizedDate = normalizeDate(date);

    fetch(`/api/classifiers?state=3&date=${normalizedDate}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .finally(() => {
        setLoading(false);
      });
    console.info(data);
  }, [date]);

  return (
    <div className="mx-10">
      <h1
        className="mt-5 text-center text-3xl"
        style={{ color: colors.primary.title, fontWeight: 400 }}
      >
        Classificadores INR PR - {formatedDate}
      </h1>

      <div className="flex items-center gap-2">
        <Mail className="h-6 w-6 text-gray-500" />
        <Link
          href="/classSendEmail"
          className="font-semibold hover:underline"
          style={{ color: colors.primary.title }}
        >
          Enviar por e-mail
        </Link>
      </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
