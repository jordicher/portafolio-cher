import React, { useState } from 'react'
import Footer from '../components/Footers/Footer'
import IndexNavbar from '../components/Navbars/IndexNavbar'
import Landing from '../views/Landing'

import JsonData from '../data/data.json';

const Public = () => {
    const [language, setlanguage] = useState(JsonData.spanish);

    return (
        <>
            <IndexNavbar data={language.Nav} setlanguage={setlanguage} />
            <div className="space-y-10 lg:space-y-10">
                <Landing language={language}/>
            </div>
            <Footer data={language.Footer} />
        </>
    )
}

export default Public
