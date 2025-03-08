import React, { useState } from "react";
import TeacherList from "./TeacherList";
import TeacherCreateUpdate from "./TeacherCreateUpdate";
import TeacherProfile from "../../../Component/Profile/TeacherProfile/TeacherProfile";

const Teacher = () => {
  const [currentPage, setCurrentPage] = useState("teacherList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "teacherUpdate") {
      setCreate(true);
      setCurrentPage("teacherCreateUpdate");
    }
    if (value == "teacherCreate") {
      setCurrentPage("teacherCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "teacherList" ? (
        <TeacherList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "teacherCreateUpdate" ? (
        <TeacherCreateUpdate create={create} setCurrentPage={setCurrentPage} />
      ) : currentPage === "teacherView" ? (
        <TeacherProfile />
      ) : null}
    </div>
  );
};

export default Teacher;
