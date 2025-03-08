import React, { useState } from "react";
import AddClassList from "./AddClassList/AddClassList";
import AddClassCreateUpdate from "./AddClassCreateUpdate/AddClassCreateUpdate";
import TeacherProfile from "../../../../Component/Profile/TeacherProfile/TeacherProfile";

const TeacherAddClass = () => {
  const [currentPage, setCurrentPage] = useState("addClassList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "addClassUpdate") {
      setCreate(true);
      setCurrentPage("addClassCreateUpdate");
    }
    if (value == "addClassCreate") {
      setCurrentPage("addClassCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "addClassList" ? (
        <AddClassList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "addClassCreateUpdate" ? (
        <AddClassCreateUpdate create={create} setCurrentPage={setCurrentPage} />
      ) : currentPage === "teacherView" ? (
        <TeacherProfile />
      ) : null}
    </div>
  );
};

export default TeacherAddClass;
