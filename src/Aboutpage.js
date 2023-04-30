import React, { useEffect } from "react";
import AboutDescription from './Aboutdescription';
import './App.css';
import HeroAboutContent from './Heroaboutcontent';
import LogoNavigation from './logo';

function Aboutpage() {  // Main About page 

  useEffect(() => {
    document.title = "About Us";  // useEffect Hook used and Title of webpage is assigned
  }, []);


  return (
      <body>
{/*
   The About page is divided into 3 sub components.
   LogoNavigation, HeroAboutContent, AboutDescription.
*/}
          <LogoNavigation/>
          <HeroAboutContent/>
          <AboutDescription/>
      </body>




  );
}

export default Aboutpage;