import React, { useEffect } from "react";
import './App.css';
import Description from './Description';
import Descriptiontwo from './Descriptiontwo';
import HeroContent from './HeroContent';
import LogoNavigation from './logo';

//Main Homepage

function Homepage() {
  useEffect(() => {
    document.title = "Home";  // useEffect Hook used and Title of webpage is assigned
  }, []);

  return (
      <body>

{/*
   The Homepage is divided into 4 sub components.
   LogoNavigation, HeroContent, Description, Descriptiontwo.
*/}
          <LogoNavigation/>
          <HeroContent/>
          <Description/>
          <Descriptiontwo/>
      </body>




  );
}

export default Homepage;