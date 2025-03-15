import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function AddQuestion({ addNewQuestion, existingQuestion = null }) {
  // State to store the question details
  const lastInputRef = useRef(null);
  const [question, setQuestion] = useState(
    existingQuestion || {
      id: nanoid(6),
      title: "",
      optionType: "choice",
      options: [{ id: nanoid(6), text: "Option 1" }],
    }
  );
  useEffect(() => {
    lastInputRef.current?.focus();
  }, [question.options.length]);
  // Update option text when changed
  function handleOptionChange(value, id) {
    setQuestion((prev) => ({
      ...prev,
      options: prev.options.map((option) =>
        option.id === id ? { ...option, text: value } : option
      ),
    }));
  }

  // Delete an option
  function handleOptionDelete(id) {
    setQuestion((prev) => ({
      ...prev,
      options: prev.options.filter((option) => option.id !== id),
    }));
  }

  // Add a new option (ensuring unique IDs)
  function handleOptionAdd() {
    setQuestion((prev) => ({
      ...prev,
      options: [
        ...prev.options,
        { id: nanoid(6), text: `Option ${prev.options.length + 1}` },
      ],
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    addNewQuestion(question);
    setQuestion({
      id: nanoid(6),
      title: "",
      optionType: "choice",
      options: [
        { id: nanoid(6), text: "Option 1" },
        { id: nanoid(6), text: "Option 2" },
      ],
    });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4">
      {/* this section include the input and option type choice */}
      <div className="w-[100%]">
        {/* Input for question title */}
        <input
          className=" sm:w-[60%] w-[100%] bg-neutral-50 h-12 focus:bg-neutral-100 pl-2 border-b-2 focus:border-b-3 outline-none "
          type="text"
          name="title"
          placeholder="Untitled Question"
          value={question.title}
          onChange={(event) =>
            setQuestion((prev) => ({ ...prev, title: event.target.value }))
          }
          required
        />

        {/* Select field for option type */}
        <select
          className="sm:w-[35%] w-[50%] h-10 ml-2 outline-1 max-sm:my-3 rounded-sm sm:text-center max-sm:pl-2"
          name="optionType"
          value={question.optionType}
          onChange={(event) =>
            setQuestion((prev) => ({ ...prev, optionType: event.target.value }))
          }
        >
          <option value="choice">Multiple Choice</option>
          <option value="textBox">Text Box</option>
        </select>
      </div>
      {/* Render multiple choice options dynamically */}
      {question.optionType === "choice" && (
        <div className="m-2">
          {question.options.map((option, index) => (
            <div key={option.id} className=" h-10 ">
              <input
                type="radio"
                value=""
                disabled
                className="m-2 sm:scale-150 scale-120"
              />
              <input
                className="w-[70%] ml-2 outline-none hover:border-b-1 focus:border-b-2"
                ref={
                  index === question.options.length - 1 && index != 0
                    ? lastInputRef
                    : null
                }
                type="text"
                value={option.text}
                onChange={(event) =>
                  handleOptionChange(event.target.value, option.id)
                }
                onFocus={(event) => event.target.select()}
                required
              />
              <button
                type="button"
                onClick={() => handleOptionDelete(option.id)}
                className="ml-4 md:ml-12 "
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  size="2xl"
                  className=" opacity-40"
                />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleOptionAdd}
            className="flex items-center space-x-2"
          >
            <input
              type="radio"
              value=""
              disabled
              className="m-2 sm:scale-150 scale-120"
            />
            <input
              type="text"
              value="Add option"
              readOnly
              className="cursor-text ml-2 outline-none hover:border-b-1 focus:border-b-2 text-stone-400 "
            />
          </button>
        </div>
      )}
      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-600 text-white 
  rounded-2xl py-2 px-6 sm:text-lg text-md font-semibold 
  shadow-md transition-all ease-in-out duration-200"
      >
        Done
      </button>
    </form>
  );
}

export default AddQuestion;
