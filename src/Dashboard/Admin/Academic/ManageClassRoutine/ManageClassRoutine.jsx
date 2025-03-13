import React, { useState } from "react";
import ClassRoutineList from "./ClassRoutineList/ClassRoutineList";
import ClassRoutineCreateUpdate from "./ClassRoutineCreateUpdate/ClassRoutineCreateUpdate";

const ManageClassRoutine = () => {
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
      {currentPage ? (
        <ClassRoutineList
          setCurrentPage={setCurrentPage}
          handleScheduleUpdateType={handleScheduleUpdateType}
        />
      ) : (
        <ClassRoutineCreateUpdate setCurrentPage={setCurrentPage} type={type} />
      )}
    </div>
  );
};

export default ManageClassRoutine;
