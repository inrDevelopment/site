import { GETNewsById, GETNewsList } from "./repository";

export async function handleGetNews(request: Request) {
  const { searchParams } = new URL(request.url);

  const limit = Number(searchParams.get("limit") ?? 10);
  const offset = Number(searchParams.get("offset") ?? 10);
  const id = Number(searchParams.get("id"));

  const data = id
    ? await GETNewsById({ id })
    : await GETNewsList({ limit, offset });

  return Response.json(data);
}
