import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function AddQuestion({addNewQuestion , existingQuestion = null }) {
    // State to store the question details
    const [question, setQuestion] = useState(
        existingQuestion || 
        {
        id: nanoid(6),
        title: "",
        optionType: "choice",
        options: [
            { id: nanoid(6), text: "Option 1" },
            { id: nanoid(6), text: "Option 2" }
        ]
    });

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
                { id: nanoid(6), text: `Option ${prev.options.length + 1}` }
            ],
        }));
    }
    function handleSubmit(event){
        event.preventDefault();
        addNewQuestion(question);
        setQuestion({
            id: nanoid(6),
            title: "",
            optionType: "choice",
            options: [
                { id: nanoid(6), text: "Option 1" },
                { id: nanoid(6), text: "Option 2" }
            ]
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Input for question title */}
            <input
                type="text"
                name="title"
                placeholder='Enter Question here'
                value={question.title}
                onChange={(event) =>
                    setQuestion((prev) => ({ ...prev, title: event.target.value }))
                }
                required
            />

            {/* Select field for option type */}
            <select
                name="optionType"
                value={question.optionType}
                onChange={(event) =>
                    setQuestion((prev) => ({ ...prev, optionType: event.target.value }))
                }
            >
                <option value="choice">Multiple Choice</option>
                <option value="textBox">Text Box</option>
            </select>

            {/* Render multiple choice options dynamically */}
            {question.optionType === "choice" && (
                <div>
                    {question.options.map((option) => (
                        <div key={option.id}>
                            <input
                                type="text"
                                value={option.text}
                                onChange={(event) =>
                                    handleOptionChange(event.target.value, option.id)
                                }
                                required
                            />
                            <button
                                type="button"
                                onClick={() => handleOptionDelete(option.id)}
                            >
                                ❌
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={handleOptionAdd}>
                        ➕ Add Option
                    </button>
                </div>
            )}

            <button type="submit">Add Question</button>
        </form>
    );
}

export default AddQuestion;
