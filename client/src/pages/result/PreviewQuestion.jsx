import { DisplayQuestion } from "../../components/import";
function PreviewQuestion({data}) {
  if (!data || typeof data !== "object") {
    return (
      <div className="flex justify-center items-center h-screen m-auto bg-purple-100">
        <h1 className=" text-2xl font-bold ">
          Nothing To show. Kindly Create Test First.
        </h1>
      </div>
    );
  }
  return (
    <div className="bg-purple-100 flex justify-center p-3 md:px-0 min-h-[100dvh]">
      <div className="w-full md:max-w-2xl ">
      <div className="bg-white p-4 my-4 shadow-md rounded-xl text-center font-bold text-2xl">{data?.title}</div>
        {data?.questions.map((question) => (
          <DisplayQuestion question={question} key={question.id} />
        ))}
    </div>
    </div>
  )
}

export default PreviewQuestion