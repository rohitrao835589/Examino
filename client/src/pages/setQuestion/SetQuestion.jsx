import React, { useState } from 'react'
import { AddQuestion  , DisplayQuestion } from '../../components/import'
function SetQuestion() {
    const [questions , setQuestions] = useState([]);
    const [editableQuestionId, setEditableQuestionId] = useState(null);
    function handleAdd(newQuestion){
        setQuestions((prev)=>[...prev , newQuestion]);
    }
    function handleEdit(updatedQuestion) {
        setQuestions((prev) =>
            prev.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q))
        );
        setEditableQuestionId(null); // Exit edit mode
    }
  return (
    <>
        {questions.map((question)=>(
            editableQuestionId===question.id?
            (<AddQuestion addNewQuestion={handleEdit} existingQuestion={question} key={question.id}/>):
            (<DisplayQuestion question={question} handleClick={()=>{setEditableQuestionId(question.id)}} key={question.id}/>)
        ))}
        <AddQuestion addNewQuestion={handleAdd}/>
    </>
  )
}

export default SetQuestion