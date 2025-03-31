import { DisplayQuestion } from "../../components/import";

function PreviewQuestion({questions}) {
  return (
    
      <div className="w-full md:max-w-2xl ">
        {questions.map((question) => (
          <DisplayQuestion question={question} key={question.id} />
        ))}
    </div>
  )
}

export default PreviewQuestion