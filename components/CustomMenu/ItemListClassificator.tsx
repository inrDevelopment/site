import MenuItem from "./MenuItem";

export default function ItemListClassificator() {
  return (
    <>
      <MenuItem
        href="/classPR"
        itemName="Classificadores PR"
        src="/icons/classificadores_pr.svg"
        alt="Classificadores PR"
      />
      <MenuItem
        href="/classRS"
        itemName="Classificadores RS"
        src="/icons/classificadores_rs.svg"
        alt="Classificadores RS"
      />
      <MenuItem
        href="/classSP"
        itemName="Classificadores SP"
        src="/icons/classificadores_sp.svg"
        alt="Classificadores SP"
      />
      <MenuItem
        href="/classaccumulated"
        itemName="Arquivos Acumulados dos Classificadores SP"
        src="/icons/boletim.svg"
        alt="Arquivos Acumulados dos Classificadores SP"
      />
    </>
  );
}
