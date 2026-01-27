"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ItemCardProps {
  id: string;
  href: string;
  imageUrl: string;
  title: string;
  isFavorite?: boolean;
}

export default function ItemCard({
  href,
  imageUrl,
  title,
  isFavorite = false,
}: ItemCardProps) {
  const [favorited, setFavorited] = useState(isFavorite);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorited(!favorited);
  };

  return (
    <Card className="transition hover:shadow-lg">
      <CardHeader className="flex justify-end pb-2">
        <Button
          variant="ghost"
          onClick={toggleFavorite}
          className="p-3 hover:bg-transparent focus:bg-transparent"
        >
          <Heart
            className={`!h-8 !w-8 transition-colors ${
              favorited ? "fill-red-500 text-red-500" : "text-muted-foreground"
            }`}
          />
        </Button>
      </CardHeader>

      <Link href={href} className="block">
        <CardContent className="px-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>

          <div className="px-2 pt-3">
            <h3 className="line-clamp-2 text-sm font-medium text-blue-900">
              {title}
            </h3>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
