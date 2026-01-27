import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ItemListBulletin from "./ItemListBulletin";
import ItemListClassificator from "./ItemListClassificator";
import ItemListServices from "./ItemListServices";

export default function CustomMenu() {
  const defaultClass =
    "block rounded-none bg-blue-500 py-6 !text-lg font-semibold text-white transition-colors hover:bg-blue-900 hover:text-white";
  const menuTriggerClass =
    "!hover:text-white h-full w-full rounded-none !bg-blue-500 py-6 !text-lg !text-white text-white hover:!bg-blue-900";

  const menuContentClass = "rounded-none bg-blue-500 !text-white p-0";

  return (
    <NavigationMenu className="relative mx-auto bg-blue-500 text-white">
      <NavigationMenuList className="flex justify-center gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="rounded-none">
            <Link href="/institucional" className={defaultClass}>
              Institucional INR
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={menuTriggerClass}>
            Boletim Eletrônico INR
          </NavigationMenuTrigger>

          <NavigationMenuContent
            className={`${menuContentClass} min-w-[400px]`}
          >
            <ul className="grid grid-cols-2 items-stretch gap-0">
              <ItemListBulletin />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={menuTriggerClass}>
            Classificadores INR
          </NavigationMenuTrigger>

          <NavigationMenuContent
            className={`${menuContentClass} min-w-[400px]`}
          >
            <ul className="grid grid-cols-2 items-stretch gap-0">
              <ItemListClassificator />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="rounded-none">
            <Link href="/thematicrooms" className={defaultClass}>
              Salas Temáticas
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={menuTriggerClass}>
            Serviços INR
          </NavigationMenuTrigger>

          <NavigationMenuContent
            className={`${menuContentClass} min-w-[400px]`}
          >
            <ul className="grid grid-cols-2 items-stretch gap-0">
              <ItemListServices />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="rounded-none">
            <Link href="/legaldatabase" className={defaultClass}>
              Base de Dados
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="rounded-none">
            <Link href="/consulting" className={defaultClass}>
              Consultoria INR
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="rounded-none">
            <Link href="/downloads" className={defaultClass}>
              Downloads INR
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="rounded-none">
            <Link href="/inraccounting" className={defaultClass}>
              INR Contábil
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
