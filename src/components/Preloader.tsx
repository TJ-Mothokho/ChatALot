import React from "react";
import { Skeleton } from "./ui/skeleton";

export function PreloadContactList() {
  return (
    <div className="flex h-10 w-45">
      <Skeleton className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ml-2" />
      <Skeleton className="aspect-square h-full w-full ml-3" />
    </div>
  );
}
