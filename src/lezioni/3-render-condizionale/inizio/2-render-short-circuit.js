import React, { useState } from "react";

const ShortRender = () => {
  const [parola, setparola] = useState("ho un valore");
  const [toggle, setToggle] = useState(false);
  // const esempio = parola || 'sono un esempio'
  // const esempio2 = parola === 'ho un valore'? "sono true" : "sono false";
  return (
    <div>
      {toggle? <h2 className="text-success">vero</h2>: <h5 className="text-danger">false</h5>}
      <button className="button" onClick={()=>setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default ShortRender;
