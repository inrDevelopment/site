import { ReactNode } from "react";

export type SectionButtonType = {
  id: number;
  name: string;
  nameColor?: string;
  src: string;
  href: string;
  alt: string;
  width?: number;
  height?: number;
  imageClassName?: string;
  linkClassName?: string;
  spanClassName?: string;
};

export type LeaderType = {
  id: number;
  name: string;
  src: string;
  alt: string;
  text: ReactNode;
  className?: string;
};
