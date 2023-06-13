import React, { useEffect, useState } from "react";

const ControlledInput = () => {
    const [ nome, setNome] = useState('');
    const [ email, setEmail] = useState('');
    const [ cell, setCell] = useState('');
    const [persone ,setPersone] = useState([]);
    useEffect(()=>{
        const{log}= console
        log(persone);
    },[persone])
    const handleSumbit = e =>{
        e.preventDefault();
        if(nome && email && cell){
            console.log(nome, email, cell);
            setPersone(
                ...persone,
                {
                    id: new Date(Date.now()).getTime().toString(),
                    nome, email ,cell,
                }
            )
            setCell('');
            setEmail('');
            setNome(''); 
        }   else    {
            alert("il form non e stato riempito correttamente");
        }  
    }
   

    return (
        <form className="bg-white shadow rounded p-4">
            <div className=" form-group d-flex align-items-center container mt-2">
                <label htmlFor="nome" 
                className="text-left font-weight-bold col-2" >
                    nome:
                </label>
                <input
                    value={nome}
                    id="nome" 
                    onChange={(e)=>setNome(e.target.value)}
                    type="text" 
                    name="nome" 
                    className=" form-control "
                />
            </div>
            <div className=" form-group d-flex align-items-center container mt-2">
                <label htmlFor="email" className="text-left font-weight-bold col-2" >
                    email:
                </label>
                <input
                    value={email}
                    id="email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    name="email" 
                    className=" form-control "
                />
            </div>
            <div className=" form-group d-flex align-items-center container mt-2">
                <label htmlFor="cellulare" 
                className="text-left font-weight-bold col-2" >
                    cell:
                </label>
                <input
                    value={cell}
                    id="cellulare" 
                    onChange={(e)=>setCell(e.target.value)}
                    type="tel" 
                    name="cellulare" 
                    className=" form-control "
                />
            </div>
            <button type="submit" className="btn btn-info mt-4" onClick={handleSumbit}>invia</button>
        </form>
    );
};

export default ControlledInput;

