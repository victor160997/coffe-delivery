import { createContext } from "react";
import { GlobalContextValue } from "./index.types";

export const GlobalContext = createContext<GlobalContextValue>({
  order: [],
  setOrder: () => null,
});
