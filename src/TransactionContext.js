import { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";

let initialTransactions = [];

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
  function addTransaction(transObj) {
    dispatch({
      type: "ADD",
      payload: transObj,
    });
  }
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }
  return (
    <TransactionContext.Provider
      value={{ transactions: state, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
