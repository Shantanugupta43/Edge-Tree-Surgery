import './App.css';
import Descriptiontwo from './Descriptiontwo';
import Footer from './Footer';
import HeroContent from './HeroContent';
import stormdamagetree from './images/stormdamagetree.jpg';
import stormdamage from './images/stormdamage.jpg';
import logthrow from './images/logthrow.jpg';
import treefelling from './images/treefelling.jpg';
import serviceworker from './images/serviceworker.jpg';
import pollarding from './images/pollarding.jpg';
import deadwooding from './images/deadwooding.jpg';
import treereduction from './images/treereduction.jpg';
import treemantwo from './images/treemantwo.jpg';



function ServicesDescription() {

  return (
<div className='wrapper'>
<main className="servicecontainer">
<section className="description-text">
<h1>STORM DAMAGE</h1>
<img src={stormdamage} alt="tree destroyed by storm" title="tree destroyed by storm" className="stormdamagetree"/>
<p className="fontsmall">24 Hour‏ Emergency Call Out – CALL 01234 567 890.</p>
</section>
<section className="description-text">
<h1>TREE PRUNING</h1>
<img src={logthrow} alt="tree pruning" title="tree pruning" className="stormdamagetree"/>
<p className="fontsmall">Ensure optimum tree health</p>
</section>
<section className="description-text">
<h1>TREE FELLING</h1>
<img src={treefelling} alt="treefelling" title="treefelling" className="stormdamagetree"/>
<p className="fontsmall">Removal of the whole tree to ground level.</p>
</section>
</main>

<main className="servicecontainer">
<section className="description-text">
<h1>CROWN THINNING</h1>
<img src={stormdamagetree} alt="tree destroyed by storm" title="tree destroyed by storm" className="stormdamagetree"/>
<p className="fontsmall">Selective removal of complete branches back to the main stem to reduce density of foliage.</p>
</section>
<section className="description-text">
<h1>STUMP GRINDING</h1>
<img src={serviceworker} alt="stump grinding" title="stump grinding" className="stormdamagetree"/>
<p className="fontsmall">Removal of tree stump below ground level.</p>
</section>
<section className="description-text">
<h1>POLLARDING</h1>
<img src={pollarding} alt="tree pollarding" title="tree pollarding" className="stormdamagetree"/>
<p className="fontsmall">The removal of 100% of the crowns foliage back to new or old pollard points.</p>
</section>
</main>

<main className="servicecontainer">
<section className="description-text">
<h1>TREE REDUCTION</h1>
<img src={treereduction} alt="tree destroyed by storm" title="tree destroyed by storm" className="stormdamagetree"/>
<p className="fontsmall">Overall crown reduction / shaping, makes the overall size, height and spread small while giving the tree a pleasant shape.</p>
</section>
<section className="description-text">
<h1>DEADWOODING</h1>
<img src={deadwooding} alt="tree destroyed by storm" title="tree destroyed by storm" className="stormdamagetree"/>
<p className="fontsmall">Removal of deadwood and crown cleaning.</p>
</section>
<section className="description-text">
<h1>CHEMICAL TREATMENT</h1>
<img src={treemantwo} alt="tree destroyed by storm" title="tree destroyed by storm" className="stormdamagetree"/>
<p className="fontsmall">Application of chemicals for pest and disease control for tress and poisoning unwanted tree stumps.</p>
</section>

</main>

<section className="description-text">
<h1>NEXT STEPS…</h1>
<p>We offer a free no obligation quote, which also comes with complimentary advisory service, where we will recommend any works we deem necessary.</p>
</section>
</div>



  );
}

export default ServicesDescription;