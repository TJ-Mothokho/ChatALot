import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: string;
  onClick: () => void;
  className?: string;
}
export function ButtonPrimary({ children, onClick, className = "" }: Props) {
  return (
    <Button onClick={onClick} className={className}>
      {children}
    </Button>
  );
}

export function ButtonSecondary({ children, onClick, className = "" }: Props) {
  return (
    <Button onClick={onClick} className={className} variant="secondary">
      {children}
    </Button>
  );
}

export function ButtonDanger({ children, onClick, className = "" }: Props) {
  return (
    <Button onClick={onClick} className={className} variant="destructive">
      {children}
    </Button>
  );
}
