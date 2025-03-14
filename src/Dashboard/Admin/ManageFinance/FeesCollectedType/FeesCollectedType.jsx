import React, { useState } from "react";
import FeesCollectTypeCreateUpdate from "./FeesCollectTypeCreateUpdate/FeesCollectTypeCreateUpdate";
import FeesCollectTypeList from "./FeesCollectTypeList/FeesCollectTypeList";

const FeesCollectedType = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [type, setType] = useState("create");
  const [viewID, setViewID] = useState();

  const handleCreateUpdate = (value) => {};

  const handleFeesTypeUpdate = (id) => {
    setViewID(id);
    setType("update");
    setCurrentPage(false);
  };

  return (
    <div>
      {currentPage ? (
        <FeesCollectTypeList
          setCurrentPage={setCurrentPage}
          handleFeesTypeUpdate={handleFeesTypeUpdate}
        />
      ) : (
        <FeesCollectTypeCreateUpdate
          type={type}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default FeesCollectedType;
