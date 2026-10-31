import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decreement = () => {
    if (count === 0) {
      return
    }
    setCount(count - 1);
  };
  return (
    <div>
      <button  onClick={increment}>+</button>
      <p className="text-4xl">{count}</p>
      <button onClick={decreement}>-</button>
    </div>
  );
};

export default Counter;
