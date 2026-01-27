"use client";

import ItemDisplay from "@/components/Bulletin/ItemDisplay";
import { ItemProps } from "@/lib/types/bulletin";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewsById() {
  const [news, setNews] = useState<ItemProps>();
  const params = useParams();

  useEffect(() => {
    const initialFetch = async () => {
      const id = Number(params.id);

      const newsResponse = await fetch(`/api/bulletin/${id}?table=news`);
      if (!newsResponse.ok) return;
      const data: ItemProps = await newsResponse.json();
      setNews(data);
      console.warn(params);
    };

    initialFetch();
  }, []);

  return <>{news && <ItemDisplay item={news} />}</>;
}
