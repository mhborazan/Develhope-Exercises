import React, { useEffect, useState } from "react";

export default function ClickCounterFC2({ onCounterChange }) {
  const [count, setCount] = useState(0);
  useEffect(() => onCounterChange, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
