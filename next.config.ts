import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/noticias/banner.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/legislacoes/banner.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/jurisprudencias/banner.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/opnioes/banner.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/perguntas_respostas/banner.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/pareceres/banner.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/suplementos/banner.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/historias/banner.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/classificadores/banner_pr.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/classificadores/banner_rs.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/classificadores/banner_sp.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/salas_tematicas/banner_direito_notarial.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/base_dados/banner.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/site/img/consultoria/banner.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/sistema/img_up/_20160928141035foto_1.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname: "/sistema/img_up/_20160928141225foto_2.jpg",
      },
      {
        protocol: "https",
        hostname: "inrpublicacoes.com.br",
        pathname:
          "/sistema/img_up/_20240526140632whatsapp_image_2024_05_26_at_13.56.27.jpeg",
      },
      {
        protocol: "https",
        hostname: "consultoria.publicacoesinr.com.br",
        pathname: "/roberto-guimaraes-logo.svg",
      },
      {
        protocol: "https",
        hostname: "consultoria.publicacoesinr.com.br",
        pathname: "/roberto-guimares.webp",
      },
      {
        protocol: "https",
        hostname: "consultoria.publicacoesinr.com.br",
        pathname: "/elinton-wiermann.jpg",
      },
    ],
    domains: ["inrpublicacoes.com.br", "consultoria.publicacoesinr.com.br"],
  },
  turbopack: {},
};

export default nextConfig;
