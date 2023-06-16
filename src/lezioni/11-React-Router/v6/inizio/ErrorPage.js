import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate();
  
  return (
    <div>
      <h4>
        Page not found
      </h4>
      <button className='btn btn-sucess mt-4' onClick={()=>navigate('/')}>Back to home</button>
    </div>
  )
}

export default ErrorPage
