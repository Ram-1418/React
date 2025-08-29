import React from "react";
import { useCounter } from "./context/CounterContext";

function Child() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h3>Child Component</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  );
}

export default Child;
