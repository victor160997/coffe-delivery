import { Dispatch, SetStateAction } from "react";

export interface GlobalContextValue {
  order: any[];
  setOrder: Dispatch<SetStateAction<any[]>>; // TODO: colocar tipagem
}
