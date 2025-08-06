import { useState } from 'react';
import './Navbar.css';
import HireButton from '../Components/HireButton.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">XUI3</div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
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
