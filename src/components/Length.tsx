import React, { useState } from "react";

export default function Length() {
  const [inputLength, setInputLength] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLength(e.target.value);
  };
  return (
    <>
      <h1>Kiểm tra độ dài chuỗi nhập vào</h1>
      <input
        style={{ width: 300 }}
        type="text"
        placeholder="Nhập vào đây"
        onChange={handleChange}
        value={inputLength}
      />
      <br />
      {inputLength && inputLength.length > 5 ? (
        <p style={{ color: "red"}}>
          Chuỗi nhập vào dài hơn 5 ký tự!
        </p>
      ) : (
        ""
      )}
    </>
  );
}
