import { IAction } from "../../interface/IAction";
import { Product } from "../../models/product";
import CartItem from "../../models/cart-item";

const items: CartItem[] = [];
const initialState = {
  items: items,
  totalAmount: 0,
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const addedProduct = action.value as Product;

      const itemIndex = state.items.findIndex(
        (prod: CartItem) => prod.productId === addedProduct.id
      );
      if (itemIndex > -1) {
        let currentItem = state.items[itemIndex] as CartItem;
        let updateItem = new CartItem(
          currentItem.productId,
          currentItem.quantity + 1,
          currentItem.productPrice,
          currentItem.productTitle
        );
        state.items[itemIndex] = updateItem;
        state.totalAmount = state.items.reduce((a, b) => a + b.sum, 0);
        return state;
      } else {
        const newCartItem = new CartItem(
          addedProduct.id,
          1,
          addedProduct.price,
          addedProduct.title
        );
        state.items.push(newCartItem);
        state.totalAmount = state.totalAmount + newCartItem.sum;
        return state;
      }

    case "REMOVE_FROM_CART":
      const currentQuantity =
        state.items.find((item) => item.productId === action.value)?.quantity ??
        0;
      if (currentQuantity > 1) {
        let updatedCartItems = state.items;

        const itemIndex = updatedCartItems.findIndex(
          (item) => item.productId === action.value
        );
        updatedCartItems[itemIndex].quantity -= 1;

        return {
          ...state,
          items: updatedCartItems,
          totalAmount:
            state.totalAmount - updatedCartItems[itemIndex].productPrice,
        };
      } else {
        const updatedCartItems = state.items;
        const itemIndex = updatedCartItems.findIndex(
          (item) => item.productId === action.value
        );
        const itemPrice = updatedCartItems[itemIndex].productPrice;

        updatedCartItems.splice(itemIndex, 1);
        return {
          ...state,
          items: updatedCartItems,
          totalAmount: state.totalAmount - itemPrice,
        };
      }
    default:
      return state;
  }
};
