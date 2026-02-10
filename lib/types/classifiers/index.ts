export type DBClassifierItem = {
  id: number;
  data_iso: string;
  datacad: string;
  exc: "S" | "N";
};

export type DBClassifierIndex = {
  nome_barra: string;
  nome_orgao: string;
  nome_departamento: string;
  idato: number;
  titulo_ato: string;
  texto_ato: string;
  datacad: Date;
  dt_aprovacao: Date;
  introducao: string;
  secao: string;
  especie: string;
  numero: number;
  vara: string;
  data_registro: Date;
  comarca: string;
  opcoes: string;
  jurisprudencia: string;
  ancora: string;
};
