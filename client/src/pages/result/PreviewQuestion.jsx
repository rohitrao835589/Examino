import { DisplayQuestion } from "../../components/import";

function PreviewQuestion({questions , title}) {
  return (
    
      <div className="w-full md:max-w-2xl ">
      <div className="bg-white p-4 my-4 shadow-md rounded-xl text-center font-bold text-2xl">{title}</div>
        {questions.map((question) => (
          <DisplayQuestion question={question} key={question.id} />
        ))}
    </div>
  )
}

export default PreviewQuestion