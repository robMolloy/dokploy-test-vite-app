import { useState } from "react";

export default function UserPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 onClick={() => setCount((x) => x + 1)}>Count: {count}</h1>
      <span>railpack</span>
    </div>
  );
}
