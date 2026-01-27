import { BULLETIN_TABLES } from "../bulletinTables";
import { GETBulletinById } from "../repository";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  const idNumber = Number(id);
  if (!Number.isInteger(idNumber)) {
    return new Response("ID inválido", { status: 400 });
  }

  const url = new URL(request.url);
  const tableKey = url.searchParams.get("table");

  if (!tableKey || !(tableKey in BULLETIN_TABLES)) {
    return new Response("Tabela inválida", { status: 400 });
  }

  const item = await GETBulletinById({
    tableKey: tableKey as keyof typeof BULLETIN_TABLES,
    id: idNumber,
  });

  if (!item) {
    return new Response("Notícia não encontrada", { status: 404 });
  }

  return Response.json(item);
}
