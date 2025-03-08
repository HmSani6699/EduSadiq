import React, { useState } from "react";
import SubjectList from "./SubjectList/SubjectList";
import SubjectCreateUpdate from "./SubjectCreateUpdate/SubjectCreateUpdate";

const ManageSubject = () => {
  const [currentPage, setCurrentPage] = useState("subjectList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "subjectUpdate") {
      setCreate(true);
      setCurrentPage("subjectCreateUpdate");
    }
    if (value == "subjectCreate") {
      setCurrentPage("subjectCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "subjectList" ? (
        <SubjectList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "subjectCreateUpdate" ? (
        <SubjectCreateUpdate create={create} setCurrentPage={setCurrentPage} />
      ) : null}
    </div>
  );
};

export default ManageSubject;
