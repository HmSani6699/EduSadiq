import React, { useState } from "react";
import ClassRoomList from "./ClassRoomList/ClassRoomList";
import ClassRoomCreateUpdate from "./ClassRoomCreateUpdate/ClassRoomCreateUpdate";

const ManageClassRoom = () => {
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
        <ClassRoomList
          setCurrentPage={setCurrentPage}
          handleScheduleUpdateType={handleScheduleUpdateType}
        />
      ) : (
        <ClassRoomCreateUpdate setCurrentPage={setCurrentPage} type={type} />
      )}
    </div>
  );
};

export default ManageClassRoom;
