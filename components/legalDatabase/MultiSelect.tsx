"use client";

import { legalDatabaseMenuItems } from "@/lib/data/legalDatabaseMenuItems";
import { useEffect, useRef, useState } from "react";

export default function MultiSelect() {
  const options = legalDatabaseMenuItems;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOption = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const toggleAll = () => {
    if (selected.length === options.length) {
      setSelected([]);
    } else {
      setSelected(options.map((o) => o.id));
    }
  };

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Botão para abrir/fechar dropdown */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-left shadow-sm"
      >
        <span
          className={selected.length === 0 ? "text-gray-400" : "text-black"}
        >
          {selected.length === 0
            ? "Selecione as seções"
            : `${selected.length} selecionadas`}
        </span>
        <span className="ml-2">&#9662;</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-md border bg-white shadow-lg">
          <div
            onClick={toggleAll}
            className="cursor-pointer px-3 py-2 font-medium hover:underline"
            style={{ color: "#006092" }}
          >
            {selected.length === options.length
              ? "Desmarcar todos"
              : "Marcar todos"}
          </div>

          <div className="divide-y">
            {options.map((option) => (
              <label
                key={option.id}
                className="flex cursor-pointer items-center gap-2 px-3 py-2 font-bold hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option.id)}
                  onChange={() => toggleOption(option.id)}
                  className="accent-blue-600"
                />
                {option.name}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
