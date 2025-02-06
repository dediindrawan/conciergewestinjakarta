import { Link, NavLink } from 'react-router-dom';
import { MailIcon, Menu, PhoneIcon, X } from 'lucide-react';

import logo from '../../assets/the-westin-logo.png';
import dataNavlinks from '../../data/navlinks.json';
import dataCompanyProfiles from '../../data/company-profiles.json';
import { Button } from '../Button';
import { UseButtonMenu } from '../../hooks/UseMenuButton';

export const Navbar = () => {
  const { menuActive, buttonMenuClick, buttonMenuRef } = UseButtonMenu();

  return (
    <nav className="navbar">
      <Link to={'/'} className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <Button ref={buttonMenuRef} onClick={buttonMenuClick}>
        {!menuActive ? <Menu size={32} /> : <X size={32} />}
      </Button>

      <div className={`menu-wrapper ${menuActive ? 'menu-wrapper-active' : ''}`}>
        <ul className="menu-item">
          {dataNavlinks.map((navlink) => (
            <li key={navlink.id}>
              <NavLink to={navlink.path} className={({ isActive, isPending }) => (isActive ? 'menu-active' : isPending ? 'pending' : '')}>
                {navlink.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="menu-contact">
          <h3>Get in Touch:</h3>

          <li>
            <Link to={`tel:${dataCompanyProfiles.phone}`} target="_blank" rel="noopener noreferrer">
              <PhoneIcon size={16} />
              {dataCompanyProfiles.phone}
            </Link>
          </li>
          <li>
            <Link to={`mailto:${dataCompanyProfiles.email}`} target="_blank" rel="noopener noreferrer">
              <MailIcon size={16} />
              {dataCompanyProfiles.email}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
