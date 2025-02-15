import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  options: ReactNode[];
  description: string;
}

export function PopOver({ children, options, description }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{children}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              {options[0]}
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              {options[1]}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
