import { useContext } from "react";
import { TransactionContext } from "../TransactionContext";

export const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);
  const { deleteTransaction } = useContext(TransactionContext);

  return (
    <div>
      <br />
      <h3>History</h3>
      <hr />
      <ul className="transaction-list">
        {transactions.map((transObj) => {
          return (
            <li
              className={transObj.amount < 0 ? "minus" : "plus"}
              key={transObj.id}
            >
              <div>
                <button
                  className="x-button"
                  onClick={() => deleteTransaction(transObj.id)}
                >
                  x
                </button>
                <span>{transObj.desc}</span>
              </div>
              <span>
                {transObj.amount >= 0 ? "+" : "-"}${Math.abs(transObj.amount)}
              </span>
            </li>
          );
        })}
      </ul>
      <br />
    </div>
  );
};
