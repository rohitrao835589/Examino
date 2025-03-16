import React from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faHistory } from "@fortawesome/free-solid-svg-icons";
function DashBoard() {
  const navigate = useNavigate();
  function handleNewTestCreate() {
    const testId = nanoid(21);
    navigate(`/test/${testId}/edit`);
  }
  return (
    <div className="min-h-[100dvh]">
      <div className="flex-1 min-h-[15dvh] bg-amber-50 flex justify-center py-4">
        <button type="button" onClick={handleNewTestCreate}>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow">
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="w-6 h-6 text-blue-500"
              size="xl"
            />
            <span className="text-lg font-medium font-serif">
              Create New Test
            </span>
          </div>
        </button>
      </div>
      <div className=" bg-amber-100 min-h-[85dvh]">
        <div className=" ">
          <FontAwesomeIcon icon={faHistory} className="w-6 h-6 text-gray-500" />
          <span className="text-lg font-medium">Previous Tests</span>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
