import React, { useContext } from "react";
import {TransactionContext} from "../TransactionContext";

export const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  const getIncome = () => {
    let income = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income = income + transactions[i].amount;
      }
    }
    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense = expense + transactions[i].amount;
      }
    }
    return expense;
  };
  return (
    <div>
      <h4 className="pad-d">Your Balance</h4>
      <h1 className="pad-u">${getIncome() + getExpense()}</h1>{" "}
      <div className="inc-exp-main">
        <div className="inc-exp-container pad-d">
          <h4 className="pad-d">INCOME</h4>
          <h4 className="pad-d">EXPENSE</h4>
        </div>

        <div className="inc-exp-container pad-u">
          <h3 className="pad-u income">${getIncome()}</h3>
          <h3 className="pad-u expense">${Math.abs(getExpense())}</h3>
        </div>
      </div>
    </div>
  );
};
