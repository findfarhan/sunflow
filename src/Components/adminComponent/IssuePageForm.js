import React from 'react';

const IssuePageForm = () => {
  return (
    <>
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
                  className="form-select legend-feild  shadow-none"
                >
                  <option value="Semester"></option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div className="col-md-3 mb-3 input-wrapper">
                <label class="form-label label-legend">DC Switch status</label>
                <select
                  type="text"
                  className="form-select legend-feild  shadow-none"
                >
                  <option value="Semester"></option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div className="col-md-3 mb-3 input-wrapper ">
                <label class="form-label label-legend">status</label>

                <select
                  type="text"
                  className="form-select legend-feild  shadow-none"
                >
                  <option value="Semester"></option>
                  <option value="Yearly">Yearly</option>
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
                  type="text"
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
                  type="text"
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
            <label class="form-label label-legend">Select Role</label>
            <select
              type="text"
              className="form-select legend-feild  shadow-none"
            >
              <option value="Semester"></option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div className="col-md-5 mb-3 input-wrapper">
            <label class="form-label label-legend">Select User</label>
            <select
              type="text"
              className="form-select legend-feild  shadow-none"
            >
              <option value="Semester"></option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div className="col-md-2 pt-4">
            <button
              className="save-button"
              style={{
                padding: '0.6rem 3rem',
                marginLeft: '2.5rem',
              }}
            >
              Assign
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default IssuePageForm;
