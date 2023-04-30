//Imports added

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutpage from './Aboutpage';
import ContactPage from './Contactpage';
import Homepage from './Homepage';
import ServicesPage from './Servicespage';

function Routing() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />    {/* Routes path and element assigned it loads Homepage */}
          <Route exact path="/about" element={<Aboutpage />} />                    {/* Routes path and element assigned it loads Aboutpage */}
          <Route exact path="/services" element={<ServicesPage />} />        {/* Routes path and element assigned it loads ServicesPage */}
          <Route exact path="/contact" element={<ContactPage />} />   {/* Routes path and element assigned it loads  ContactPage */}

          
        </Routes>
    </Router>
  );
}

export default Routing;

