import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div style={{ marginBottom: "16px" }}>
      <button onClick={increment}>Count: {count}</button>
      <button onClick={reset} style={{ marginLeft: "8px" }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
