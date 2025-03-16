import React from 'react'

function DisplayQuestion({question , handleClick=null}) {
  return (
    <div onClick={handleClick} className='bg-white p-4 my-4 shadow-md rounded-xl'>
      <h2 className='ml-2 text-'>{question.title}</h2>
      {(question.optionType === "textBox")?(
        <div>
          <input
            className=" sm:w-[60%] w-[100%]  h-12 pl-2 border-b-1 outline-none cursor-default "
            type="text"
            name="title"
            placeholder="Answer text"
            readOnly
          />
        </div>
      ):
      ( 
        <ul>
          {
          question.options.map((option)=>(
              <li key={option.id}>
              <input
                type="radio"
                value=""
                disabled
                className="m-2 sm:scale-150 scale-120"
              />
              <span>{option.text}</span>
              </li>
          ))
          }
        </ul>
      )
      }
    </div>
  )
}

export default DisplayQuestion