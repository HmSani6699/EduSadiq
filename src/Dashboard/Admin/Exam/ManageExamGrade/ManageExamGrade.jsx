import React, { useState } from "react";
import ExamGradeList from "./ExamGradeList/ExamGradeList";
import ExamGradeCreateUpdate from "./ExamGradeCreateUpdate/ExamGradeCreateUpdate";

const ManageExamGrade = () => {
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
        <ExamGradeList
          setCurrentPage={setCurrentPage}
          handleScheduleUpdateType={handleScheduleUpdateType}
        />
      ) : (
        <ExamGradeCreateUpdate setCurrentPage={setCurrentPage} type={type} />
      )}
    </div>
  );
};

export default ManageExamGrade;
