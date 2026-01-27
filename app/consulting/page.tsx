import Image from "next/image";

export default function Consulting() {
  return (
    <div className="w-full">
      <div className="relative h-64 w-full md:h-86">
        <Image
          src="https://inrpublicacoes.com.br/site/img/consultoria/banner.jpg"
          alt="Banner de Consultoria INR"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Consultoria INR
          </h1>
        </div>
      </div>
      <div className="mx-50 mt-10">
        <p>
          Ao assinante das <strong>Publicações INR</strong> está aberto
          importante canal de comunicação com especialistas para esclarecimentos
          de dúvidas. Profissionais especializados nas áreas Tributária,
          Trabalhista e Previdenciária, e muito bem identificados com a
          legislação aplicada aos serviços notariais e de registro, permanecem a
          postos para responder às questões que lhes são oferecidas diariamente.
          Diante de dúvidas que versem, exclusivamente, sobre os Direitos
          Tributário, Trabalhista e Previdenciário, o Assinante pode oferecê-las
          à apreciação da equipe da <strong>Consultoria INR</strong>, por
          escrito ({" "}
          <a
            className="text-blue-500 hover:underline"
            target="_blank"
            href="https://inrpublicacoes.com.br/site/formulario-consultoria"
          >
            acesse aqui o ambiente específico
          </a>{" "}
          ) e telefone (11-2959-0220), sem limites de quantidade.
        </p>
      </div>
    </div>
  );
}
