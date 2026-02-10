"use client";

import LegislationDisplay from "@/components/Bulletin/Legislation/LegislationDisplay";
import { LegislationItem } from "@/lib/types/bulletin";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LegislationById() {
  const [legislation, setLegislation] = useState<LegislationItem>();
  const params = useParams();

  useEffect(() => {
    const initialFetch = async () => {
      const id = Number(params.id);

      const legislationResponse = await fetch(
        `/api/bulletin/legislation?id=${id}`,
      );
      if (!legislationResponse.ok) return;
      const data: LegislationItem = await legislationResponse.json();
      setLegislation(data);
      console.warn(params);
    };

    initialFetch();
  }, []);

  return <>{legislation && <LegislationDisplay item={legislation} />}</>;
}
