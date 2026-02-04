import { LeaderType } from "@/lib/types/institucional";
import Image from "next/image";

type LeaderButtonProps = {
  item: LeaderType;
  isActive: boolean;
  onClick: () => void;
};

export default function LeaderButton({
  item,
  isActive,
  onClick,
}: LeaderButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 focus:outline-none"
    >
      <div className={item.className}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className={`transition ${
            isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
          }`}
        />
      </div>

      <span
        className={`text-lg ${isActive ? "font-semibold" : ""}`}
        style={{ color: "#006092" }}
      >
        {item.name}
      </span>
    </button>
  );
}
