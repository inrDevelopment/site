"use client";

import CustomPagination from "@/components/Classificators/Pagination";
import { ItemProps } from "@/lib/types/bulletin";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ClassSPPage() {
  const [classSP, setClassSP] = useState<ItemProps[]>([]);
  const [offset, setOffset] = useState(10);
  const limit = 10;

  const pageComment = (
    <div className="text-start">
      <p>
        A manutenção dos Classificadores, segundo as Normas de Serviço da
        Corregedoria Geral da Justiça, é obrigatória (Capítulo XIII, Seção III,
        Subseção II – Dos Classificadores Obrigatórios, item 57, letras “a”, “b”
        e “c”) e seu arquivamento eletrônico passou a ser reconhecido após as
        inovações aprovadas pelo Provimento CG nº 39, de 14 de dezembro de 2012
        (regra atualmente prevista no Capítulo XIII, Seção III, Subseção II –
        Dos Classificadores Obrigatórios, item 57.1).
      </p>
      <p>
        Desde a publicação do mencionado Provimento CG nº 39, de 14 de dezembro
        de 2012, os <strong>Classificadores INR SP</strong> têm passado por uma
        série de mudanças, a fim de proporcionar aos{" "}
        <strong>Assinantes das Publicações INR</strong> uma experiência dinâmica
        e compatível com as exigências da Corregedoria Geral da Justiça. Com
        novos recursos e ferramentas, os <strong>Classificadores INR SP</strong>
        , cem por cento eletrônicos, levaram ao cotidiano de Notários e
        Registradores agilidade, facilidade e segurança.
      </p>
      <p>
        Assim, a começar de janeiro de 2013, além da divulgação por meio das
        edições diárias do <strong>Classificadores INR SP</strong>, estas
        passaram a ser substituídas, semanalmente, por versões atualizadas e com
        conteúdo acumulado desde o primeiro dia de publicações do ano vigente,
        até o final de cada exercício. São os chamados{" "}
        <strong>Classificadores Eletrônicos Acumulados</strong>, que possuem
        índice próprio, por assunto e com menção ao número do ato e à comarca de
        origem.
      </p>
      <p>
        Essa nova sistemática de disponibilização dos Classificadores INR SP
        trouxe inúmeras vantagens aos{" "}
        <strong>Assinantes das Publicações INR</strong>. Entre elas estão:
      </p>
      <ul className="ml-5 list-disc space-y-2 pl-5 marker:text-lg">
        <li>
          economia de espaço: todo o conteúdo pode ser armazenado no computador
          pessoal do Assinante e ou, ainda, em um servidor. Após o armazenamento
          inexiste a necessidade de conexão com a internet para a leitura dos
          arquivos;
        </li>
        <li>
          acesso simultâneo ao Assinante e seus prepostos: o novo sistema traz
          rapidez e segurança no compartilhamento das informações, na medida em
          que mais de um usuário pode acessar o mesmo conteúdo ao mesmo tempo,
          por meio de diferentes dispositivos;
        </li>
        <li>
          durabilidade: arquivos digitais, devidamente armazenados e
          resguardados por meio de cópia de segurança, podem durar a vida toda;
          e
        </li>
        <li>
          facilidade de busca: documentos digitalizados podem ser encontrados
          por meio de busca por palavras-chave, categorias e pastas. Além disso,
          dentro do próprio arquivo eletrônico há a possibilidade de se buscar
          informações por expressões (numéricas e ou textuais).
        </li>
      </ul>
      <p>
        Após minuciosa garimpagem no DJe - Diário da Justiça eletrônico do
        Estado de São Paulo, os atos de interesse das atividades notariais e de
        registro são levados ao Classificador correspondente e enviados aos
        Notários e Registradores paulistas diariamente.
      </p>
      <p>
        São 5 (cinco) os Classificadores encaminhados cotidianamente ao
        <strong>Assinante das Publicações INR</strong>, a saber:
      </p>
      <ul className="ml-5 list-disc space-y-2 pl-5 marker:text-lg">
        <li>
          Classificador I: Atos Administrativos e Decisões do Colendo Conselho
          Superior da Magistratura do Estado de São Paulo{" "}
          <div style={{ color: "#b22222" }} className="font-semibold">
            (inclusive com a íntegra dos acórdãos do CSM/SP);
          </div>
        </li>
        <li>
          Classificador II: Atos Administrativos e Decisões da Egrégia
          Corregedoria Geral da Justiça do Estado de São Paulo;
        </li>
        <li>
          Classificador III: Comunicados da Egrégia Corregedoria Geral da
          Justiça do Estado de São Paulo;
        </li>
        <li>
          Classificador III – Especial – Escrituras e Procurações: Comunicados
          da Egrégia Corregedoria Geral da Justiça do Estado de São Paulo
          <div style={{ color: "#b22222" }} className="font-semibold">
            (classificador a que se refere o subitem "o", do item 139, do
            Capítulo XX das NSCGJ);
          </div>
        </li>
        <li>
          Classificador IV: Atos Administrativos e Decisões das 1ª e 2ª Varas de
          Registros Públicos da Capital.
        </li>
      </ul>
      <p>
        Ressalta-se que os atos contidos nas edições diárias dos{" "}
        <strong>Classificadores INR SP</strong> também abastecem os Arquivos
        Eletrônicos - com conteúdo acumulado a partir do primeiro dia útil
        forense do ano -, atualizados semanalmente. Além disso, os atos
        selecionados são inseridos na <strong>Base de Dados INR</strong> no
        mesmo dia de sua divulgação oficial.
      </p>
      <p>
        A <strong>Base de Dados INR</strong> dispõe de moderna ferramenta de
        busca, permitindo ao usuário pesquisas sempre muito rápidas e certeiras.
      </p>
      <p>
        Encontra-se também disponível no portal das{" "}
        <strong>Publicações INR </strong>
        <a
          href="www.inrpublicacoes.com.br"
          target="_blank"
          className="cursor-pointer py-1 text-blue-600 hover:text-blue-500 hover:underline"
        >
          (www.inrpublicacoes.com.br)
        </a>
        , no endereço{" "}
        <a
          className="cursor-pointer py-1 text-blue-600 hover:text-blue-500 hover:underline"
          href="https://inrpublicacoes.com.br/site/boletim/atos-anteriores"
          target="_blank"
        >
          https://inrpublicacoes.com.br/site/boletim/atos-anteriores
        </a>
        , os <strong>Classificadores INR SP</strong> acumulados desde 1999.
      </p>
    </div>
  );

  useEffect(() => {
    async function initialFetch() {
      const res = await fetch(`/api/bulletin?table=classSP&limit=10&offset=0`);

      const data = await res.json();

      setClassSP(data);
    }

    initialFetch();
  }, []);

  async function loadMoreClassSP() {
    const res = await fetch(
      `/api/bulletin?table=classSP&limit=${limit}&offset=${offset}`,
    );
    if (!res.ok) {
      return;
    }

    const data: ItemProps[] = await res.json();

    setClassSP((prev) => {
      const seen = new Set(prev.map((item) => item.id));
      const merged = [...prev, ...data.filter((item) => !seen.has(item.id))];
      return merged;
    });

    setOffset((prev) => prev + data.length);
  }

  return (
    <div className="w-full">
      <div className="relative h-64 w-full md:h-86">
        <Image
          src="https://inrpublicacoes.com.br/site/img/classificadores/banner_sp.jpg"
          alt="Banner de Classificadores SP"
          className="object-cover"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Classificadores INR SP
          </h1>
        </div>
      </div>

      <p className="mt-5 text-4xl" style={{ color: "#006092" }}>
        Índice
      </p>
      <CustomPagination />
    </div>
  );
}
