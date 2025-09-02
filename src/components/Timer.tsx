import { useEffect, useState } from "react";

export default function Timer() {
  console.log("Component Timer đã mount");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Component Timer đã unmount và timer đã được dừng");
    };
  }, []);
  return (
    <>
      <h2>{count}</h2>
    </>
  );
}
