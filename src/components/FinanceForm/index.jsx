import { useState } from "react";
import "./FinanceForm.scss";

export function FinanceForm({ addTransaction }) {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [type, setType] = useState("entrada");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: crypto.randomUUID(),
            description,
            value: Number(value),
            type,
        };

        addTransaction(newTransaction);

        setDescription("");
        setValue("");
        setType("entrada");
    };

    return (
        <form className="finance-form" onSubmit={handleSubmit}>
            <label>Descrição</label>
            <input
                type="text"
                placeholder="Digite aqui sua descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>Valor (R$)</label>
            <input
                type="number"
                placeholder="1"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <label>Tipo de valor</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
            </select>

            <button type="submit">Inserir valor</button>
        </form>
    );
}

export default FinanceForm;
