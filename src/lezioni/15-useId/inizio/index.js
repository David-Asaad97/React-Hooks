import React, { useId } from "react";

const Component = () => {
  const id = useId();
  return <div className='mt-4'>
    <label htmlFor={id}>Hai capito use ID ?</label>
    <input
      className='input-group-text bg-white'
      id={id}
      type='checkbox'
      name='react'
    />
    </div>;
};

export default Component;
