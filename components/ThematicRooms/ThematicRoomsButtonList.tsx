import ThematicRoomButton from "./ThematicRoomButton";

export default function ThematicRoomsButtonList() {
  const roomsArray: { roomName: string; id: number }[] = [
    { roomName: "A) RCPN – Registro Civil das Pessoas Naturais", id: 1 },
    { roomName: "B) RI – Registro de Imóveis", id: 2 },
    {
      roomName:
        "C) RTD e RCPJ – Registro de Títulos e Documentos e Civil das Pessoas Jurídicas",
      id: 3,
    },
    { roomName: "D) TN – Tabelionato de Notas", id: 4 },
    { roomName: "E) TP – Tabelionato de Protesto de Títulos", id: 5 },
    {
      roomName:
        "F) Acórdãos do Conselho Superior da Magistratura do Estado de São Paulo",
      id: 6,
    },
    {
      roomName:
        "G) Decisões da Corregedoria Geral da Justiça do Estado de São Paulo",
      id: 7,
    },
    {
      roomName:
        "H) Relação Administrativa entre Notários e Registradores e o Poder Delegante",
      id: 8,
    },
    {
      roomName: "I) Responsabilidade Civil de Notários e Registradores",
      id: 9,
    },
    {
      roomName: "J) Personalidade Jurídica das Unidades Extrajudiciais",
      id: 10,
    },
    {
      roomName:
        "K) O Direito Tributário Aplicado às Atividades Notariais e de Registro",
      id: 11,
    },
    {
      roomName:
        "L) O Direito do Trabalho Aplicado às Atividades Notariais e de Registro",
      id: 12,
    },
    { roomName: "M) Gestão e Atendimento/Tecnologia da Informação", id: 13 },
    { roomName: "N) Concursos", id: 14 },
    {
      roomName:
        "O) A Interinidade/Designação nas Atividades Notarial e de Registro",
      id: 15,
    },
    { roomName: "P) LGPD e Compliance para Cartórios", id: 16 },
    {
      roomName:
        "Q) Reforma Tributária do Consumo e as Atividades Notariais e de Registro",
      id: 17,
    },
  ];

  return (
    <div className="flex flex-wrap justify-start gap-x-[2%] gap-y-4">
      {roomsArray.map((item) => (
        <ThematicRoomButton
          key={item.id}
          roomName={item.roomName}
          id={item.id}
        />
      ))}
    </div>
  );
}
