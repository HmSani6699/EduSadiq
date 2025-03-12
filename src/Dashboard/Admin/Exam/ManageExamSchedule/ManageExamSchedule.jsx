import React, { useState } from "react";
import ExamScheduleList from "./ExamScheduleList/ExamScheduleList";
import ExamScheduleCreateUpdate from "./ExamScheduleCreateUpdate/ExamScheduleCreateUpdate";

const ManageExamSchedule = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [type, setType] = useState("create");
  const [vewiID, setViewID] = useState();

  const handleScheduleCreateUpdate = (type) => {};

  const handleScheduleUpdateType = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage ? (
        <ExamScheduleList
          setCurrentPage={setCurrentPage}
          handleScheduleUpdateType={handleScheduleUpdateType}
        />
      ) : (
        <ExamScheduleCreateUpdate setCurrentPage={setCurrentPage} type={type} />
      )}
    </div>
  );
};

export default ManageExamSchedule;
