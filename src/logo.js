import logo from './images/edgetreelogo.PNG';
import './App.css';
import { NavLink } from 'react-router-dom';

function LogoNavigation() {
  return (
   // Contains logo and main nav
    
    <header>
    <img src={logo} alt="logo" title="logo" className="logo" />   
    <nav>
        <ul>
        <NavLink to ="/"> <li>Home</li></NavLink>      {/* Navlinks works as anchor links in react which routes to Home page */}
        <NavLink to ="/about"><li>About Us</li></NavLink>   {/* Navlinks works as anchor links in react which routes to /about page */}
        <NavLink to ="/services"><li>Services</li></NavLink>    {/* Navlinks works as anchor links in react which routes to /services page */}
        <NavLink to ="/contact"><li>Contact Us</li></NavLink>    {/* Navlinks works as anchor links in react which routes to /contact page */}
        </ul>
    </nav>

    

    </header>

    
  );
}

export default LogoNavigation;