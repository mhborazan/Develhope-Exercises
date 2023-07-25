import { useState } from "react";

export const formHook = () => {
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  return {
    inputVal,
    handleInputChange,
  };
};
