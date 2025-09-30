"use client";

import { ContactInfo } from "@/.storyblok/types/339170/storyblok-components";
import React, { createContext, useContext, useMemo, useState } from "react";

// Define the context type
type GlobalState = {
  contactDetails: ContactInfo[];
  setContactDetails: React.Dispatch<React.SetStateAction<ContactInfo[]>>;
};

// Create the context
const GlobalContext = createContext<GlobalState | undefined>(undefined);

// Provider component
export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [contactDetails, setContactDetails] = useState<ContactInfo[]>([]);

  const contextValue = useMemo(
    () => ({ contactDetails, setContactDetails }),
    [contactDetails, setContactDetails]
  );

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

// Hook to use the global state
export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobalState must be used within GlobalStateProvider");
  return context;
};
