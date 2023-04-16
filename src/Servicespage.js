import './App.css';

import HeroServiceContent from './Heroservicecontent';
import LogoNavigation from './logo';
import ServicesDescription from './Servicesdescription';

function ServicesPage() {

  return (
      <body>
          <LogoNavigation/>
          <HeroServiceContent/>
          <ServicesDescription/>
      </body>

  );
}

export default ServicesPage;