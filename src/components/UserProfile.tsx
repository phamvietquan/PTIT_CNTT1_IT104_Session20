import React, { useState } from "react";
type userType = {
  name: string;
  email: string;
};
export default function UserProfile() {
  const [inputValue, setInputValue] = useState<userType>({ name: "", email: "" });
  const [submitData, setSubmitData] = useState<userType | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitData(inputValue);
  };
  return (
    <>
      <h3>Thông tin người dùng</h3>
      <form style={{ display: "flex", flexDirection: "column", gap: 10 }} onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: 15, width: 300 }}>
          <input type="text" name="name" placeholder="Nhập tên" value={inputValue.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Nhập email" value={inputValue.email} onChange={handleChange} />
        </div>
        <button
          type="submit"
          style={{
            width: "60px",
            padding: "6px 3px",
            fontSize: "14px",
            alignSelf: "flex-start",
          }}
        >
          Gửi
        </button>
      </form>
      {submitData && (
        <div>
          <p>Tên: {submitData.name}</p>
          <p>Email: {submitData.email}</p>
        </div>
      )}
    </>
  );
}
