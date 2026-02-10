import {
  GetClassifiersByStateId,
  GetClassifiersByStateIdAndDate,
} from "./repository";

export async function handleGetClassifiers(request: Request) {
  const { searchParams } = new URL(request.url);

  const stateID = Number(searchParams.get("state"));
  const date = searchParams.get("date");
  const limit = Number(searchParams.get("limit") ?? 10);
  const offset = Number(searchParams.get("offset") ?? 0);

  if (!stateID) {
    return new Response("Estado inválido", { status: 400 });
  }

  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return new Response("Data inválida", { status: 400 });
  }

  const data = date
    ? await GetClassifiersByStateIdAndDate({ stateID, date, limit, offset })
    : await GetClassifiersByStateId({ stateID, limit, offset });

  return Response.json(data);
}
