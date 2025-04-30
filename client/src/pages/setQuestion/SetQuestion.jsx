import React, { useState } from "react";
import { AddQuestion, DisplayQuestion } from "../../components/import";
import { useParams, useNavigate } from "react-router-dom";
function SetQuestion() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [editableQuestionId, setEditableQuestionId] = useState(null);
  const [title, setTitle] = useState("");
  function handleAdd(newQuestion) {
    setQuestions((prev) => [...prev, newQuestion]);
  }
  function handleEdit(updatedQuestion) {
    setQuestions((prev) =>
      prev.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q))
    );
    setEditableQuestionId(null);
  }
  function handleSubmit() {
    const data = {
      Testid: id,
      title:title,
      questions: questions,
    };
    navigate(`/test/${id}/setting`, { state: data });
  }
  return (
    <div className="bg-purple-100 flex justify-center p-3 md:px-0 min-h-[100dvh]">
      <div className="w-full md:max-w-2xl">
        <div className="bg-white p-4 my-4 shadow-md rounded-xl ">
          
          <input
          className=" sm:w-[60%] w-[100%] h-12 focus:bg-neutral-100 pl-2 focus:border-b-3 outline-none text-2xl text-black "
          type="text"
          name="title"
          placeholder="Untitled Test"
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
          required
        />
        </div>
        {questions.map((question) =>
          editableQuestionId === question.id ? (
            <AddQuestion
              addNewQuestion={handleEdit}
              existingQuestion={question}
              key={question.id}
            />
          ) : (
            <DisplayQuestion
              question={question}
              handleClick={() => {
                setEditableQuestionId(question.id);
              }}
              key={question.id}
            />
          )
        )}
        <AddQuestion addNewQuestion={handleAdd} />
        <button
          type="button"
          onClick={handleSubmit}
          className=" bg-blue-700  px-7 py-2 rounded-2xl text-xl hover:bg-blue-400 font-bold text-white shadow-md"
        >
          Save Test
        </button>
      </div>
    </div>
  );
}

export default SetQuestion;
