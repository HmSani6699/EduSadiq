import React, { useState } from "react";
import ManageDonationList from "./ManageDonationList/ManageDonationList";
import ManageDonationCreateUpdate from "./ManageDonationCreateUpdate/ManageDonationCreateUpdate";

const ManageDonation = () => {
  const [currentPage, setCurrentPage] = useState("donationList");
  const [create, setCreate] = useState(false);

  const handleCreateUpdate = (value) => {
    if (value == "donationUpdate") {
      setCreate(true);
      setCurrentPage("donationCreateUpdate");
    }
    if (value == "donationCreate") {
      setCurrentPage("donationCreateUpdate");
    }
  };

  return (
    <div>
      {currentPage === "donationList" ? (
        <ManageDonationList
          setCurrentPage={setCurrentPage}
          handleCreateUpdate={handleCreateUpdate}
        />
      ) : currentPage === "donationCreateUpdate" ? (
        <ManageDonationCreateUpdate
          create={create}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default ManageDonation;
