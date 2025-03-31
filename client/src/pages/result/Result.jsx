import { useLocation } from "react-router-dom";
import PreviewQuestion from "./PreviewQuestion";
function Result() {
  const location = useLocation();
  const data = location.state || {};
  const { TestId, questions } = data;
  if (!questions) {
    return <h1>Fetching for question ....</h1>;
  }

  return (
    <>
      <div className="bg-purple-100 flex justify-center p-3 md:px-0 min-h-[100dvh]">
      <PreviewQuestion questions={questions} />
      </div>
    </>
  );
}

export default Result;
