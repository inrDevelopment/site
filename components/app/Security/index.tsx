"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellRing, Settings } from "lucide-react";

export function Security() {
  return (
    <div className="flex items-center justify-end gap-2">
      <BellRing className="cursor-pointer" />
      <Settings className="cursor-pointer" />
      <Avatar className="ml-5">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
