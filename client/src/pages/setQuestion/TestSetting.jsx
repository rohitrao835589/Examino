import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendPostRequest } from "../../services/api";
function TestSetting() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || null;

  useEffect(() => {
    if (!data) {
      navigate("/dashboard");
    }
  }, [data, navigate]);


  // State for all settings
  const [settings, setSettings] = useState({
    fullScreenMode: false,
    allowTabSwitch: false,
    allowCopy: false,
    shuffleQuestions: false,
  });

  // Handle checkbox toggles
  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  function handleSubmit(){
    const newData = {
      ...data,
      settings:settings
    }
    
    sendPostRequest(newData);
    navigate(`/test/${newData.Testid}/result` , {state:newData});
  }
  return (
    <div className="bg-purple-100 flex justify-center items-center min-h-screen p-5">
      <div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Test Settings
        </h1>

        {/* Checkbox Settings */}
        <div className="space-y-5">
          {[
            { label: "Full Screen Mode", key: "fullScreenMode" },
            { label: "Allow Tab Switch", key: "allowTabSwitch" },
            { label: "Allow Copy of Questions", key: "allowCopy" },
            { label: "Shuffle Questions", key: "shuffleQuestions" },
          ].map(({ label, key }) => (
            <div
              key={key}
              className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg"
            >
              <span className="text-lg font-medium text-gray-800">{label}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings[key]}
                  onChange={() => handleToggle(key)}
                />
                <div className="w-12 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 relative transition-all">
                  <div className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full shadow-md transform transition-all ${settings[key] ? "translate-x-5" : ""}`}></div>
                </div>
              </label>
            </div>
          ))}
          <button type="button" onClick={handleSubmit} className=" bg-blue-700  px-7 py-2 rounded-2xl text-xl hover:bg-blue-400 font-bold text-white shadow-md">
          Save Test
        </button>
        </div>
      </div>
    </div>
  );
}

export default TestSetting;
