import React from 'react'

function DisplayQuestion({question , handleClick}) {
  return (
    <div onClick={handleClick}>
      <h2>{question.title}</h2>
      {(question.optionType === "textBox")?(
        <textarea name="" id=""></textarea>
      ):
      (
        question.options.map((option)=>(
          <div key={option.id}>
            <label htmlFor={option.id}>{option.text}</label>
            <input type="radio" name={`question-${question.id}`} id={option.id} value={option.text} />
          </div>
        ))
      )
      }
    </div>
  )
}

export default DisplayQuestion