import { useEffect, useRef } from "react";

type ModalProps = {
  onClose: () => void;
};

export default function Modal({ onClose }: ModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <h3 style={{ color: "black" }}>Đăng nhập</h3>
          <input ref={inputRef} type="text" name="" placeholder="Nhập tên người dùng" />
          <button
            onClick={onClose}
            style={{
              marginTop: 15,
              padding: "8px 16px",
              background: "#f44336",
              color: "white",
            }}
          >
            Đóng
          </button>
        </div>
      </div>
    </>
  );
}
const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "collum",
  },
  modal: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 8,
    width: "300px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "center" as const,
  },
};
