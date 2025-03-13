import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";

import StudentAdmissionList from "./StudentAdmissionList";
import StudentCreateUpdate from "./StudentCreateUpdate";
import StudentProfile from "../../../Component/Profile/StudentProfile/StudentProfile";

const Student = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [type, setType] = useState("create");
  const [vewiID, setViewID] = useState();

  const handleScheduleCreateUpdate = (type) => {};

  const handleScheduleUpdateType = (id) => {
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
          handleScheduleUpdateType={handleScheduleUpdateType}
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
