"use client";

type State = {
  userInput: string;
  pdts: string;
};

type Action =
  | { type: "user_input"; payload: string }
  | { type: "products"; payload: string };

const initialState: State = {
  userInput: "",
  pdts: "",
};

const userReducer = (state: State = initialState, action: Action): State => {
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
