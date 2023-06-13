import { useEffect, useState } from "react";



const useEffectBasi = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (value < 1) {
            document.title = `nessuna notifica`;
        } else if (value === 1) {
            document.title = `hai una ${value} notifica`
        } else {
            document.title = `hai  ${value} notifiche`
        }
    },[value]);

    const levelUP = ()=>{
        setValue(oldValue => ++oldValue);
    }
    const leveldonwn =()=>{
        if (value > 1) {
            setValue(oldValue=> --oldValue);
            console.log(value);
        }else if(value <=1){
            console.log(value);
            setValue(oldValue=> oldValue = 0);
        }
    }

    return (
        <div className="item">
            <button className="button" onClick={leveldonwn}>diminuisci</button>

            <h4>il valore delle tue notifiche sono: {value}</h4>
            <button className="button" onClick={levelUP}>aumenta</button>
        </div>
    );
};

export default useEffectBasi;
