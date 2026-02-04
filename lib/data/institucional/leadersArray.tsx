import { LeaderType } from "@/lib/types/institucional";

export const leadersArray: LeaderType[] = [
  {
    id: 1,
    name: "Antônio Herance Filho",
    src: "https://inrpublicacoes.com.br/sistema/img_up/_20160928141035foto_1.jpg",
    alt: "Antônio Herance Filho",
    text: (
      <div>
        <p>
          <strong>Antonio Herance Filho</strong>
        </p>
        <p className="mt-5">
          Advogado e pós-graduado em Direito Processual Tributário pela
          Pontifícia Universidade Católica de São Paulo - PUC-SP, em Direito
          Notarial e Registral Imobiliário pela Pontifícia Universidade Católica
          de Minas Gerais - PUC-MG e em Direito Constitucional e de Contratos
          pelo Centro de Extensão Universitária de São Paulo. É professor de
          Direito Tributário aplicado às atividades notariais e de registro e
          autor de várias obras e artigos.
        </p>
        <p className="mt-5">
          É, ainda, coordenador tributário da <strong>INR Contábil</strong> e da{" "}
          <strong>Consultoria INR</strong> e coeditor{" "}
          <strong>das Publicações INR</strong>.
        </p>
        <p className="mt-5">
          <a
            href="mailto:herance@inr.com.br"
            style={{ color: "#0172B6" }}
            className="hover:underline"
          >
            herance@inr.com.br
          </a>
        </p>
      </div>
    ),
    className: "relative h-[197px] w-[205px]",
  },
  {
    id: 2,
    name: "Anderson Herance",
    src: "https://inrpublicacoes.com.br/sistema/img_up/_20160928141225foto_2.jpg",
    alt: "Anderson Herance",
    text: (
      <div>
        <p>
          <strong>Anderson Herance</strong>
        </p>
        <p className="mt-5">
          Advogado, coordenador trabalhista da <strong>INR Contábil</strong> e
          da <strong>Consultoria INR</strong> e coeditor das{" "}
          <strong>Publicações INR</strong>.
        </p>
        <p className="mt-5">
          <a
            href="mailto:andersonherance@inr.com.br"
            style={{ color: "#0172B6" }}
            className="hover:underline"
          >
            andersonherance@inr.com.br
          </a>
        </p>
      </div>
    ),
    className: "relative h-[197px] w-[205px]",
  },
  {
    id: 3,
    name: "Fernanda Mathias de Andrade Herance",
    src: "https://inrpublicacoes.com.br/sistema/img_up/_20240526140632whatsapp_image_2024_05_26_at_13.56.27.jpeg",
    alt: "Fernanda Mathias de Andrade Herance",
    text: (
      <div>
        <p>
          <strong>Fernanda Mathias de Andrade Herance</strong>
        </p>
        <p className="mt-5">
          Advogada, especialista em Direito Tributário pela Pontifícia
          Universidade Católica de São Paulo - PUC-SP e pós-graduada em Direito
          da Família e Sucessões pelo Centro de Extensão Universitária de São
          Paulo.
        </p>
        <p className="mt-5">
          É, ainda, coeditora das <strong>Publicações INR</strong>.
        </p>
        <p className="mt-5">
          <a
            href="mailto:fernanda@inr.com.br"
            style={{ color: "#0172B6" }}
            className="hover:underline"
          >
            fernanda@inr.com.br
          </a>
        </p>
      </div>
    ),
    className: "relative h-[205px] w-[146px]",
  },
];
