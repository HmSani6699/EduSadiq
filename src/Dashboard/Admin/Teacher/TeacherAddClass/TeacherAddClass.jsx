import React, { useState } from "react";
import AddClassList from "./AddClassList/AddClassList";
import AddClassCreateUpdate from "./AddClassCreateUpdate/AddClassCreateUpdate";
import TeacherProfile from "../../../../Component/Profile/TeacherProfile/TeacherProfile";

const TeacherAddClass = () => {
  const [currentPage, setCurrentPage] = useState("addClassList");
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleCreateUpdate = (value) => {};

  const handleAddClassUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage === "teacherView" ? (
        <TeacherProfile />
      ) : currentPage ? (
        <AddClassList
          setCurrentPage={setCurrentPage}
          handleAddClassUpdate={handleAddClassUpdate}
        />
      ) : (
        <AddClassCreateUpdate type={type} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default TeacherAddClass;
