import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";

import StudentAdmissionList from "./StudentAdmissionList";
import StudentCreateUpdate from "./StudentCreateUpdate";

const StudentAdmission = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("studentList");

  return (
    <div>
      {currentPage === "studentList" ? (
        <StudentAdmissionList setCurrentPage={setCurrentPage} />
      ) : currentPage === "studentCreateUpdate" ? (
        <StudentCreateUpdate />
      ) : (
        ""
      )}
    </div>
  );
};

export default StudentAdmission;
