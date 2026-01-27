"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function RoomPage() {
  const searchParams = useSearchParams();

  const encodedRoomName = searchParams.get("roomName"); // retorna string codificada
  const id = searchParams.get("id");

  if (!encodedRoomName || !id) return <p>Parâmetro inválido</p>;

  // Decodifica de volta para o nome original
  const roomName = decodeURIComponent(encodedRoomName);

  return (
    <div className="w-full">
      <div className="relative h-64 w-full md:h-86">
        <Image
          src="https://inrpublicacoes.com.br/site/img/salas_tematicas/banner_direito_notarial.jpg"
          alt="Banner de Sala Temática"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            {roomName}
          </h1>
        </div>
      </div>
      <p className="mt-5 text-4xl" style={{ color: "#006092" }}>
        Índice
      </p>
    </div>
  );
}
