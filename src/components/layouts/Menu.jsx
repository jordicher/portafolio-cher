import React, { Fragment } from "react";

const Menu = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <Fragment>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-green-500">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start items-center">
                        <a
                            className="text-white"
                            href="/portafolio-cher"                           
                        >
                            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#sobreMi"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">Sobre Mi</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#proyectos"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">Proyectos</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#contacto"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <span className="ml-2">Contacto</span>
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

