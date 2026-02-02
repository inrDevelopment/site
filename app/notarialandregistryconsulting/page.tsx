"use client";

import NotarialAndRegistryConsultingForm from "@/components/app/NotarialAndRegistryConsulting/NotarialAndRegistryConsultingForm";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Notarialandregistryconsulting() {
  const [robertoState, setRobertoState] = useState<boolean>(false);
  const [elintonState, setElintonState] = useState<boolean>(false);

  const robertoRef = useRef<HTMLDivElement>(null);
  const elintonRef = useRef<HTMLDivElement>(null);

  const toggleRoberto = () => {
    setRobertoState(!robertoState);
    setTimeout(() => {
      robertoRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const toggleElinton = () => {
    setElintonState(!elintonState);
    setTimeout(() => {
      elintonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <div className="mt-5">
      <div className="flex w-full items-center justify-between py-4">
        <div className="flex items-center">
          <a href="/">
            <img src="/logos/logo_inr.svg" alt="Logo INR" />
          </a>
        </div>
        <Image
          src="https://consultoria.publicacoesinr.com.br/roberto-guimaraes-logo.svg"
          alt="Logo Roberto Guimarães"
          width={350}
          height={350}
        />
      </div>
      <p className="mt-15 text-center text-4xl font-bold">
        Consultoria em Direito Notarial e Registral
      </p>
      <div className="mt-10 px-10">
        <p>
          Nossa consultoria em Direito Registral e Notarial visa auxiliar os
          titulares de delegação, substitutos, prepostos designados, escreventes
          e demais profissionais da área na solução rápida e eficiente das
          questões cotidianas da atividade, além das extra ofício, tais como
          comunicações em geral com órgãos judiciais e administrativos,
          notificações, adequação dos cartórios à LGPD, análise da
          responsabilidade dos titulares, suscitação de dúvida e demais
          esclarecimentos envolvendo os usuários etc.
        </p>
        <p className="mt-5">
          A consulta será atendida por meio de análise objetiva e simplificada
          das questões apresentadas, sendo possível o exame pontual de
          documentos.
        </p>
        <p className="mt-5">
          As respostas não consistirão em pareceres jurídicos ou em opinião
          detalhada sobre a questão apresentada com análise aprofundada de
          documentação, contudo, se, porventura, for do interesse do cliente, é
          possível a contratação específica para a prestação de tal serviço com
          honorários e prazo a serem fixados de acordo com o caso concreto.
        </p>
        <p className="mt-5">
          <strong>Investimento</strong>
        </p>
        <p className="mt-5">
          <strong>Consulta avulsa: </strong>o valor unitário da consulta avulsa
          é de <strong>R$ 200,00</strong>
        </p>
        <p>
          <strong>Contrato mensal: R$ 600,00</strong> mensais para até{" "}
          <strong>5 </strong>
          consultas (economia de 40%).
        </p>
        <p className="mt-5">
          <strong>Forma de cobrança</strong>
        </p>
        <p className="mt-5">
          Para as consultas avulsas, a cobrança será realizada mediante envio de
          boleto bancário, acompanhado da respectiva nota fiscal, com vencimento
          em 7 (sete) dias da data do envio da consulta.
        </p>
        <p className="mt-5">
          Para os contratos mensais, procure-nos no fale conosco.
        </p>
        <p className="mt-5">
          <strong>Prazo de resposta</strong>
        </p>
        <p className="mt-5">
          O prazo aproximado de resposta é de até 72h do envio da consulta por
          meio do formulário abaixo. É possível a extensão do prazo de resposta
          a depender da complexidade da demanda, com a devida informação ao
          consulente.
        </p>
        <p className="mt-5">
          <strong>Avisos legais</strong>
        </p>
        <p className="mt-5">
          Esclarecemos que todas as informações prestadas em nosso site são
          sigilosas e não há qualquer compartilhamento com terceiros. É possível
          a utilização do conteúdo das consultas em todo site do INR com fins
          didático e acadêmico, mantendo-se a anonimização do consulente.
        </p>
        <p className="mt-5">
          Os valores indicados no site podem ser periodicamente reajustados, sem
          a necessidade de concordância prévia do consulente e mediante mera
          informação no site, respeitados os contratos mensais vigentes.
        </p>
        <p className="mt-5">
          O limite mensal contratado deve ser utilizado dentro do mês corrente,
          isto é, sem carregamento para o mês subsequente em caso de não
          utilização (não cumulativo).
        </p>
        <p className="mt-5">
          A consulta prestada reflete a opinião da banca Roberto Guimarães
          Advogados Associados tendo em vista as informações fornecidas e o
          entendimento jurisprudencial e doutrinário vigente no momento da
          resposta. A decisão com relação às providências a serem tomadas pelo
          consulente na respectiva atividade é de sua integral e irrestrita
          responsabilidade.
        </p>
      </div>

      <div className="mt-10 flex w-full flex-col gap-6 px-4 md:flex-row">
        {/* Bloco Roberto */}
        <div className="flex w-full flex-col items-center md:w-1/2">
          <button onClick={toggleRoberto} className="h-[360px] w-[300px]">
            <div className="relative h-[360px] w-[300px]">
              <Image
                src="https://consultoria.publicacoesinr.com.br/roberto-guimares.webp"
                alt="Roberto Guimarães"
                fill
                className="rounded-md object-cover"
              />
            </div>
          </button>
          <p className="mt-4 text-center font-bold">
            ROBERTO DE ALMEIDA GUIMARÃES
          </p>
          <p className="mt-1 text-center text-sm">Clique na imagem</p>

          {/* Texto toggle com animação tipo accordion */}
          <div
            ref={robertoRef}
            className={`w-full overflow-hidden transition-all duration-700 ease-in-out`}
            style={{
              maxHeight: robertoState ? "1000px" : "0px",
            }}
          >
            <p
              style={{ fontSize: 10 }}
              className={`mt-5 transform text-justify leading-relaxed transition-transform duration-700 ease-in-out ${
                robertoState
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Atuou por 25 anos em Cartórios Extrajudiciais. Formado em Ciências
              Jurídicas e Sociais pela UNAERP. Em 2003 fundou o escritório
              “Roberto Guimarães Advogados Associados”. Coordenou por 6 anos as
              Comissões de Direito Notarial e Registral e Habitação, Urbanismo e
              Regularização Fundiária da 12ª Subsecção da OAB/SP. Especialista
              em Direito Notarial, Registral, Regularização Fundiária e
              Parcelamento do Solo pelo CERNE e pela Uniregistral. Foi ouvidor
              por 4 anos do COMUR/RP. Foi membro do CONPACC/RP por 2 anos.
              Parceiro e colaborador do INR.
            </p>
          </div>
        </div>

        {/* Bloco Elinton */}
        <div className="flex w-full flex-col items-center md:w-1/2">
          <button onClick={toggleElinton} className="h-[360px] w-[300px]">
            <div className="relative h-[360px] w-[300px]">
              <Image
                src="https://consultoria.publicacoesinr.com.br/elinton-wiermann.jpg"
                alt="Elinton Wiermann"
                fill
                className="rounded-md object-cover"
              />
            </div>
          </button>
          <p className="mt-4 text-center font-bold">ELINTON WIERMANN</p>
          <p className="mt-1 text-center text-sm">Clique na imagem</p>

          {/* Texto toggle com animação tipo accordion */}
          <div
            ref={elintonRef}
            className={`w-full overflow-hidden transition-all duration-700 ease-in-out`}
            style={{
              maxHeight: elintonState ? "1000px" : "0px",
            }}
          >
            <p
              style={{ fontSize: 10 }}
              className={`mt-5 transform text-justify leading-relaxed transition-transform duration-700 ease-in-out ${
                elintonState
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Graduado em Direito em 2013. Doutorando em Engenharia Urbana pela
              UFSCar. Mestre em Direito pela FDRP/USP (área de concentração:
              Desenvolvimento do Estado Democrático de Direito; linha de
              pesquisa: Infraestruturas Urbanas/Ambientes e Desenvolvimento:
              avaliação de políticas públicas e atividades impactantes sobre o
              ambiente natural, urbano, cultural e laboral) (2022). Pós-graduado
              em Ética Empresarial (Estruturas Societárias, Contratos
              Administrativos e Compliance) pela FDRP/USP. Pós-graduado em
              Direito Processual Civil pela FDRP/USP. Pós-graduado em Direito
              Tributário pela FDRP/USP. É membro da Comissão de Direito Notarial
              e Registral e da Comissão de Direito Urbanístico e Regularização
              Fundiária da 12ª Subsecção da OAB/SP desde 2016. Advogado no
              escritório “Roberto Guimarães Advogados Associados” desde 2013, e
              estagiário do mesmo escritório desde 2009, na área de Direito
              Administrativo, Urbanístico e Tributário.
            </p>
          </div>
        </div>
      </div>
      <p className="font-sm mt-20 text-center">
        Preencha os campos abaixo e clique em 'Enviar'.
      </p>
      <div className="mx-5">
        <NotarialAndRegistryConsultingForm />
      </div>
    </div>
  );
}
