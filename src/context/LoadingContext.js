"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const LoadingContext = createContext({
  isComplete: false,
  setComplete: () => {},
});

export const LoadingProvider = ({ children }) => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ isComplete, setComplete: () => setIsComplete(true) }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
