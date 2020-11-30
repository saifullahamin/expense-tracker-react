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
      <h4 className="bal-d">Your Balance</h4>
      <h1 className="bal-u">${getIncome() + getExpense()}</h1>{" "}
      <div className="inc-exp-main">

          <h4 className="inc-exp">INCOME<br /><span className="income">${getIncome()}</span></h4>
          <p className="line">|</p>
          <h4 className="inc-exp">EXPENSE<br /><span className="expense">${Math.abs(getExpense())}</span></h4>

      </div>
    </div>
  );
};
