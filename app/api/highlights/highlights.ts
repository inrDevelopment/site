import { pool } from "@/lib/db";
import { QueryResult } from "pg";

export async function GETHighlights() {
  const result: QueryResult<{ id: number }> =
    await pool.query(`SELECT id FROM`);
}
