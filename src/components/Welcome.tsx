import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("Component đã được render lần đầu");
  }, []);
  return (
    <>
      <p>Chào mừng đến với ứng dụng của chúng tôi</p>
    </>
  );
}
