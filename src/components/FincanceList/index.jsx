import FinanceCard from "../FinanceCard";
import "./FinanceList.scss";

export function FinanceList({ transactions, deleteTransaction }) {
  return (
    <ul className="finance-list">
      {transactions.map((t) => (
        <FinanceCard key={t.id} transaction={t} deleteTransaction={deleteTransaction} />
      ))}
    </ul>
  );
}

export default FinanceList;
