import { IAction } from "../../interface/IAction";
import { Product } from "../../models/product";
import products from "../reducers/products";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product: Product) => {
  let action: IAction = {
    type: "ADD_TO_CART",
    value: product,
  };
  return action;
};

export const removeFromCart = (productId: string) => {
  let action: IAction = {
    type: "REMOVE_FROM_CART",
    value: productId,
  };

  return action;
};
