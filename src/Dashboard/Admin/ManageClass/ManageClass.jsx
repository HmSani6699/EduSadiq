import React, { useState } from "react";
import ClassCreateUpdate from "./ClassCreateUpdate/ClassCreateUpdate";
import ClassListComponent from "./ClassListComponent/ClassListComponent";

const ManageClass = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleCreateUpdate = (value) => {};

  const handleClassNameUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage ? (
        <ClassListComponent
          setCurrentPage={setCurrentPage}
          handleClassNameUpdate={handleClassNameUpdate}
        />
      ) : (
        <ClassCreateUpdate type={type} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default ManageClass;
