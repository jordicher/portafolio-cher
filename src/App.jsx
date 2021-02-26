import React, { Fragment } from "react";
import Menu from './components/layouts/Menu';
import Footer from './components/layouts/Footer';
import 'react-toastify/dist/ReactToastify.css';

import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Welcome from './components/Welcome'


function App() {
  return (
    <Fragment>

      <Menu />
    <div className="space-y-10">
        <Welcome/>
        <AboutMe />
        <Projects />
  
        <Contact />
    </div>
      <Footer />

    </Fragment>
  );
}

export default App;