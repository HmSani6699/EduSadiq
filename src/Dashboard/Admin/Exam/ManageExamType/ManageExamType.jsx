import React, { useState } from "react";
import ExamTypeCreateUpdate from "./ExamTypeCreateUpdate/ExamTypeCreateUpdate";
import ExamTypeList from "./ExamTypeList/ExamTypeList";

const ManageExamType = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleCreateUpdate = (value) => {};

  const handleExamTypeUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage ? (
        <ExamTypeList
          setCurrentPage={setCurrentPage}
          handleExamTypeUpdate={handleExamTypeUpdate}
        />
      ) : (
        <ExamTypeCreateUpdate type={type} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default ManageExamType;
