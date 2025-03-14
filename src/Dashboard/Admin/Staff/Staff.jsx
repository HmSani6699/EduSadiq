import React, { useState } from "react";
import StaffCreateUpdate from "./StaffCreateUpdate/StaffCreateUpdate";
import StaffList from "./StaffList/StaffList";
import StaffProfile from "../../../Component/Profile/StaffProfile/StaffProfile";

const Staff = () => {
  const [currentPage, setCurrentPage] = useState("staffList");
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleCreateUpdate = (value) => {};

  const handleStaffUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage === "staffView" ? (
        <StaffProfile />
      ) : currentPage ? (
        <StaffList
          setCurrentPage={setCurrentPage}
          handleStaffUpdate={handleStaffUpdate}
        />
      ) : (
        <StaffCreateUpdate type={type} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default Staff;
