import React, { useEffect, useState } from "react";

export default function CounterFC({ inital }) {
  const [count, setCount] = useState(inital);
  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(myInterval);
  });
  return <h1>{count}</h1>;
}
