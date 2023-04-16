import './App.css';

import logthrow from './images/logthrow.jpg';

function Description() {

  return (
<article>
<section className="description-text">
<h1>Tree Surgeons</h1>
<p>We offer a free no obligation quote. Which also comes with complimentary advisory service. We will recommend any works we deem necessary.</p>
<p>We can organise planning applications for any trees protected by tree preservation orders. </p>
</section>
<section className="logthrow" >
<img src={logthrow} alt="man throwing log " title="man throwing log " className="logimage"/>
</section>
</article>

  );
}

export default Description;