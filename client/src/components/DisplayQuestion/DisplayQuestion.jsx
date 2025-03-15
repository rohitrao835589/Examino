import React from 'react'

function DisplayQuestion({question , handleClick=null}) {
  return (
    <div onClick={handleClick}>
      <h2>{question.title}</h2>
      {(question.optionType === "textBox")?(
        <textarea name="" id=""></textarea>
      ):
      ( 
        <ul>
          {
          question.options.map((option)=>(
              <li key={option.id}>{option.text}</li>
          ))
          }
        </ul>
      )
      }
    </div>
  )
}

export default DisplayQuestion