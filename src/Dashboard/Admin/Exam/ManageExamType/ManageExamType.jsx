import React, { useState } from "react";
import ExamTypeCreateUpdate from "./ExamTypeCreateUpdate/ExamTypeCreateUpdate";
import ExamTypeList from "./ExamTypeList/ExamTypeList";

const ManageExamType = () => {
  const [currentPage, setCurrentPage] = useState("examTypeList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "examTypeUpdate") {
      setCreate(true);
      setCurrentPage("examTypeCreateUpdate");
    }
    if (value == "examTypeCreate") {
      setCurrentPage("examTypeCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "examTypeList" ? (
        <ExamTypeList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "examTypeCreateUpdate" ? (
        <ExamTypeCreateUpdate create={create} setCurrentPage={setCurrentPage} />
      ) : null}
    </div>
  );
};

export default ManageExamType;
