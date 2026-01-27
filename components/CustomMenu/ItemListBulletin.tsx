import MenuItem from "./MenuItem";

export default function ItemListBulletin() {
  return (
    <>
      <MenuItem
        href="/news"
        itemName="Notícias"
        src="/icons/noticias.svg"
        alt="Notícias"
      />
      <MenuItem
        href="/jurisprudence"
        itemName="Jurisprudência"
        src="/icons/jurisprudencia.svg"
        alt="Jurisprudência"
      />
      <MenuItem
        href="/legislation"
        itemName="Legislação"
        src="/icons/legislacao.svg"
        alt="Legislação"
      />
      <MenuItem
        href="/opinion"
        itemName="Opinião"
        src="/icons/opiniao.svg"
        alt="Opinião"
      />
      <MenuItem
        href="/questions"
        itemName="Perguntas e Respostas"
        src="/icons/perguntas.svg"
        alt="Perguntas e Respostas"
      />
      <MenuItem
        href="/editorsMessages"
        itemName="Mensagens dos Editores"
        src="/icons/boletim.svg"
        alt="Mensagens dos Editores"
      />
      <MenuItem
        href="/legalOpinion"
        itemName="Pareceres CGJ SP"
        src="/icons/pareceres.svg"
        alt="Pareceres CGJ SP"
      />
      <MenuItem
        href="/supplements"
        itemName="Suplementos da Consultoria INR"
        src="/icons/boletim.svg"
        alt="Suplementos da Consultoria INR"
      />
      <MenuItem
        href="/storiesofthecraft"
        itemName="Histórias do Ofício"
        src="/icons/historias.svg"
        alt="Histórias do Ofício"
      />
    </>
  );
}
