import { BULLETIN_TABLES } from "./bulletinTables";
import { GETBulletinList } from "./repository";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const tableKey = searchParams.get("table");
  const limit = Number(searchParams.get("limit") ?? 10);
  const offset = Number(searchParams.get("offset") ?? 0);

  if (!tableKey || !(tableKey in BULLETIN_TABLES)) {
    return new Response("Tabela inválida", { status: 400 });
  }

  const data = await GETBulletinList({
    tableKey: tableKey as keyof typeof BULLETIN_TABLES,
    limit,
    offset,
  });

  return Response.json(data);
}
