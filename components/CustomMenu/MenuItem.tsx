type MenuItemProps = {
  href: string;
  src: string;
  alt?: string;
  itemName: string;
};

export default function MenuItem({ href, src, alt, itemName }: MenuItemProps) {
  return (
    <li className="h-full w-full">
      <a
        href={href}
        className="flex h-full w-full items-center justify-start gap-2 bg-blue-500 px-4 py-4 font-semibold text-white hover:bg-blue-900"
      >
        <img src={src} alt={alt} className="h-6 w-6 flex-shrink-0" />
        {itemName}
      </a>
    </li>
  );
}
