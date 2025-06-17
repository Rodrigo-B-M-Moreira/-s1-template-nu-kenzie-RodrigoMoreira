import "./Total.scss";

export function Total({ total }) {
    return (
        <div className="total">
            <h3>Valor total:</h3>
            <p className={total >= 0 ? "positivo" : "negativo"}>
                R$ {total.toFixed(2)}
            </p>
            <small>O valor se refere ao saldo</small>
        </div>
    );
}

export default Total;
