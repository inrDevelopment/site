import { pool } from "@/lib/db";
import { ItemProps } from "@/lib/types/bulletin";
import { RowDataPacket } from "mysql2";

export async function GETNewsList({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<ItemProps[]> {
  const [rows] = await pool.query<RowDataPacket[]>(
    `
    SELECT
      idnoticia AS id,
      n.titulo AS title,
      n.chamada AS subtitle,
      DATE_FORMAT(n.data_registro, '%d/%m/%Y') AS date, 
      n.fonte AS source
    FROM noticia n
    ORDER BY n.data_registro DESC 
    LIMIT ? OFFSET ?
    `,
    [limit, offset],
  );

  return rows as ItemProps[];
}

export async function GETNewsById({
  id,
}: {
  id: number;
}): Promise<ItemProps | null> {
  console.info(`ID: ${id}`);

  const [rows] = await pool.query<RowDataPacket[]>(
    `
    SELECT
      idnoticia as id,
      n.titulo as title,
      n.chamada as subtitle,
      DATE_FORMAT(n.data_registro, '%d/%m/%Y') AS date, 
      n.fonte as source,
      n.texto as text
    FROM noticia n
    WHERE n.idnoticia = ?
    order by
    n.data_registro DESC
    LIMIT 1
  `,
    [id],
  );

  if (rows.length === 0) return null;

  return rows[0] as ItemProps;
}
