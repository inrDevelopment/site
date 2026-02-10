import { handleGetClassifiers } from "./handlers";

export async function GET(request: Request) {
  return handleGetClassifiers(request);
}
