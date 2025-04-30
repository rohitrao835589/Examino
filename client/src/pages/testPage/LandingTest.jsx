import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../services/api";
import ShowTestQuestions from "./ShowTestQuestions";
function LandingTest() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const load = async () => {
      const fetchedData = await fetchData(id);
      setData(fetchedData);
    };
    load();
  }, [id]);
  if (data === null) {
    return <h1 className="text-2xl text-center mt-4 ">NO TEST FOUND</h1>;
  }

  return (
    <>
      {started == true ? (
        <ShowTestQuestions data={data}/>
      ) : (
        <div className="h-screen bg-gray-100 flex justify-center items-center px-4">
          <div className="bg-white w-full max-w-md shadow-2xl rounded-2xl p-8 flex flex-col gap-6 items-center">
            {/* Title */}
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight text-center">
              {data.title}
            </h1>

            {/* Instructions */}
            <ul className="text-gray-600 text-sm sm:text-base space-y-2 list-disc list-inside">
              {data?.settings?.fullScreenMode && (
                <li>You must stay in fullscreen during the entire test.</li>
              )}
              {data?.settings?.allowTabSwitch && (
                <li>Switching tabs or windows will submit your test.</li>
              )}
              {data?.settings?.allowCopy && (
                <li>Copying or selecting questions is strictly disabled.</li>
              )}
              <li>Make sure you have a stable internet connection.</li>
            </ul>

            {/* Start Button */}
            <button
              className="mt-2 w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200"
              onClick={() => setStarted(true)}
            >
              Start Test
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LandingTest;
