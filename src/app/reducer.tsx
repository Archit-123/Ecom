"use client";
const initialState = {
  userInput: "",
  pdts: "",
};
type State = {
  userInput: string;
  pdts: string;
};
type Action =
  | { type: "user_input"; payload: string }
  | { type: "products"; payload: string };

const userReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "user_input":
      return {
        ...state,
        userInput: action.payload,
      };
    case "products":
      return {
        ...state,
        pdts: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
