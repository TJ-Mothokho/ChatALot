import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: string;
  onClick: () => void;
}
export function ButtonPrimary({ children, onClick }: Props) {
  return <Button onClick={onClick}>{children}</Button>;
}

export function ButtonSecondary({ children, onClick }: Props) {
  return (
    <Button onClick={onClick} variant="secondary">
      {children}
    </Button>
  );
}

export function ButtonDanger({ children, onClick }: Props) {
  return (
    <Button onClick={onClick} variant="destructive">
      {children}
    </Button>
  );
}
