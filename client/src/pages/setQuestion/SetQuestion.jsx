import React, { useState } from "react";
import { AddQuestion, DisplayQuestion } from "../../components/import";
import { useParams , useNavigate} from "react-router-dom";
function SetQuestion() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [editableQuestionId, setEditableQuestionId] = useState(null);
  function handleAdd(newQuestion) {
    setQuestions((prev) => [...prev, newQuestion]);
  }
  function handleEdit(updatedQuestion) {
    setQuestions((prev) =>
      prev.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q))
    );
    setEditableQuestionId(null); // Exit edit mode
  }
  function handleSubmit() {
    const data = {
      Testid: id,
      questions: questions,
    };
    navigate(`/test/${id}/result` ,{state:data});
  }
  return (
    <div className="bg-purple-100 flex justify-center p-3 md:px-0 min-h-[100dvh]">
      <div className="w-full md:max-w-2xl">
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
        <button type="button" onClick={handleSubmit} className=" bg-blue-700  px-7 py-2 rounded-2xl text-xl hover:bg-blue-400 font-bold text-white shadow-md">
          Save Test
        </button>
      </div>
    </div>
  );
}

export default SetQuestion;
