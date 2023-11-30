import Amhara_Logo from './images/Amhara_Logo.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <img alt="" src={Amhara_Logo} />
        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/Form">Login</Link>
          <Link to="/MultiStep">Open Account</Link>
          <Link to="/About">About</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
