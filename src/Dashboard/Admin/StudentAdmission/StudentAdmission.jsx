import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";

import StudentAdmissionList from "./StudentAdmissionList";
import StudentCreateUpdate from "./StudentCreateUpdate";
import StudentProfile from "../../../Component/Profile/StudentProfile/StudentProfile";

const StudentAdmission = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("studentList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "studentUpdate") {
      setCreate(true);
      setCurrentPage("studentCreateUpdate");
    }
    if (value == "studentCreate") {
      setCurrentPage("studentCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "studentList" ? (
        <StudentAdmissionList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "studentCreateUpdate" ? (
        <StudentCreateUpdate create={create} />
      ) : currentPage === "studentView" ? (
        <StudentProfile />
      ) : (
        ""("")
      )}
    </div>
  );
};

export default StudentAdmission;
