import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const CounterContext = createContext();

// 2. Provider Component
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
}

// 3. Custom Hook for easy use
export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used inside CounterProvider");
  }
  return context;
}
