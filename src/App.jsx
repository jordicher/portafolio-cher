import React, { Fragment } from "react";
import Menu from './components/layouts/Menu';
import Footer from './components/layouts/Footer';
import 'react-toastify/dist/ReactToastify.css';

import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <Fragment>
            <Menu/>
            <AboutMe/>
            <Projects/>
            <Contact/>
            <Footer/>

      </Fragment>
  );
}

export default App;