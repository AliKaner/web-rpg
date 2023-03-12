import { ChangeEvent } from "react";

export interface IInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type:string
}
