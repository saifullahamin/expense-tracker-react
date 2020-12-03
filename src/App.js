import "./App.css";
import { TransactionProvider } from "./TransactionContext";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { AddTransaction } from "./components/AddTransaction";
import { TransactionList } from "./components/TransactionList";

function App() {
  return (
    <TransactionProvider>
      <div className="container">
        <Header />
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
    </TransactionProvider>
  );
}

export default App;
