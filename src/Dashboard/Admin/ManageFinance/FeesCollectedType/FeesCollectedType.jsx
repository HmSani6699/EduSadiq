import React, { useState } from "react";
import FeesCollectTypeCreateUpdate from "./FeesCollectTypeCreateUpdate/FeesCollectTypeCreateUpdate";
import FeesCollectTypeList from "./FeesCollectTypeList/FeesCollectTypeList";

const FeesCollectedType = () => {
  const [currentPage, setCurrentPage] = useState("feesCollectTypeList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "feesCollectTypeUpdate") {
      setCreate(true);
      setCurrentPage("feesCollectTypeCreateUpdate");
    }
    if (value == "feesCollectTypeCreate") {
      setCurrentPage("feesCollectTypeCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "feesCollectTypeList" ? (
        <FeesCollectTypeList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "feesCollectTypeCreateUpdate" ? (
        <FeesCollectTypeCreateUpdate
          create={create}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default FeesCollectedType;
