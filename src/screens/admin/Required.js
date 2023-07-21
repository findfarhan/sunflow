import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const Required = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1530);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const containerClassName = isDesktop ? 'container' : 'container-fluid';

  let isLogin = localStorage.getItem('isLogin');

  if (!isLogin) {
    navigate('/');
  } else {
    return (
      <>
        <header className="header__color"></header>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>
          <div className={`${containerClassName} side-container`}>
            <Outlet />
          </div>
        </div>
      </>
    );
  }
};
export default Required;
