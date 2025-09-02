import { useEffect, useState } from "react";

export default function PageTitle() {
  const [title, setTitle] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    document.title = title || "Vite + React + Js";
  }, [title]);
  return (
    <>
      <h1>Chào mừng bạn đến với trang của chúng tôi</h1>
      <input
        style={{ width: 300, padding: 10 }}
        type="text"
        placeholder="Tiêu đề của trang"
        value={title}
        onChange={handleChange}
      />
      <p>Tiêu đề trang sẽ thay đổi khi bạn nhập vào trường trên</p>
    </>
  );
}
