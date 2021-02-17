import React, { Fragment } from 'react'
import fotoCV from '../img/JordiArmengolChertoCV.png'

const AboutMe = () => {
    return (
        <Fragment>
            <div className="h-full bg-green-600 font-mono">
                <div className="container mx-auto  pt-10 text-center">
                    <h1 className="text-6xl font-bold text-center ">Jordi Armengol Cherto</h1>

                    <h3 className="text-2xl pl-3 py-3">Continuamente aprendiendo y adquiriendo nuevas habilidades</h3>

                    <p className="text-xl p-3 font-sans">
                        Después de realizar una carrera universitaria, descubrí la programación web, y desde ese momento ya no he podido parar.
                    </p>
                </div>
            </div>

            <div className="overflow-hidden h-20 lg:h-48" ><svg
                className="fill-current text-green-600" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-2.83,8.18 C104.96,80.22 271.49,-50.00 503.95,39.77 L500.00,0.00 L-2.83,-5.63 Z" className="filla"></path></svg></div>


            <div className="container mx-auto text-center font-mono grid grid-cols-1 sm:grid-cols-3 content-between gap-3" id="sobreMi">

                <img src={fotoCV} alt="foto personal" className="m-auto h-full sm:h-1/2 lg:h-full" />

                <div className="col-span-2 mx-2">
                    <h1 className="text-green-600 text-2xl font-bold">Sobre mi</h1>
                    <h3 className="p-3">Buenos días, me llamo Jordi Armengol Cherto</h3>
                    <p className="text-justify mx-2 sm:m-0">
                        Soy un Programador Web. Me inicié en la programación web a finales de 2019, después de finalizar los estudios universitarios. Inicie una bootcamp, una vez concluida, estudie Desarollo de Aplicaciones Web, mientras profundizaba en la autoformación.
                        <br/> Actualmente estoy formándome en React y especializándome en el <span className="font-bold"> Front-end</span>.
                    </p>

                    <ul className="list-inside font-mono list-disc grid grid-cols-2 gap-2 mt-3">
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Php</li>
                        <li>MySql</li>
                        <li>HTML & CSS</li>
                        <li>Git</li>
                    </ul>
                    
                </div>
            </div>
  
        </Fragment>
    )
}

export default AboutMe
