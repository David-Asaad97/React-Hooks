import React, { useEffect, useState } from "react";

const CleanUp = () => {
    const [size, setSize] = useState(window.innerWidth)
    function rizizeWindow(){
        setSize(oldvalue => oldvalue = window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize", rizizeWindow )
        return () => window.removeEventListener('resize', rizizeWindow);

    })

    return (
        <div className=" container w-50 col-6 offset-3 shadow bg-white py-4" style={{
            textAlign : 'center',

        }}>
            <h1> {size} </h1>
        </div>
    );
};

export default CleanUp;
