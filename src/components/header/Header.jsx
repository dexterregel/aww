import { useState, useEffect } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import TopNavBar from './TopNavBar.jsx';
import SideNavBar from './SideNavBar.jsx';
import Backdrop from './Backdrop.jsx';
import './header.css';

export default function Header() {
  // states
  const [openSideNavBar, setOpenSideNavBar] = useState(false);

  const location = useLocation();

  // this closes the side nav bar if the path changed because a link was clicked
  useEffect(() => {
    handleCloseSideNavBar();
  }, [location.pathname]);

  function handleOpenSideNavBar() {
    setOpenSideNavBar(true);
  }

  function handleCloseSideNavBar() {
    setOpenSideNavBar(false);
  }

  return (
    <header>
      <TopNavBar handleOpenSideNavBar={handleOpenSideNavBar} />
      {openSideNavBar ?
        <Backdrop handleCloseSideNavBar={handleCloseSideNavBar} /> :
        null}
      {openSideNavBar === true && <SideNavBar handleCloseSideNavBar={handleCloseSideNavBar} isOpen={openSideNavBar} />}
    </header>
  );
}