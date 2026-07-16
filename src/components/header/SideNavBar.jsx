import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FaHome } from "react-icons/fa";
import { GiHandSaw } from 'react-icons/gi';
import { FaImages } from "react-icons/fa";
import { FaPhoneAlt } from 'react-icons/fa';

export default function SideNavBar(props) {

  let classes = 'side-nav-bar';
  if (props.openSideNavBar) {
    classes = 'side-nav-bar open'
  }

  return (
    <nav className={classes}>
      <div className='nav-icon-close' onClick={props.handleCloseSideNavBar}>
        <MdClose />
      </div>
      <ul>
        <li><FaHome /> <NavLink to='.'>Home</NavLink></li>
        <li><GiHandSaw /> <NavLink to='services'>Services</NavLink></li>
        <li><FaImages  /> <NavLink to='gallery'>Gallery</NavLink></li>
        <li><FaPhoneAlt /> <NavLink to='contact'>Contact</NavLink></li>
      </ul>
    </nav>
  );
}