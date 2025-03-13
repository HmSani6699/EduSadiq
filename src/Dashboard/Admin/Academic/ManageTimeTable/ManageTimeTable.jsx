import React, { useState } from "react";
import TimeTableList from "./TimeTableList/TimeTableList";
import TimeTableCreateUpdate from "./TimeTableCreateUpdate/TimeTableCreateUpdate";

const ManageTimeTable = () => {
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
        <TimeTableList
          setCurrentPage={setCurrentPage}
          handleScheduleUpdateType={handleScheduleUpdateType}
        />
      ) : (
        <TimeTableCreateUpdate setCurrentPage={setCurrentPage} type={type} />
      )}
    </div>
  );
};

export default ManageTimeTable;
