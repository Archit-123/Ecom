"use client";
export const setUserinput = (pdtName: any) => {
  return {
    type: "user_input",
    payload: pdtName,
  };
};

export const productsRedux = (pdts: any) => {
  return {
    type: "products",
    payload: pdts,
  };
};
