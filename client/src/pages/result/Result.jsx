import { useLocation } from "react-router-dom";
import { DisplayQuestion } from "../../components/import";
function Result() {
  const location = useLocation();
  const data = location.state || {};
  const { TestId, questions } = data;
  if (!questions) {
    return <h1>Fetching for question ....</h1>;
  }

  return (
    <div className="bg-purple-100 flex justify-center p-3 md:px-0 min-h-[100dvh]">
      <div className="w-full md:max-w-2xl ">
        {questions.map((question) => (
          <DisplayQuestion question={question} key={question.id} />
        ))}
      </div>
    </div>
  );
}

export default Result;
