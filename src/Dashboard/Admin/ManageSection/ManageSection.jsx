import React, { useState } from "react";
import SectionList from "./SectionList/SectionList";
import SectionCreateUpdate from "./SectionCreateUpdate/SectionCreateUpdate";

const ManageSection = () => {
  const [currentPage, setCurrentPage] = useState("sectionList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "sectionUpdate") {
      setCreate(true);
      setCurrentPage("sectionCreateUpdate");
    }
    if (value == "sectionCreate") {
      setCurrentPage("sectionCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "sectionList" ? (
        <SectionList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "sectionCreateUpdate" ? (
        <SectionCreateUpdate create={create} setCurrentPage={setCurrentPage} />
      ) : null}
    </div>
  );
};

export default ManageSection;
