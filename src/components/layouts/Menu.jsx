import React, { Fragment } from "react";
import JsonData from '../../data/data.json';

import catalanFlag from '../../img/catalan.png'
import englishFlag from '../../img/english.png'
import spanishFlag from '../../img/spanish.png'

const Menu = ({ data, setlanguage }) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <Fragment>
            <nav className="fixed w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-charcoal text-lg z-10">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

                    <div className="w-full relative flex justify-between lg:w-auto items-center">
                        <a
                            className="text-white font-bold border-2 border-persian p-2 my-auto"
                            href="/portafolio-cher"
                        >
                            JC
                        </a>
                        {/* languages */}


                        <button className="px-3 py-2 items-center hover:opacity-75" onClick={() => setlanguage(JsonData.catalan)}>
                            <img className="h-10" src={catalanFlag} alt="català" />
                        </button>
                        <button className="px-3 py-2 items-center hover:opacity-75" onClick={() => setlanguage(JsonData.english)}>
                            <img className="h-10" src={englishFlag} alt="English" />
                        </button>
                        <button className="px-3 py-2 items-center hover:opacity-75" onClick={() => setlanguage(JsonData.spanish)}>
                            <img className="h-10" src={spanishFlag} alt="español" />
                        </button>


                        <button
                            className="text-white cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center flex-row-reverse" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li>
                                <a
                                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#sobreMi"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">{data.about}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#proyectos"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">{data.projects}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#contacto"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">{data.contact}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Menu;

