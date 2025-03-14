import React, { useState } from "react";
import SectionList from "./SectionList/SectionList";
import SectionCreateUpdate from "./SectionCreateUpdate/SectionCreateUpdate";

const ManageSection = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleCreateUpdate = (value) => {};

  const handleSectionUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage ? (
        <SectionList
          setCurrentPage={setCurrentPage}
          handleSectionUpdate={handleSectionUpdate}
        />
      ) : (
        <SectionCreateUpdate type={type} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default ManageSection;
