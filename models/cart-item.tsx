import { ICartItem } from "../interface/ICartItem";

class CartItem implements ICartItem {
  constructor(
    id: string,
    quantity: number,
    productPrice: number,
    productTitle: string
  ) {
    this.productId = id;
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.sum = quantity * productPrice;
  }
  productId: string;
  quantity: number;
  productPrice: number;
  productTitle: string;
  sum: number;
}

export default CartItem;
