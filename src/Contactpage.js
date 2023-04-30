import React, { useEffect } from "react";
import './App.css';
import ContactDescription from './Contactdescription';
import HeroContactContent from './Herocontactcontent';
import LogoNavigation from './logo';


function ContactPage() {   //Main Contact page

  useEffect(() => {    // useEffect Hook used and Title of webpage is assigned
    document.title = "Contact Us";
  }, []);

  return (
      <body>

        {/*
   The Contact page is divided into 3 sub components.
   LogoNavigation, HeroContactContent, ContactDescription.
*/}
          <LogoNavigation/>
          <HeroContactContent/>
          <ContactDescription/>
      </body>

  );
}

export default ContactPage;