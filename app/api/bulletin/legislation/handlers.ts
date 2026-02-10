import { GETLegislationById, GETLegislationList } from "./repository";

export async function handleGetLegislation(request: Request) {
  const { searchParams } = new URL(request.url);

  const limit = Number(searchParams.get("limit") ?? 10);
  const offset = Number(searchParams.get("offset") ?? 10);
  const id = Number(searchParams.get("id"));

  const data = id
    ? await GETLegislationById({ id })
    : await GETLegislationList({ limit, offset });

  return Response.json(data);
}
