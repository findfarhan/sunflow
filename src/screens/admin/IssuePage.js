import React, { useEffect } from 'react';
import IssuePageForm from '../../Components/adminComponent/IssuePageForm';
import IssueTable from '../../Components/adminComponent/IssueTable';
import { useNavigate } from 'react-router-dom';

const IssuePage = () => {
  let navigate = useNavigate();
  const logoutHandle = () => {
    localStorage.removeItem('isLogin');
    navigate('/');
  };
  let isChecked = localStorage.getItem('isChecked');

  useEffect(() => {
    const interval = setInterval(() => {
      if (isChecked === 'false') {
        localStorage.removeItem('isLogin');
        navigate('/');
      }
    }, 60000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isChecked, navigate]);

  return (
    <>
      <div>
        <div className="d-flex justify-content-end">
          <button className="logout-button" onClick={logoutHandle}>
            Log Out
          </button>
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
