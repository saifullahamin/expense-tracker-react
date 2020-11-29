import React, { useState, useContext } from "react";
import { TransactionContext } from "../TransactionContext";

export const AddTransaction = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(TransactionContext);

  const handleAddition = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      desc,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setDesc("");
    setAmount(0);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <hr />

      <form className="transaction-form" onSubmit={handleAddition}>
        <label>
          <p>Description</p>
          <input
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Enter text ..."
            value={desc}
            required
          ></input>
        </label>

        <label>
          <p>
            Amount
            <br />
            (negative - expense, positive - income)
          </p>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="0"
            value={amount}
            required
          ></input>
        </label>

        <br />
        <br />

        <input
          className="submit-button"
          type="submit"
          value="Add Transaction"
        ></input>
      </form>
    </div>
  );
};
