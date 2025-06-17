import { useState } from "react";
import Header from "./components/Header";
import FinanceForm from "./components/FinanceForm";
import Total from "./components/Total";
import FinanceList from "./components/FincanceList";
import "./index.scss";


function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const total = transactions.reduce((acc, t) => {
    return t.type === "entrada" ? acc + t.value : acc - t.value;
  }, 0);

  return (
    <div>
      <Header />

      <main className="container">
        <div className="left">
          <FinanceForm addTransaction={addTransaction} />
          <Total total={total} />
        </div>

        <div className="right">
          <h2>Resumo financeiro</h2>
          <FinanceList
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
