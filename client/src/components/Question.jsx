function Question({ question , handleChange , prevVal}) {
    function handleCheck(status , id){
        if(status === "on"){
          handleChange(id);
        }
    }
  return (
    <div className="bg-white p-7">
      <h1 className="font-semi-bold text-3xl my-4">{question.title}</h1>
      {question.optionType === "textBox" ? (
        <input
          type="text"
          value={prevVal}
          onChange={(e)=>handleChange(e.target.value)}
          className="border-b-1 w-[90%] focus:border-b-2 focus:outline-0 focus:border-blue-700 "
        />
      ) : (
        <div className="mt-7">
          {question.options.map((option) => (
            <div key={option.id} className="w-full m-2">
              <input
                type="radio"
                name={question.id}
                className="peer hidden"
                id={option.id}
                onChange={(e)=>handleCheck(e.target.value , option.id)}
                checked={prevVal==option.id}
              />
              <label
                className="block border rounded-md p-1 px-4 cursor-pointer 
               text-xl sm:text-2xl h-auto
               peer-checked:bg-blue-600 peer-checked:text-white 
               "
                htmlFor={option.id}
              >
                {option.text}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Question;
