import { NavLink } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

export default function TopNavBar(props) {
  return (
    <nav className='nav-bar'>
      <div className='nav-logo'><NavLink to='.'>Architectural Woodworking</NavLink></div>
      <div className='nav-items'>
        <ul>
          <li><NavLink to='.'>Home</NavLink></li>
          <li><NavLink to='services'>Services</NavLink></li>
          <li><NavLink to='gallery'>Gallery</NavLink></li>
          <li><NavLink to='contact'>Contact</NavLink></li>
        </ul>
      </div>
      <div className='nav-icon-open' onClick={props.handleOpenSideNavBar}>
        <MdMenu />
      </div>
    </nav>
  );
}

// this file is good