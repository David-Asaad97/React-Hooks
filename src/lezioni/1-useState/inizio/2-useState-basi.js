import { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale
//   const value = useState()[0];
//   const handler = useState()[1];
//   console.log(value, handler);
const UsoBase = () => {
    const [ titolo, setTitolo ] = useState("hello world!!!!!!!!!");
    const tit1 = 'hello world!!!!!!!!!';
    
    const cambiaTitolo =()=>{
        if(tit1 !== titolo){
            setTitolo(tit1);
        }else{
            setTitolo('gino wins!');
        }
    }
    
    return (
        <>
            <h2> {titolo}</h2>
            <button type="button" className=" btn btn-info my-3" onClick={cambiaTitolo}>
            cambia Titolo
        </button>
        </>
    );
};

export default UsoBase;
