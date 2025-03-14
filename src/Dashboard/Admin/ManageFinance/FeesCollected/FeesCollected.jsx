import React, { useState } from "react";
import FeesCollectCreateUpdate from "./FeesCollectCreateUpdate/FeesCollectCreateUpdate";
import FeesCollectList from "./FeesCollectList/FeesCollectList";

const FeesCollected = () => {
  const [currentPage, setCurrentPage] = useState(true);

  const handleCreateUpdate = (value) => {};

  return (
    <div>
      {currentPage ? (
        <FeesCollectList setCurrentPage={setCurrentPage} />
      ) : (
        <FeesCollectCreateUpdate type={type} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default FeesCollected;
