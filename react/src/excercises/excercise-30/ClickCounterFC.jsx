import React, { useState } from "react";

export default function ClickCounterFC() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
