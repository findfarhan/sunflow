import React from 'react';
import IssuePageForm from '../../Components/adminComponent/IssuePageForm';
import IssueTable from '../../Components/adminComponent/IssueTable';

const IssuePage = () => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-end">
          <button className="logout-button">Log Out</button>
          <button className="save-button">Save Changes</button>
        </div>
        <div className="form-change">
          <div className="pb-5 ps-3">
            <h1 className="form-heading">Create an issue</h1>
            <p className="form-para">Last updated on 09.08.2022 04:03AM</p>
          </div>
          <IssuePageForm />
          <hr className="mx-3" />
          <div className="mx-3">
            <IssueTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default IssuePage;
