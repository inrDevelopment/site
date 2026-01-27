import { pool } from "@/lib/db";
import { ItemProps } from "@/lib/types/bulletin";
import { RowDataPacket } from "mysql2";
import { BULLETIN_TABLES } from "./bulletinTables";

export async function GETBulletinList({
  tableKey,
  limit,
  offset,
}: {
  tableKey: keyof typeof BULLETIN_TABLES;
  limit: number;
  offset: number;
}): Promise<ItemProps[]> {
  const { table, idColumn } = BULLETIN_TABLES[tableKey];

  const [rows] = await pool.query<RowDataPacket[]>(
    `
    SELECT
      ${idColumn} AS id,
      n.titulo AS title,
      n.chamada AS subtitle,
      DATE_FORMAT(n.data_registro, '%d/%m/%Y') AS date, 
      n.fonte AS source
    FROM ${table} n
    ORDER BY n.data_registro DESC 
    LIMIT ? OFFSET ?
    `,
    [limit, offset],
  );

  return rows as ItemProps[];
}

export async function GETBulletinById({
  tableKey,
  id,
}: {
  tableKey: keyof typeof BULLETIN_TABLES;
  id: number;
}): Promise<ItemProps | null> {
  const { table, idColumn } = BULLETIN_TABLES[tableKey];
  console.info(`ID: ${id}`);

  const [rows] = await pool.query<RowDataPacket[]>(
    `
    SELECT
      ${idColumn} as id,
      n.titulo as title,
      n.chamada as subtitle,
      DATE_FORMAT(n.data_registro, '%d/%m/%Y') AS date, 
      n.fonte as source,
      n.texto as text
    FROM ${table} n
    WHERE ${idColumn} = ?
    order by
    n.data_registro DESC
    LIMIT 1
  `,
    [id],
  );

  if (rows.length === 0) return null;

  return rows[0] as ItemProps;
}
