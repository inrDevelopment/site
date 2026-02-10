import { handleGetLegislation } from "./handlers";

export async function GET(request: Request) {
  return handleGetLegislation(request);
}
