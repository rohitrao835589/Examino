import React from 'react'
import {useNavigate} from 'react-router-dom'
const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>welcome user</h1>
      <p>here you can create a web based taste without any complexity</p>
      <button type="button" onClick={()=>navigate('/dashboard')} className="outline p-3 rounded-2xl m-4 cursor-pointer">Start</button>
    </>
  )
}

export default App