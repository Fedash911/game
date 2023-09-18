import { TextFCComponentsProps } from "@/interfaces/Props.interface";
import { FC } from "react";

export const Hello: FC<TextFCComponentsProps> = ({ textTr }) => {
  return <h1>{textTr.helloTitle}</h1>;
};
