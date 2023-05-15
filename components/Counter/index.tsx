"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);

  return (
    <div className="centered-container">
      <button onClick={increment}>+</button>
      <span style={{ margin: "0px 20px" }}>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}
