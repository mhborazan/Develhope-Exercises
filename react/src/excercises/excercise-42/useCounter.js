import { useState, useCallback } from "react";

const useCounter = (initalValue = 0) => {
  const [count, setCount] = useState(initalValue);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, [count]);

  const reset = useCallback(() => {
    setCount(initalValue);
  }, [count]);

  return [count, increment, decrement, reset];
};

export default useCounter;
