import { IAction } from "../../interface/IAction";
import { AUTHENTICATE, LOGOUT } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
