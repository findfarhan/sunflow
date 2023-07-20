import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './screens/Login';
import IssuePage from './screens/admin/IssuePage';
import Required from './screens/admin/Required';
const App = () => {
  return (
    <>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<IssuePage />} />
        </Routes>
        <Routes>
          <Route path="admin" element={<Required />}>
            <Route path="" element={<Navigate replace to="issuePage" />} />
            <Route path="issuePage" element={<IssuePage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
