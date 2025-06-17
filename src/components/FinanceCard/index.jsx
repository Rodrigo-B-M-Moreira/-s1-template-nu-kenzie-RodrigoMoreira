import "./FinanceCard.scss";

export function FinanceCard({ transaction, deleteTransaction }) {
    const { id, description, value, type } = transaction;

    return (
        <li className={`finance-card ${type}`}>
            <div className="content">
                <h3>{description}</h3>
                <p>{type === "entrada" ? "Entrada" : "Despesa"}</p>
            </div>
            <div className="value-area">
                <span>R$ {value}</span>
                <button onClick={() => deleteTransaction(id)}>Excluir</button>
            </div>
        </li>
    );
}

export default FinanceCard;
