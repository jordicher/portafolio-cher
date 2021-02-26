import React from 'react'
import FormContact from './FormContact'
import contactM from '../img/contactM.png'

const Contact = () => {

    return (
        <div className="container mx-auto" id="contacto">
            <h1 className="text-green-600 text-4xl font-bold text-center">Contacto</h1>
            <p className="text-center m-3 text-xl">
                Actualmente estoy buscando nuevas oportunidades. Ya sea que tenga una pregunta o simplemente quiera saludar, ¡haré todo lo posible para responderle!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center justify-center mx-auto">
                <img src={contactM} alt="contact mobile" />

                <div className="space-y-6">                  

                    <a className="px-2 py-3 flex justify-center items-center bg-gradient-to-r from-green-400 to-green-600 rounded text-white font-semibold hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md w-1/2 mx-auto" href="https://www.linkedin.com/in/cherto" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">

                        <svg className="h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                        </svg> <span className="font-bold ml-2 text-xl">Linkedin </span></a>  

                         <FormContact />
                </div>



            </div>
            <br />



        </div>
    )
}

export default Contact
