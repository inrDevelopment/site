import CustomMenu from "@/components/CustomMenu";
import { ReactNode } from "react";
import CustomFooter from "../Footer/CustomFooter";
import FooterMenu from "../Footer/FooterMenu";
import { Security } from "../Security";

interface Frame {
  children?: ReactNode;
}

export default function Frame({ children }: Frame) {
  return (
    <div className="flex h-dvh w-full flex-col">
      <div className="flex w-full items-center justify-between px-5 py-4">
        <div className="flex items-center">
          <a href="/">
            <img src="/logos/logo_inr.svg" alt="Logo INR" />
          </a>
        </div>
        <Security />
      </div>

      <div className="w-full bg-blue-500">
        <div className="mx-auto max-w-7xl px-4">
          <CustomMenu />
        </div>
      </div>

      <div className="w-full flex-1">
        <div className="max-w-8xl mx-auto px-1">{children}</div>
      </div>
      <CustomFooter />
      <FooterMenu />
    </div>
  );
}
