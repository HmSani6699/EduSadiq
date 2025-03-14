import React, { useState } from "react";
import ClassGroupList from "./ClassGroupList/ClassGroupList";
import ClassGroupCreateUpdate from "./ClassGroupCreateUpdate/ClassGroupCreateUpdate";

const ManageClassGroup = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleCreateUpdate = (value) => {};

  const handleClassGroupUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage ? (
        <ClassGroupList
          setCurrentPage={setCurrentPage}
          handleClassGroupUpdate={handleClassGroupUpdate}
        />
      ) : (
        <ClassGroupCreateUpdate type={type} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default ManageClassGroup;
