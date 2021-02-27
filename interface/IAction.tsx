import { ActionType } from "../Type/ActionType";

export interface IAction {
  type: ActionType;
  value: any;
}
