import { useState } from "react";

export default function UserPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 onClick={() => setCount((x) => x + 1)}>Count: {count}</h1>
      <span>deployment by: {import.meta.env.VITE_DEPLOYMENT_BY}</span>
      <span>test text</span>
    </div>
  );
}
