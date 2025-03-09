import React from 'react'
import {useNavigate} from 'react-router-dom'
const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>welcome user</h1>
      <p>here you can create a web based taste without any complexity</p>
      <button type="button" onClick={()=>navigate('/dashboard')}>Start</button>
    </>
  )
}

export default App