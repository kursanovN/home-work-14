import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return {
    count,
    increment,
    decrement,
  };
};
