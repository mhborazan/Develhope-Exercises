import { useState } from "react";

const useCounter = (initalValue = 0) => {
  const [count, setCount] = useState(initalValue);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(initalValue);
  };
  return [count, increment, decrement, reset];
};

export default useCounter;
