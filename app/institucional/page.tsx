"use client";

import InstitucionalInstroduction from "@/components/Institucional/InstitucionalInstroduction";
import LeaderButton from "@/components/Institucional/LeaderButton";
import SectionButton from "@/components/Institucional/SectionButton";
import {
  buttonsArray,
  buttonsArray2,
  buttonsArray3,
} from "@/lib/data/institucional/buttonsArray";
import { leadersArray } from "@/lib/data/institucional/leadersArray";
import { useState } from "react";

export default function Institucional() {
  const [actualLeaderId, setActualLeaderId] = useState<number>(
    leadersArray[0].id,
  );

  const actualLeader = leadersArray.find(
    (leader) => leader.id === actualLeaderId,
  );

  return (
    <div className="px-10">
      <InstitucionalInstroduction />

      <div className="px-10">
        <div className="mt-10 grid grid-cols-6 justify-center gap-2">
          {buttonsArray.map((item) => (
            <SectionButton item={item} key={item.id} />
          ))}
        </div>
        <div className="mt-10 grid grid-cols-7 justify-center gap-2">
          {buttonsArray2.map((item) => (
            <SectionButton item={item} key={item.id} />
          ))}
        </div>
      </div>

      <h1 className="mt-15 text-center text-3xl" style={{ color: "#006092" }}>
        Instruímos
      </h1>

      <div className="px-10">
        <div className="mt-10 grid grid-cols-3 justify-center gap-2 px-10">
          {buttonsArray3.map((item) => (
            <SectionButton item={item} key={item.id} />
          ))}
        </div>
      </div>

      <h1 className="mt-15 text-center text-3xl" style={{ color: "#006092" }}>
        Dirigentes das Publicações INR
      </h1>

      <div className="mt-10 flex justify-center gap-10">
        {leadersArray.map((item) => (
          <LeaderButton
            key={item.id}
            item={item}
            isActive={item.id === actualLeaderId}
            onClick={() => setActualLeaderId(item.id)}
          />
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-4xl text-justify">
        {actualLeader?.text}
      </div>
    </div>
  );
}
