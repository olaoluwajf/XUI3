import './Navbar.css';
import HireButton from '../Components/HireButton.jsx'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">XUI3</div>
        <ul className="nav-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>    </ul><HireButton style={{ left: '1020px' }} />
      </div>
    </nav>
  );
}

