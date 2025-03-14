import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";

import StudentAdmissionList from "./StudentAdmissionList";
import StudentCreateUpdate from "./StudentCreateUpdate";
import StudentProfile from "../../../Component/Profile/StudentProfile/StudentProfile";

const Student = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleScheduleCreateUpdate = (type) => {};

  const handleStudentUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage === "studentView" ? (
        <StudentProfile />
      ) : currentPage ? (
        <StudentAdmissionList
          setCurrentPage={setCurrentPage}
          handleStudentUpdate={handleStudentUpdate}
        />
      ) : (
        <StudentCreateUpdate setCurrentPage={setCurrentPage} type={type} />
      )}
    </div>
  );
};

export default Student;
//  ) currentPage === "studentView" ? (
//         <StudentProfile />
//       ) : null}
