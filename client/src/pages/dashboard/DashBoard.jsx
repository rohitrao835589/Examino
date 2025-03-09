import React from 'react'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom';
function DashBoard() {
    const navigate = useNavigate();
    function handleNewTestCreate(){
        const testId = nanoid(21);
        navigate(`/test/${testId}/edit`);
    }
  return (
    <>
        <div>
            Create New Test 
            <button type="button" onClick={handleNewTestCreate}> ➕ </button>
        </div>
        <div>
            Prev Tests
        </div>
    </>
  )
}

export default DashBoard