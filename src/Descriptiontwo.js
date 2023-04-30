import './App.css';
import treemantwo from './images/treemantwo.jpg';

function Descriptiontwo() {

   //The main content inside Home Page for stating Where the services are provided

  return (
<article>
<div className="knowhowcontainer">
<section className="description-text">
<p className="knowhow">We perform tree removal, felling, pruning, lopping services in the Ormskirk, Burscough, Rufford, Southport, Aughton, Skelmersdale areas.</p>
</section>
</div>
<section >
<img src={treemantwo} alt="worker on tree" title="man throwing log image" className="workerontree"/>
</section>
</article>

  );
}

export default Descriptiontwo;