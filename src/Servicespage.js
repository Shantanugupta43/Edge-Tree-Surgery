import React, { useEffect } from "react";
import './App.css';
import HeroServiceContent from './Heroservicecontent';
import LogoNavigation from './logo';
import ServicesDescription from './Servicesdescription';

function ServicesPage() {   //Main Services page

  useEffect(() => {
    document.title = "Services";    // useEffect Hook used and Title of webpage is assigned
  }, []);

  return (
      <body>
        {/*
   The Services page is divided into 3 sub components.
   LogoNavigation, HeroServiceContent, ServicesDescription.
*/}
          <LogoNavigation/>
          <HeroServiceContent/>
          <ServicesDescription/>
      </body>

  );
}

export default ServicesPage;