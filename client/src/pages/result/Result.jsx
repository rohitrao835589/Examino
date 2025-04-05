import { useLocation, useParams } from "react-router-dom";
import PreviewQuestion from "./PreviewQuestion";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";

function Result() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const load = async () => {
      if (location.state === null) {
        const fetchedData = await fetchData(id);
        setData(fetchedData);
      } else {
        setData(location.state);
      }
    };
    load();
  }, [location.state, id]);

  if (!data || typeof data !== "object") {
    return (
      <div className="flex justify-center items-center h-screen m-auto bg-purple-100">
        <h1 className=" text-2xl font-bold ">
          Nothing To show. Kindly Create Test First.
        </h1>
      </div>
    );
  }

  const { Testid, questions } = data;

  return (
    <div className="bg-purple-100 flex justify-center p-3 md:px-0 min-h-[100dvh]">
      <PreviewQuestion questions={questions} />
    </div>
  );
}

export default Result;
