import React, { useState } from "react";
import ClassGroupList from "./ClassGroupList/ClassGroupList";
import ClassGroupCreateUpdate from "./ClassGroupCreateUpdate/ClassGroupCreateUpdate";

const ManageClassGroup = () => {
  const [currentPage, setCurrentPage] = useState("classGroupList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "classGroupUpdate") {
      setCreate(true);
      setCurrentPage("classGroupCreateUpdate");
    }
    if (value == "classGroupCreate") {
      setCurrentPage("classGroupCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "classGroupList" ? (
        <ClassGroupList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "classGroupCreateUpdate" ? (
        <ClassGroupCreateUpdate
          create={create}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default ManageClassGroup;
