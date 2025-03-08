import React, { useState } from 'react'
import { AddQuestion } from '../../components/import'
function SetQuestion() {
    const [questions , setQuestions] = useState([])
    function handleAdd(newQuestion){
        setQuestions((prev)=>[...prev , newQuestion]);
        console.log("here");
        
    }
  return (
    <>
        <AddQuestion addNewQuestion={handleAdd}/>
        {questions.map((question)=>(
            <h1 key={question.id}>{question.title}</h1>
        ))}
    </>
  )
}

export default SetQuestion