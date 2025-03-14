import React, { useState } from "react";
import SubjectList from "./SubjectList/SubjectList";
import SubjectCreateUpdate from "./SubjectCreateUpdate/SubjectCreateUpdate";

const ManageSubject = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleCreateUpdate = (value) => {};

  const handleSubjectUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage ? (
        <SubjectList
          setCurrentPage={setCurrentPage}
          handleSubjectUpdate={handleSubjectUpdate}
        />
      ) : (
        <SubjectCreateUpdate type={type} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default ManageSubject;
