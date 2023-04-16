
import './App.css';
import Button from './button.js';
import { NavLink } from 'react-router-dom';

function HeroContent() {


  return (
<main>
<section className="layout">
<h1>Edge Tree Surgery</h1>
<p>Edge Tree Surgery are some of the most highly skilled and reliable tree surgeons around.</p>
<p>With over 25 years experience in Tree Services, each one of our clients knows there are in safe hands.
with our trusted company. </p>

<NavLink exact to="/services"><Button label="Check out our Services"/></NavLink>
<NavLink exact to="/contact"><Button label="Contact Us"/></NavLink>

</section>
<div className="treemanimage" />
</main>

  );
}

export default HeroContent;
