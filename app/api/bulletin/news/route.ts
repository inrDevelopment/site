import { handleGetNews } from "./handlers";

export async function GET(request: Request) {
  return handleGetNews(request);
}
