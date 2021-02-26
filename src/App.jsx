import React, { Fragment, useState } from "react";
import Menu from './components/layouts/Menu';
import Footer from './components/layouts/Footer';
import 'react-toastify/dist/ReactToastify.css';

import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Welcome from './components/Welcome'

import JsonData from './data/data.json';


function App() {  

  const [language, setlanguage] = useState(JsonData.spanish);

  return (
    <Fragment>

      <Menu data={language.Nav} setlanguage={setlanguage}/>
    <div className="space-y-10">
        <Welcome data={language.Header}/>
        <AboutMe data={language.About}/>
        <Projects data={language.Projects}/>
  
        <Contact data={language.Contact}/>
    </div>
      <Footer />

    </Fragment>
  );
}

export default App;