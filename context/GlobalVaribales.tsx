import { createContext, useState, ReactNode } from "react";

// Interface for the global variable context
interface GlobalVariableContext {
  globalVariable: IGlobalVariableState;
  updateGlobalVariableState: (value: any) => void;
  resetGlobalVariableState: () => void;
}
// Interface for the global variable state
interface IGlobalVariableState {
  loading: boolean;
}
// Type for the global variable provider
type GlobalVariableProp = {
  children: ReactNode;
};

const GlobalVariableContext = createContext<GlobalVariableContext>(
  {} as GlobalVariableContext
);

export const GlobalVariableProvider = ({ children }: GlobalVariableProp) => {
  // Global variable state
  const defaultGlobalVariableState = {
    loading: false,
  };

  const [globalVariable, setGlobalVariable] = useState<IGlobalVariableState>({
    // Add global variables here
    loading: false,
  });

  // Function to update the global variable state
  const updateGlobalVariableState = (value: IGlobalVariableState) => {
    setGlobalVariable({
      ...globalVariable,
      ...value,
    });
  };

  const resetGlobalVariableState = () => {
    setGlobalVariable(defaultGlobalVariableState);
  };

  return (
    <GlobalVariableContext.Provider
      value={{
        globalVariable,
        updateGlobalVariableState,
        resetGlobalVariableState,
      }}
    >
      {children}
    </GlobalVariableContext.Provider>
  );
};

export default GlobalVariableContext;
