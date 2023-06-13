import React, { useState } from "react";

const ControlledInput = () => {
    const [persone, setPersone] = useState([]);
    const [persona, setPersona] = useState({ nome: "", email: "", cell: "" });

    const handleSumbit = (e) => {
        e.preventDefault();
        if (persona.nome && persona.email && persona.cell) {
            setPersone([
                ...persone,
                {
                    id: new Date(Date.now()).getTime().toString(),
                    ...persona,
                },
            ]);
            setPersona({ nome: "", email: "", cell: "" });
        } else {     alert("riempi tutti i capi prima di inviare");     }
    };

    const handleChange = (e) => {
        const { variaible, valore } = e.target;
        setPersona({ ...persona, [variaible]: valore });
    };

    return (
        <form className="bg-white shadow p-4">
            <div className="form-group d-flex align-items-center container mt-2">
                <label htmlFor="nome" className="text-left font-weight-bold col-2">
                    Nome:
                </label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="form-control"
                    value={persona.nome}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group d-flex align-items-center container mt-2">
                <label htmlFor="email" className="text-left font-weight-bold col-2">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={persona.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group d-flex align-items-center container mt-2">
                <label htmlFor="cell" className="text-left font-weight-bold col-2">
                    Cellulare:
                </label>
                <input
                    type="tel"
                    id="cell"
                    name="cell"
                    className="form-control"
                    value={persona.cell}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-info mt-4"
                onClick={handleSumbit}
            >
                Invia
            </button>
        </form>
    );
};

export default ControlledInput;
