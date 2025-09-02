import { useState } from "react";
import Modal from "./Modal";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h2>Ứng dụng React với Modal và Focus input</h2>
      <button onClick={() => setIsOpen(true)}>Mở Modal</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  );
}
