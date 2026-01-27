export const BULLETIN_TABLES = {
  news: {
    table: "noticia",
    idColumn: "idnoticia",
  } as const,
  legislation: {
    table: "legislacao",
    idColumn: "idlegislacao",
  } as const,
  jurisprudence: {
    table: "jurisprudencia",
    idColumn: "idjurisprudencia",
  } as const,
  banners: {
    table: "banner",
    idColumn: "idbanner",
  },
};

export type BulletinTableKey = keyof typeof BULLETIN_TABLES;
