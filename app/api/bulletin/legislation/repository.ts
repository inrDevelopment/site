import { pool } from "@/lib/db";
import { LegislationItem } from "@/lib/types/bulletin";
import { RowDataPacket } from "mysql2";

export async function GETLegislationList({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<LegislationItem[]> {
  const [rows] = await pool.query<RowDataPacket[]>(
    `
    SELECT *, DATE_FORMAT(l.datacad , '%d/%m/%Y') as date
      from
        legislacao l
        WHERE l.exc = 'N'
    ORDER BY
      l.data_registro
      limit ? offset ?;
    `,
    [limit, offset],
  );

  return rows as LegislationItem[];
}

export async function GETLegislationById({
  id,
}: {
  id: number;
}): Promise<LegislationItem | null> {
  console.info(`ID: ${id}`);

  const [rows] = await pool.query<RowDataPacket[]>(
    `
    SELECT *, DATE_FORMAT(l.datacad , '%d/%m/%Y') as date
      from
        legislacao l
      where l.exc = 'N'
	    and l.idlegislacao = ?
  `,
    [id],
  );

  if (rows.length === 0) return null;

  return rows[0] as LegislationItem;
}
