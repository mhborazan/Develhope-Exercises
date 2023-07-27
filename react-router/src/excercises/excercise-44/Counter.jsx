import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount((p) => p + 1);
    }, 1000);

    return () => clearInterval(myInterval);
  }, []);

  return <h1>Count: {count}</h1>;
}
