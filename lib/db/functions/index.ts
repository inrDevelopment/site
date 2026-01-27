import he from "he";

export function stripHtml(html: string) {
  const decoded = he.decode(html);
  const noTags = decoded.replace(/<\/?[^>]+(>|$)/g, "");
  return he.decode(noTags);
}
