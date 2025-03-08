import React, { useState } from "react";
import ClassCreateUpdate from "./ClassCreateUpdate/ClassCreateUpdate";
import ClassListComponent from "./ClassListComponent/ClassListComponent";

const ManageClass = () => {
  const [currentPage, setCurrentPage] = useState("classList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "classUpdate") {
      setCreate(true);
      setCurrentPage("classCreateUpdate");
    }
    if (value == "classCreate") {
      setCurrentPage("classCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "classList" ? (
        <ClassListComponent
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "classCreateUpdate" ? (
        <ClassCreateUpdate create={create} setCurrentPage={setCurrentPage} />
      ) : null}
    </div>
  );
};

export default ManageClass;
