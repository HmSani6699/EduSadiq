import React, { useState } from "react";
import TeacherList from "./TeacherList";
import TeacherCreateUpdate from "./TeacherCreateUpdate";
import TeacherProfile from "../../../Component/Profile/TeacherProfile/TeacherProfile";

const Teacher = () => {
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
        <TeacherList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "studentCreateUpdate" ? (
        <TeacherCreateUpdate create={create} />
      ) : currentPage === "studentView" ? (
        <TeacherProfile />
      ) : null}
    </div>
  );
};

export default Teacher;
