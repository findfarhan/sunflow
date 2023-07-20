import { Outlet, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import SideMenu from './SideMenu';
const Required = () => {
  const [isDesktop, setIsDesktop] = useState(false);

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
  return (
    <>
      <div>
        <header className="header__color"></header>
        <div className={`${containerClassName} side-container`}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Required;
