"use client";
const initialState = {
  userInput: "",
  pdts: "",
};

const userReducer = (state = initialState, action: any) => {
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
