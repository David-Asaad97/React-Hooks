import React from 'react'
import { useParams } from 'react-router-dom'

const SigleProfile =() =>{
    const param = useParams();
  return (
    <div>
      <h2>Hola sono un profilo con id {param.id}</h2>
    </div>
  )
}

export default SigleProfile