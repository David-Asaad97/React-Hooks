import { useState } from "react";

const CounterComponent = () => {

    const [counter, setCounter] = useState(0);
    const up = ()=>{
        // setCounter(counter => counter + 1);
        setTimeout(()=>{
            setCounter(value => value + 1);
        },2000)
    }
    const reset = ()=>{
        setCounter(0);
    }

    return (
        <div>
            <h3> {counter}</h3>
            <div className="d-flex justify-content-between">
                <button onClick={()=>setCounter(counter - 1)} className="button my-2">
                    dimnuisci
                </button>
                <button onClick={up} className="button my-2">
                    aumenta
                </button>
            </div>
            <button onClick={reset} className="button reset-button my-2">
                    resetta
            </button>
        </div>
    );
};

export default CounterComponent;
