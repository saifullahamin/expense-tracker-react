import "./App.css";
import { useReducer } from "react";
import TransactionReducer from "./TransactionReducer";
import { TransactionContext } from "./TransactionContext";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { AddTransaction } from "./components/AddTransaction";
import { TransactionList } from "./components/TransactionList";

function App() {
  const [state, dispatch] = useReducer(TransactionReducer, []);

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
      <div className="container">
        <Header />
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
    </TransactionContext.Provider>
  );
}

export default App;
