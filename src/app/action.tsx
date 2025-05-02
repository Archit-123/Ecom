"use client";

type Product = {
  _id: string;
  productName: string;
  image: string;
  category: string;
};
export type Action =
  | { type: "user_input"; payload: string }
  | { type: "products"; payload: Product[] };

export const setUserinput = (pdtName: string): Action => {
  return {
    type: "user_input",
    payload: pdtName,
  };
};

export const productsRedux = (pdts: Product[]): Action => {
  return {
    type: "products",
    payload: pdts,
  };
};
