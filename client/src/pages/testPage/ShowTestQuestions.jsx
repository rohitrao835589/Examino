import React, { useState } from "react";
import { Question } from "../../components/import";
function ShowTestQuestions({ data }) {
  const [index, setIndex] = useState(0);
  function handleClick(add) {
    if((index + add) >= data.questions.length || (index + add)<0 ){
      return ;
    }
    console.log((index + add));
    setIndex(prev=>prev+add);
  }
  return (
    <div className="h-screen  flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md shadow-2xl rounded-2xl p-8">
        <Question question={data.questions[index]} />
        <div className="grid grid-cols-2">
          <button
            className="mt-2 mx-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200"
            onClick={() => handleClick(-1)}
          >
            Prev
          </button>
          <button
            className="mt-2 mx-4 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition duration-200"
            onClick={() => handleClick(1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowTestQuestions;
