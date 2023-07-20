import { NavLink, Link } from 'react-router-dom';
const SideMenu = () => {
  return (
    <>
      <div>Sidebar</div>
    </>
    // <div className="sidebar">
    //   <div className="dropdown">
    //     <button className="btn btn-primary dropdown-toggle" type="button">
    //       Toggle Menu
    //     </button>
    //     <div
    //       className="dropdown-menu menu-item"
    //       aria-labelledby="dropdownMenuButton"
    //     >
    //       <Link to="/">
    //         {' '}
    //         <SideItems
    //           icon={<i className="fas fa-home"></i>}
    //           description="Home"
    //         />
    //       </Link>

    //       <SideItems
    //         icon={<i className="fas fa-users"></i>}
    //         description="Users"
    //       />
    //       <SideItems
    //         icon={<i className="fas fa-cog"></i>}
    //         description="Settings"
    //       />
    //       {/* Add more menu items here */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default SideMenu;
