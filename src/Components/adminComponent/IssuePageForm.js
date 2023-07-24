import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IssueTable from './IssueTable';
const IssuePageForm = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState(
    localStorage.getItem('selectedRole') || ''
  );
  const [selectedUser, setSelectedUser] = useState('');
  const [usersAssignedToRole, setUsersAssignedToRole] = useState(
    JSON.parse(localStorage.getItem('usersAssignedToRole')) || []
  );

  const isChecked = localStorage.getItem('isChecked') === 'true';

  const logoutHandle = () => {
    if (!isChecked) {
      localStorage.removeItem('isLogin');
    }
    navigate('/');
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleAssignUser = (e) => {
    e.preventDefault();
    if (selectedUser && selectedRole) {
      const newUser = {
        name: selectedUser,
        email: `${selectedUser}@example.com`, // Example email format
        phone: '123-456-7890', // Example phone format
        role: `${selectedUser}`,
      };

      setUsersAssignedToRole((prevUsers) => [...prevUsers, newUser]);
    }
  };

  const handleSaveData = () => {
    // Save the data to localStorage
    localStorage.setItem('selectedRole', selectedRole);
    localStorage.setItem(
      'usersAssignedToRole',
      JSON.stringify(usersAssignedToRole)
    );
    alert('Changes saved successfully!');
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <button className="logout-button" onClick={logoutHandle}>
          Log Out
        </button>
        <button className="save-button" onClick={handleSaveData}>
          Save Changes
        </button>
      </div>
      <div className="form-change">
        <div className="pb-5 ps-3">
          <h1 className="form-heading">Create an issue</h1>
          <p className="form-para">Last updated on 09.08.2022 04:03AM</p>
        </div>
        <form>
          <div className="row d-flex aling-items-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 mb-3 input-wrapper">
                  <label for="title" class="form-label label-legend">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control legend-feild  shadow-none"
                    id="title"
                  />
                </div>
                <div className="col-md-3 mb-3 input-wrapper">
                  <label class="form-label label-legend">Priority</label>
                  <select
                    type="text"
                    className="form-select legend-feild select-feild  shadow-none"
                  >
                    <option value=""></option>
                    <option value="">High</option>
                    <option value="">Medium</option>
                    <option value="">Low</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3 input-wrapper">
                  <label class="form-label label-legend">
                    DC Switch status
                  </label>
                  <select
                    type="text"
                    className="form-select legend-feild  select-feild shadow-none"
                  >
                    <option value=""></option>
                    <option value="">On</option>
                    <option value="">Off</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3 input-wrapper ">
                  <label class="form-label label-legend">status</label>

                  <select
                    type="text"
                    className="form-select legend-feild select-feild shadow-none"
                  >
                    <option value=""></option>
                    <option value="">Active</option>
                    <option value="">Inactive</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2 mt-4 ps-5">
              <div class="form-check form-switch d-flex align-items-center">
                <input
                  class="form-check-input shadow-none slider round"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
                <label
                  class="form-check-label  switch-button ps-3"
                  for="flexSwitchCheckChecked"
                >
                  Electrical
                </label>
              </div>
            </div>
          </div>
          <div className="row d-flex aling-items-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6 mb-3 input-wrapper">
                  <label for="title" class="form-label label-legend">
                    Description
                  </label>
                  <textarea
                    type="datetime-local"
                    rows={6}
                    class="form-control legend-feild  shadow-none"
                    id="title"
                  />
                </div>
                <div className="col-md-3 mb-3 input-wrapper">
                  <label for="date" class="form-label label-legend">
                    Repaire Date
                  </label>
                  <input
                    type="date"
                    class="form-control legend-feild  shadow-none"
                    id="date"
                  />
                </div>
                <div className="col-md-3 mb-3 input-wrapper ">
                  <label for="time" class="form-label label-legend">
                    Time Estimate Hours
                  </label>
                  <input
                    type="number"
                    class="form-control legend-feild  shadow-none"
                    id="time"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 mt-4 ps-5">
              <div class="form-check form-switch d-flex align-items-center">
                <input
                  class="form-check-input shadow-none slider round"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked "
                />
                <label
                  class="form-check-label  switch-button ps-3"
                  for="flexSwitchCheckChecked"
                >
                  Hub
                </label>
              </div>
            </div>
          </div>

          <div className="row pt-2 d-flex ">
            <h1 className="form-heading ps-4 pb-4">Issue Contact</h1>

            <div className="col-md-5 mb-3 input-wrapper">
              <label className="form-label label-legend">Select Role</label>
              <select
                value={selectedRole}
                onChange={handleRoleChange}
                className="form-select legend-feild select-feild shadow-none"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Standard User">Standard User</option>
              </select>
            </div>
            <div className="col-md-5 mb-3 input-wrapper">
              <label className="form-label label-legend">Select User</label>
              <select
                value={selectedUser}
                onChange={handleUserChange}
                className="form-select legend-feild select-feild shadow-none"
              >
                <option value="">Select User</option>
                <option value="John">John</option>
                <option value="Jacob">Jacob</option>
                <option value="Jennifer">Jennifer</option>
              </select>
            </div>
            <div className="col-md-2 pt-4">
              <button
                className="save-button"
                style={{
                  padding: '0.6rem 3rem',
                  marginLeft: '2.5rem',
                }}
                onClick={handleAssignUser}
              >
                Assign
              </button>
            </div>
          </div>
        </form>
        <div>
          <IssueTable
            usersAssignedToRole={usersAssignedToRole}
            setUsersAssignedToRole={setUsersAssignedToRole}
          />
        </div>
      </div>
    </>
  );
};

export default IssuePageForm;
