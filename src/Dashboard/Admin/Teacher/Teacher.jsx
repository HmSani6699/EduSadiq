import React, { useState } from "react";
import TeacherList from "./TeacherList";
import TeacherCreateUpdate from "./TeacherCreateUpdate";
import TeacherProfile from "../../../Component/Profile/TeacherProfile/TeacherProfile";

const Teacher = () => {
  const [currentPage, setCurrentPage] = useState("teacherList");
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleCreateUpdate = (value) => {};

  const handleTeacherUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage === "teacherView" ? (
        <TeacherProfile />
      ) : currentPage ? (
        <TeacherList
          setCurrentPage={setCurrentPage}
          handleTeacherUpdate={handleTeacherUpdate}
        />
      ) : (
        <TeacherCreateUpdate type={type} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default Teacher;
