"use client";

import { BannerItemType } from "@/lib/types/home";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function CustomCarousel() {
  const [banners, setBanners] = useState<BannerItemType[]>([]);
  useEffect(() => {
    const initialLoad = async () => {
      const bannersResponse = await fetch("/api/home?table=banners");

      const data = await bannersResponse.json();
      setBanners(data);
    };

    initialLoad();
  }, []);

  return (
    <div suppressHydrationWarning>
      {banners.length ? (
        <div className="h-[500px] w-full">
          <Carousel
            className="h-full w-full"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="h-full w-full">
              {banners.map((item: BannerItemType) => (
                <CarouselItem key={item.id} className="h-full w-full">
                  <div className="relative h-[500px] w-full">
                    {item.link ? (
                      <Link href={item.link} target="_blank">
                        <Image
                          alt={item.nome}
                          src={`https://inrpublicacoes.com.br/site/banners/${item.img}`}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </Link>
                    ) : (
                      <Image
                        alt={item.nome}
                        src={`https://inrpublicacoes.com.br/site/banners/${item.img}`}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        // Placeholder fixo, evita quebra de layout
        <div style={{ width: 200, height: 200 }}></div>
      )}
    </div>
  );
}
