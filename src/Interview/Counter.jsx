import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Increment counter
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // Decrement counter
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  // Reset counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
