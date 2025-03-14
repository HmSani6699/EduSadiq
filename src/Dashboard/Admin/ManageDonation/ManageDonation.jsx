import React, { useState } from "react";
import ManageDonationList from "./ManageDonationList/ManageDonationList";
import ManageDonationCreateUpdate from "./ManageDonationCreateUpdate/ManageDonationCreateUpdate";

const ManageDonation = () => {
  const [currentPage, setCurrentPage] = useState(true);

  const handleCreateUpdate = (value) => {};

  return (
    <div>
      {currentPage ? (
        <ManageDonationList setCurrentPage={setCurrentPage} />
      ) : (
        <ManageDonationCreateUpdate setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default ManageDonation;
