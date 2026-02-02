import CustomConsultingForm from "@/components/Consulting/CustomConsultingForm";
import Image from "next/image";

export default function ConsultingForm() {
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
      <div className="mt-5 text-center">
        <p className="inline-flex flex-wrap items-center justify-center gap-1">
          As dúvidas nas áreas tributária, trabalhista e previdenciária poderão
          ser encaminhadas à Consultoria INR, preferencialmente pelo formulário
          abaixo ou pelo telefone
          <span className="inline-flex items-center gap-1 whitespace-nowrap">
            <Image
              width={30}
              height={30}
              src="https://inrpublicacoes.com.br/site/img/inicio/whatsLogo.png"
              alt="Símbolo Whatsapp"
            />
            (11) 2959-0220
          </span>
        </p>
        <p
          style={{
            color: "#800000",
            fontWeight: 500,
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          Prazo médio para respostas por escrito: 6 dias úteis.
        </p>
      </div>

      <CustomConsultingForm />
    </div>
  );
}
