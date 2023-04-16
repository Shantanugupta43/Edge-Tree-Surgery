import logo from './images/edgetreelogo.PNG';
import './App.css';
import { NavLink } from 'react-router-dom';

function LogoNavigation() {
  return (

    
    <header>
    <img src={logo} alt="logo" title="logo" className="logo" />
    <nav>
        <ul>
        <NavLink to ="/"> <li>Home</li></NavLink>
        <NavLink to ="/about"><li>About Us</li></NavLink>
        <NavLink to ="/services"><li>Services</li></NavLink>
        <NavLink to ="/contact"><li>Contact Us</li></NavLink>
        </ul>
    </nav>

    

    </header>

    
  );
}

export default LogoNavigation;