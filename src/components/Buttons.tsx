import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: string;
}
export function ButtonPrimary({ children }: Props) {
  return <Button>{children}</Button>;
}

export function ButtonSecondary({ children }: Props) {
  return <Button variant="secondary">{children}</Button>;
}

export function ButtonDanger({ children }: Props) {
  return <Button variant="destructive">{children}</Button>;
}
