export type ItemProps = {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  link: string;
  source?: string;
  text: string;
};

export type PageListProps = {
  pageComment: string | React.ReactNode;
  title: string;
  content: ItemProps[];
};

export type LegislationItem = {
  idlegislacao: number;
  titulo: string;
  datacad: string;
  date: string;
  responsaveis: string;
  texto: string;
  dispensa_disparo: "S" | "N";
  dt_aprovacao: string;
  exc: "S" | "N";
  idorgao: number;
  resumo: string;
  comentario: string;
  introducao: string;
  img: string;
  numero_ato: number;
  data_registro: string;
  anexo: string;
  img_legenda: string;
  dt_atualizacao: string;
  destaque: string;
};
