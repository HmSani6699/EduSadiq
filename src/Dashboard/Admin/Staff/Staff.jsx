import React, { useState } from "react";
import StaffCreateUpdate from "./StaffCreateUpdate/StaffCreateUpdate";
import StaffList from "./StaffList/StaffList";
import StaffProfile from "../../../Component/Profile/StaffProfile/StaffProfile";

const Staff = () => {
  const [currentPage, setCurrentPage] = useState("staffList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "staffUpdate") {
      setCreate(true);
      setCurrentPage("staffCreateUpdate");
    }
    if (value == "staffCreate") {
      setCurrentPage("staffCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "staffList" ? (
        <StaffList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "staffCreateUpdate" ? (
        <StaffCreateUpdate create={create} setCurrentPage={setCurrentPage} />
      ) : currentPage === "staffView" ? (
        <StaffProfile />
      ) : null}
    </div>
  );
};

export default Staff;
