export default function formatDateBR(dateIso: string) {
  const [year, month, day] = dateIso.split("T")[0].split("-");
  return `${day}/${month}/${year}`;
}
