import { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Navbar.css';
import HireButton from '../Components/HireButton.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="//" className="logo-link">XUI3</NavLink>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
            >
              Services
            </NavLink>
          </li>
        </div>

        <div className="button">
          <HireButton style={{ left: '1040px', top: '10px' }} />
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
}
