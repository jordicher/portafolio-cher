import React, { Fragment } from 'react'
import fotoCV from '../img/JordiArmengolChertoCV.png'
import cv from '../jordiCV.pdf'

const AboutMe = () => {
    return (
        <Fragment>
           <div className="container mx-auto text-center font-mono text-xl my-10" id="sobreMi">

                <div className="grid grid-cols-1 sm:grid-cols-3 content-between gap-3 mx-5 sm:m-0" >
    
                    <img src={fotoCV} alt="foto personal" className="m-auto" />
    
                    <div className="col-span-2">
                        <h1 className="text-green-600 text-4xl font-bold">Sobre mi</h1>
                        <h3 className="p-3">Buenos días, me llamo Jordi Armengol Cherto</h3>
    
                        <div className=" text-justify">
                            <p>
                                Soy un Programador Web. Me inicié en la programación web a finales de 2019, después de finalizar los estudios universitarios. Inicie una bootcamp, una vez concluida, estudie Desarollo de Aplicaciones Web, mientras profundizaba en la autoformación.
    
                                </p>
                        </div>
    
                        <a className="uppercase p-1 flex items-center border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-lg rounded-full h-12 mx-auto my-5" href={cv} target="_blank" rel="noopener noreferrer">
                            Descargar CV
                                    <svg className="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
    
                        </a>
    
                    </div>
    
    
                    <div className="col-span-2 text-left">
                        <h4 className="text-persian text-3xl text-center" >Mis skills</h4>
                        <ul className="list-inside font-mono list-disc">
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Php</li>
                            <li>MySql</li>
                            <li>HTML & CSS</li>
                            <li>Git</li>
                        </ul>
    
                        <p className="my-2">
                            Actualmente estoy formándome en React y especializándome en el <span className="font-bold"> Front-end</span>.
                       </p>
                    </div>
    
                    <div className="col-span-1 text-left">
                        <h4 className="text-persian text-3xl text-center" >Hobbies</h4>
                        <ul className="list-inside font-mono list-disc">
                            <li>Naturaleza</li>
                            <li>Mi perro</li>
                            <li>Videojuegos</li>
                            <li>Viajes inesperados</li>                      
                        </ul>
                        <p className="my-2">Y creo que como todo programador, un buen cafe.
    
                        </p>
                       
                    </div>
    
                </div>
           </div>


        </Fragment>
    )
}

export default AboutMe
