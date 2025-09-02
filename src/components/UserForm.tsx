import { useReducer } from "react";

type userType = {
  name: string;
  email: string;
};
const initUser: userType = {
  name: "",
  email: "",
};
type ActionType = {
  type: "add";
  payload: {
    name: string;
    value: string;
  };
};
function reducer(state: userType, action: ActionType): userType {
  switch (action.type) {
    case "add":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}
export default function UserForm() {
  const [user, dispatch] = useReducer(reducer, initUser);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: "add",
      payload: { name, value },
    });
  };
  return (
    <>
      <div>
        <h1>User Information Form</h1>
        <form style={{ display: "flex", flexDirection: "column", marginLeft: 220 }}>
          <label style={{ marginRight: 600 }}>Tên: </label>
          <input
            style={{ padding: 10, width: 400 }}
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <label style={{ marginRight: 600 }}>Email: </label>
          <input
            style={{ padding: 10, width: 400 }}
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </form>
        <div style={{ marginRight: 245 }}>
          <h4>Thông tin người dùng</h4>
          <p>
            <strong style={{ color: "#2a80b9" }}>Tên: </strong>
            {user.name ? user.name : "chưa nhập"}
          </p>
          <p>
            <strong style={{ color: "#2a80b9" }}>Email: </strong>
            {user.email ? user.email : "chưa nhập"}
          </p>
        </div>
      </div>
    </>
  );
}
