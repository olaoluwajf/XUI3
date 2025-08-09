import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import HireButton from '../Components/HireButton.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">XUI3</div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/about" className="link">About Us</Link></li>
          <li><Link to="/services" className='link'>Services</Link></li>
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
