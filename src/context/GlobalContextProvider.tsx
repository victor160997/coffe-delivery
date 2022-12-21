import { ReactNode, useMemo, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { GlobalContextValue } from "./index.types";

interface OwnProps {
  children: ReactNode;
}

export const GlobalContextProvider = ({ children }: OwnProps) => {
  const [order, setOrder] = useState<any[]>([]);

  const globalContext: GlobalContextValue = useMemo(
    () => ({
      order,
      setOrder,
    }),
    [order]
  );

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  );
};
