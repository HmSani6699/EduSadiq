import React, { useState } from "react";
import ManageInstituteList from "./ManageInstituteList/ManageInstituteList";
import ManageInstituteCreateUpdate from "./ManageInstituteCreateUpdate/ManageInstituteCreateUpdate";

const ManageInstitute = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleCreateUpdate = (value) => {};

  const handleUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage ? (
        <ManageInstituteList
          setCurrentPage={setCurrentPage}
          handleUpdate={handleUpdate}
        />
      ) : (
        <ManageInstituteCreateUpdate
          type={type}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ManageInstitute;
