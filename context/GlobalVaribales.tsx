import { createContext, useState, ReactNode } from "react";

export interface GlobalVariableContext {
  loading?: boolean;
}

type GlobalVariableProp = {
  children: ReactNode;
};

const GlobalVariableContext = createContext<GlobalVariableContext>({});

export const GlobalVariableProvider = ({ children }: GlobalVariableProp) => {
  const [globalVariable, setGlobalVariable] = useState<GlobalVariableContext>({
    // Add global variables here
    loading: false,
  });

  return (
    <GlobalVariableContext.Provider value={globalVariable}>
      {children}
    </GlobalVariableContext.Provider>
  );
};

export default GlobalVariableContext;
