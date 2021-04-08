import React from 'react'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Welcome from '../components/Welcome'

const Landing = ({language}) => {
    return (
        <>
            
        <Welcome data={language.Header} />
        <AboutMe data={language.About} />
        <Projects data={language.Projects} />
        <Contact data={language.Contact} />
    
        </>
    )
}

export default Landing
