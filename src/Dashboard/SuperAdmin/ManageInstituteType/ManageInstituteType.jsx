import React, { useState } from "react";
import InstituteTypeList from "./InstituteTypeList/InstituteTypeList";
import InstituteTypeCreateUpdate from "./InstituteTypeCreateUpdate/InstituteTypeCreateUpdate";

const ManageInstituteType = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleCreateUpdate = (value) => {};

  const handleTypeUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage ? (
        <InstituteTypeList
          setCurrentPage={setCurrentPage}
          handleTypeUpdate={handleTypeUpdate}
        />
      ) : (
        <InstituteTypeCreateUpdate
          type={type}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ManageInstituteType;
