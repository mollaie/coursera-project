import { ADD_ORDER, SET_ORDERS } from "../actions/orders";
import Order from "../../models/order";
import { IAction } from "../../interface/IAction";
const orders: Order[] = [];
const initialState = {
  orders: orders,
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        orders: action.value.orders,
      };
    case ADD_ORDER:
      const newOrder = new Order(
        action.value.orderData.id,
        action.value.orderData.items,
        action.value.orderData.amount,
        action.value.orderData.date
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }

  return state;
};
