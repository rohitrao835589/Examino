import { React, useState, useEffect } from 'react'

function AddQuestion({ questionNumber }) {
    const [question, setQuestion] = useState({
        title: "",
        optionType: "choice",
        options: ["option 1", "option 2"]
    });

    function handleOptionChange(value, index) {
        setQuestion((prev) => {
            const newArray = [...prev.options];
            newArray[index] = value;
            return { ...prev, options: newArray }
        })
    }
    return (
        <>
            <form >
                <input
                    type="text"
                    name="title"
                    value={question.title}
                    onChange={(event) => (setQuestion((prev) => ({ ...prev, title: event.target.value })))}

                />
                <select
                    name="optionType"
                    value={question.optionType}
                    onChange={(event) => setQuestion((prev) => ({ ...prev, optionType: event.target.value }))}
                >
                    <option value="choice">Multiple Choice</option>
                    <option value="textBox">Text Box</option>
                </select>
                {question.optionType == "choice" &&
                    <div>{
                        question.options.map((value, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    value={value}
                                    onChange={(event) => (handleOptionChange(event.target.value, index))}

                                />
                                <br />
                            </div>
                        ))
                    }
                        <button
                            type="button"
                            onClick={() => setQuestion((prev) => ({ ...prev, options: [...prev.options, `option ${prev.options.length + 1}`] }))}
                        >➕</button>
                    </div>
                }
                {/* <div>{question.options}</div> */}
            </form>
        </>
    )
}

export default AddQuestion