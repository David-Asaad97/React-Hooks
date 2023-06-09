import React, { useState } from "react";

const StateObject = () => {

    const[person, setPerson] = useState({
        name:'David',
        age: 25,
        action: 'hola amigos',
    });
   
    const cambiaSaluto = ()=>{
        if (person.action === 'hola amigos'){
            setPerson({
                ...person,
                age:38154714421141,
                action: "kill me first time please"});
        }else{
            setPerson({
                ...person,
                age:25 ,
                action: 'hola amigos'})
        }
    }

    return <div className="item shadow">
        <div className="text-left">
            <h5>{person.name}</h5>
            <h5>{person.age}</h5>
            <h5>{person.action}</h5>
        </div>
        <button className="button"
            onClick={()=>cambiaSaluto()}
        >
            Cambia il saluto
        </button>
    </div>;
};

export default StateObject;
