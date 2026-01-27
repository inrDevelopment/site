import ThematicRoomsButtonList from "@/components/ThematicRooms/ThematicRoomsButtonList";

export default function Thematicrooms() {
  return (
    <div className="mt-5 px-10">
      <p>
        Anseio antigo dos nossos fieis assinantes sempre foi ver o vasto
        conteúdo publicado pelo <strong>INR</strong> fragmentado por áreas de
        interesse. Desejo atendido! Aquilo que mais importa do conteúdo do{" "}
        <strong>INR</strong>, além de integrar as respectivas seções do{" "}
        <strong>Boletim Eletrônico INR</strong>, dos{" "}
        <strong>Classificadores INR</strong>
        (Paraná, Rio Grande do Sul e São Paulo) e, claro, a{" "}
        <strong>Base de Dados INR</strong>, está nesse ambiente agrupado de
        forma prática e didática.
      </p>
      <p className="mt-5">
        Importante informar que um mesmo conteúdo pode estar, ao mesmo tempo, em
        duas, três, quatro salas temáticas distintas. Por exemplo: publicado
        acórdão (seção Jurisprudência, portanto), que trata da viabilidade de
        ingresso de determinada escritura no fólio real e esse ato estará
        alocado tanto na Sala Temática "<strong>RI</strong> - Registro de
        Imóveis" como na Sala Temática "<strong>TN</strong> - Tabelionato de
        Notas".
      </p>
      <p className="mt-5 mb-5 text-4xl" style={{ color: "#006092" }}>
        Índice
      </p>
      <ThematicRoomsButtonList />
    </div>
  );
}
