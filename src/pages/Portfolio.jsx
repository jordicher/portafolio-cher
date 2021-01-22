import React from 'react';

import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Footer from '../components/layouts/Footer'
import Menu from '../components/layouts/Menu';
import Projects from '../components/Projects';

const Portfolio = () => {
    return (
        <div>
            <Menu/>
            <AboutMe/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Portfolio
