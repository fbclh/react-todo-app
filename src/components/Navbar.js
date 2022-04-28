import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleClose = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ width: '35px', height: '25px' }} />
        ) : (
          <FiMenu style={{ width: '35px', height: '25px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                onClick={handleClose}
                to={link.path}
                active="active-link"
                exact="true"
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
