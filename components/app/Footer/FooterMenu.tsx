type FooterMenuItem = {
  id: number;
  name: string;
  href: string;
};

type FooterMenuItemColumns = {
  name?: string;
  items: FooterMenuItem[];
};

export default function FooterMenu() {
  const columns: FooterMenuItemColumns[] = [
    {
      items: [
        { id: 1, name: "Institucional", href: "/institucional" },
        { id: 2, href: "/lgpd", name: "LGPD" },
      ],
      name: "",
    },
    {
      items: [
        { id: 3, name: "Notícias", href: "/news" },
        { id: 4, href: "/jurisprudence", name: "Jurisprudência" },
        { id: 5, href: "/legislation", name: "Legislação" },
        { id: 6, href: "/opinion", name: "Opinião" },
        { id: 7, href: "/questions", name: "Perguntas e Respostas" },
        { id: 8, href: "/editorsMessages", name: "Mensagens dos Editores" },
        { id: 9, href: "/legalOpinion", name: "Pareceres CGJ SP" },
        {
          id: 10,
          href: "/supplements",
          name: "Suplementos da Consultoria INR",
        },
        { id: 11, href: "/storiesofthecraft", name: "Histórias do Ofício" },
      ],
      name: "Boletim Eletrônico INR",
    },
    {
      items: [
        { id: 12, name: "Classificadores INR PR", href: "/classPR" },
        { id: 13, href: "/classRS", name: "Classificadores INR RS" },
        { id: 14, href: "/classSP", name: "Classificadores INR SP" },
        {
          id: 15,
          href: "/classaccumulated",
          name: "Arquivos Acumulados dos Classificadores SP",
        },
      ],
      name: "Classificadores INR",
    },
    {
      items: [{ id: 16, name: "Salas Temáticas", href: "/thematicrooms" }],
    },
    {
      name: "Serviços",
      items: [
        { id: 17, name: "Consultoria INR", href: "/consulting" },
        { id: 18, name: "INR Cursos", href: "/inrCourses" },
        { id: 19, name: "TV INR", href: "/tv" },
        {
          id: 20,
          name: "Consultoria Notarial e Registral",
          href: "/notarialandregistryconsulting",
        },
      ],
    },
    {
      items: [
        {
          id: 21,
          name: "Base de Dados",
          href: "/legaldatabase",
        },
        {
          id: 22,
          name: "Consultoria INR",
          href: "/consulting",
        },
        {
          id: 23,
          name: "DOWNLOADS",
          href: "/downloads",
        },
        {
          id: 24,
          name: "INR CONTÁBIL",
          href: "/inraccounting",
        },
        {
          id: 25,
          name: "Fale Conosco",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <footer className="px-40 py-6" style={{ backgroundColor: "#0172B6" }}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-2">
            {col.name && (
              <p className="mb-2 font-semibold text-white">{col.name}</p>
            )}
            {col.items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm text-white hover:underline"
                style={{ fontSize: 15 }}
              >
                {item.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
