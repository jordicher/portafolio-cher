import React, { useState } from 'react'
import FormContact from './FormContact'

const Contact = () => {
    const [seeForm, setSeeForm] = useState(false);
    return (
        <div className="container mx-auto">
            <h1 className="mt-10 text-green-600 text-3xl font-bold text-center">Contacto</h1>
            <p className="text-center my-3">
                Actualmente estoy buscando nuevas oportunidades. Ya sea que tenga una pregunta o simplemente quiera saludar, ¡haré todo lo posible para responderle!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                <a className="px-2 py-3 flex justify-center items-center bg-gradient-to-r from-green-400 to-green-600 rounded text-white font-semibold hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md mx-auto"
                    href="mailto:jordisodiac@gmail.com" >
                    <svg className="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg> <span className="font-bold ml-2 text-xl">Email</span></a>

                <button className="px-2 py-3 flex justify-center items-center bg-gradient-to-r from-green-400 to-green-600 rounded text-white font-semibold hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md mx-auto" onClick={()=> setSeeForm(!seeForm)}>
                    
                    <span className="font-bold ml-2 text-xl">Formulario </span></button>

                <a className="px-2 py-3 flex justify-center items-center bg-gradient-to-r from-green-400 to-green-600 rounded text-white font-semibold hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md mx-auto" href="https://www.linkedin.com/in/cherto" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">

                    <svg className="h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                    </svg> <span className="font-bold ml-2 text-xl">Linkedin </span></a>

            </div>
            <br />

           {/*  {seeForm ? <FormContact/> : null} */}
           <FormContact/>
        </div>
    )
}

export default Contact
