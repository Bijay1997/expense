import { ActionTypes } from "../action-types/ActionTypes";

export const addExpense = (data) => {
  return {
    type: ActionTypes.ADD_EXPENSE,
    data,
  };
};

export const deleteExpense = (data) => {
  return {
    type:ActionTypes.DELETE_EXPENSE,
    data,
  };
};

export const searchExpense = (query) => {
  return{
    type: ActionTypes.SEARCH_EXPENSE,
    query,
  }
}
