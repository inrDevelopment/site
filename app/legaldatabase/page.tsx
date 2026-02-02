import MultiSelect from "@/components/legalDatabase/MultiSelect";
import Image from "next/image";

export default function Legaldatabase() {
  return (
    <div className="w-full">
      <div className="relative h-64 w-full md:h-86">
        <Image
          src="https://inrpublicacoes.com.br/site/img/base_dados/banner.jpg"
          alt="Banner de Base de Dados"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Base de Dados
          </h1>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-center font-bold">
          SELECIONE A(S) SEÇÃO(ÕES) QUE DESEJA PESQUISAR: (obrigatório)
        </p>
        <p
          style={{ color: "#006092", fontSize: 13 }}
          className="mt-5 text-center"
        >
          (você pode escolher mais de uma seção e para confirmar a seleção basta
          clicar em qualquer espaço fora do campo)
        </p>
        <p
          style={{ color: "#006092", fontSize: 13 }}
          className="mt-5 text-center"
        >
          (a pesquisa de Jurisprudência também retorna resultados de decisões
          publicadas nos Classificadores INR (PR/RS/SP) a partir de 13/12/2016)
        </p>
      </div>

      <div className="mt-10 px-140">
        <MultiSelect />
      </div>

      <div className="mt-10 px-100">
        <hr style={{ borderColor: "#006092" }} />
      </div>

      <div className="mt-5">
        <p className="text-center font-bold">FILTROS DE SEÇãO (opcional)</p>
      </div>

      <div className="mt-5">
        <p
          style={{ color: "#006092", fontSize: 13 }}
          className="mt-5 text-center"
        >
          (você pode aprimorar a pesquisa utilizando filtros específicos para a
          seção escolhida)
        </p>
      </div>
    </div>
  );
}
