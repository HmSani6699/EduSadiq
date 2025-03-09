import React, { useState } from "react";
import FeesCollectTypeList from "../FeesCollectedType/FeesCollectTypeList/FeesCollectTypeList";
import FeesCollectCreateUpdate from "./FeesCollectCreateUpdate/FeesCollectCreateUpdate";
import FeesCollectList from "./FeesCollectList/FeesCollectList";

const FeesCollected = () => {
  const [currentPage, setCurrentPage] = useState("feesCollectList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "feesCollectUpdate") {
      setCreate(true);
      setCurrentPage("feesCollectCreateUpdate");
    }
    if (value == "feesCollectCreate") {
      setCurrentPage("feesCollectCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "feesCollectList" ? (
        <FeesCollectList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "feesCollectCreateUpdate" ? (
        <FeesCollectCreateUpdate
          create={create}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default FeesCollected;
