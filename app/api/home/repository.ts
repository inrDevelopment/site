import { pool } from "@/lib/db";
import { BannerItemType } from "@/lib/types/home";
import { RowDataPacket } from "mysql2";
import { BULLETIN_TABLES } from "../bulletin/bulletinTables";

export async function GETBanners({
  tableKey,
  limit,
  offset,
}: {
  tableKey: keyof typeof BULLETIN_TABLES;
  limit: number;
  offset: number;
}): Promise<BannerItemType[]> {
  const { table, idColumn } = BULLETIN_TABLES[tableKey];

  const [rows] = await pool.query<RowDataPacket[]>(
    `
      SELECT ${idColumn} as id, b.nome, b.link, b.img, b.ordem	
      FROM ${table} b
      WHERE b.ativo = 'S' and b.exc = 'N'
      ORDER BY b.ordem  ASC
      LIMIT 6
    `,
    [limit, offset],
  );

  return rows as BannerItemType[];
}
