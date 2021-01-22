import React from 'react'

const Contact = () => {
    return (
        <div className="container mx-auto" id="contact">
            <h1 className="mt-10 text-green-600 text-3xl font-bold text-center">Contacto</h1>
            <p className="text-center my-3">
                Actualmente estoy buscando nuevas oportunidades. Ya sea que tenga una pregunta o simplemente quiera saludar, ¡haré todo lo posible para responderle!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                <a className="bg-green-500 hover:bg-green-700 text-white py-3 px-10 rounded-full w-2/3 md:w-1/2 lg:w-1/3 text-center mx-auto" 
                 href="mailto:jordisodiac@gmail.com" > 
                <svg className="h-6 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg> <span className="font-bold align-text-top">Email</span></a>

               <a className="bg-green-500 hover:bg-green-700 text-white py-3 px-10 rounded-full w-2/3 md:w-1/2 lg:w-1/3 text-center mx-auto" href="https://www.linkedin.com/in/cherto" target="_blank" rel="noopener noreferrer" >

                   <svg className="h-6 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                   </svg> <span className="font-bold align-text-top">Linkedin </span></a>
            </div>

        

        </div>
    )
}

export default Contact
