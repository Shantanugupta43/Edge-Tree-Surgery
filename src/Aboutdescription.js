import './App.css';
import jack from './images/jack.jpg';
import treemanthree from './images/treemanthree.jpg';
import serviceworker from './images/serviceworker.jpg';
function AboutDescription() {

  return (
<article>
<section className="description-text">
<h1>OUR APPROACH</h1>
<img src={treemanthree} alt="man throwing log" title="man throwing log" className="logimage"/>
<p>With over 25 years experience in Arboriculture, we apply professional approach to all your Tree Surgery needs to rejuvenate your outdoor spaces.</p>
<p>We look forward to improving your outdoor living space. </p>
</section>
<section className="description-text">
<h1>OUR SERVICE</h1>
<img src={serviceworker} alt="man throwing log " title="man throwing log" className="logimage"/>
<p>We offer a free no obligation quote, which also comes with complimentary advisory service, where we will recommend any works we deem necessary,</p>
<p>We can organise planning applications for any trees protected by tree preservation orders. </p>
</section>
<section className="description-text">
<h1>MORE ABOUT EDGE TREE SURGEONS</h1>
<p>Edge Tree Surgeons primary aim is to maintain of health of trees with public safety always in mind.</p>
<p>Managing and sustaining the trees of the future in the North West of England. </p>
</section>
<section className="description-text">
<h1>Jack Lumber</h1>
<h2>Managing Director</h2>
<img src={jack} alt="man throwing log" title="man throwing log" className="directorimage"/>
<p>I have 24 years working in arboriculture services I have a gained a wide set of skills and experience.</p>
<p>Arboriculture Training completed </p>
<ul className="traininglist">
    <li className="bulletlist">CS30 Chainsaw Maintenance and Cross Cutting</li>
    <li className="bulletlist">CS31 Chainsaws – Felling of Small Trees</li>
    <li className="bulletlist">CS38 Climb Trees and Perform Ariel Rescue</li>
    <li className="bulletlist">CS39 Operate a Chain Saw from a Rope and Harness</li>
    <li className="bulletlist">CS41 Undertake Sectional Felling</li>
    <li className="bulletlist">City & Guilds Phase 2 Arboriculture</li>
    <li className="bulletlist">NPTC Level 2 Certificate of Competence in Manually Fed Wood Chipper Operations</li>
    <li className="bulletlist">First Aid Training</li>

    
</ul>
</section>
</article>



  );
}

export default AboutDescription;