import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: string | ReactNode;
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

export function ButtonOutline({ children, onClick, className = "" }: Props) {
  return (
    <Button onClick={onClick} className={className} variant="outline">
      {children}
    </Button>
  );
}
export function ButtonLink({ children, onClick, className = "" }: Props) {
  return (
    <Button onClick={onClick} className={className} variant="link">
      {children}
    </Button>
  );
}
