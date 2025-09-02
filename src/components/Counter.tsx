import { useReducer } from "react";
type ActionType = {
  type: "up" | "down";
  payload: number;
};
const initialState = 0;
function reducer(state: number, action: ActionType) {
  switch (action.type) {
    case "up":
      return state + action.payload;
    case "down":
      return state - action.payload;
    default:
      return state;
  }
}
export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h3>Số điếm: {count}</h3>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={() => {
            dispatch({ type: "up", payload: 1 });
          }}
        >
          Tăng
        </button>
        <button
          onClick={() => {
            dispatch({ type: "down", payload: 1 });
          }}
        >
          Giảm
        </button>
      </div>
    </>
  );
}
