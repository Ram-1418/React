import React from "react";
import { CounterProvider } from "./context/CounterContext";
import Parent from "./Parent";

function App() {
  return (
    <CounterProvider>
      <div>
        <h1>Production Level Counter with useContext</h1>
        <Parent />
      </div>
    </CounterProvider>
  );
}

export default App;
