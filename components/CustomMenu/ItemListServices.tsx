import MenuItem from "./MenuItem";

export default function ItemListServices() {
  return (
    <>
      <MenuItem
        href="/consulting"
        itemName="Consultoria INR"
        src="/icons/consultoria.svg"
        alt="Consultoria INR"
      />
      <MenuItem
        href="/consulting"
        itemName="INR Cursos"
        src="/icons/cursos.svg"
        alt="INR Cursos"
      />
      <MenuItem href="/tv" itemName="TV INR" src="/icons/tv.svg" alt="TV INR" />
      <MenuItem
        href="/notarialandregistryconsulting"
        itemName="Consultoria Notarial e Registral"
        src="/icons/consultoria_notarial.svg"
        alt="Consultoria Notarial e Registral"
      />
    </>
  );
}
