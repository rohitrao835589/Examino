import React, { useState } from "react";
import { Question } from "../../components/import";
import {sendTestResponse} from "../../services/api.js"
function ShowTestQuestions({ data , setSubmitted}) {
  const [index, setIndex] = useState(0);
  const [ans, setAns] = useState(
    Array.from({ length: data.questions.length }, () => "")
  );

  function handleClick(add) {
    if (index + add >= data.questions.length || index + add < 0) {
      return;
    }
    setIndex((prev) => prev + add);
  }
  function handleChange(val, index) {
    setAns((prev) => {
      return prev.map((ele, i) => (i == index ? val : ele));
    });
    console.log(ans);
  }
  async function handleSubmit(){
    console.log("from submitted");
    const res = await sendTestResponse(ans , data.Testid);
    if(res){
      setSubmitted(res);
    }
  }
  return (
    <div className="h-screen  flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md shadow-2xl rounded-2xl p-8">
        <Question
          question={data.questions[index]}
          handleChange={(val) => handleChange(val, index)}
          prevVal={ans[index]}
        />
        <div className="grid grid-cols-2">
          <button
            className="mt-2 mx-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200"
            onClick={() => handleClick(-1)}
          >
            Prev
          </button>

          {index === data.questions.length - 1 ? (
            <button className="mt-2 mx-4 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition duration-200" 
            onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            <button
              className="mt-2 mx-4 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition duration-200"
              onClick={() => handleClick(1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowTestQuestions;
