import React from 'react'
import cv from '../../jordiCV.pdf'

const Footer = ({data}) => {
    return (
        <footer className="bg-white relative pt-1 border-b-2 border-green-700">

            <div className="container mx-auto">
                <div className="mt-16 border-t-2 border-green-300 grid grid-cols-1 sm:grid-cols-3 items-center">
                    <div className="text-center py-6 col-span-1 sm:col-span-2">
                        <p className="text-sm font-bold mb-2">
                            {data.paragraph} Jordi Armengol
                    </p>
                    </div>

                    <div className="text-center py-6 flex justify-between items-center">

                        <a className="uppercase p-3 flex items-center border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 "
                            href="https://www.linkedin.com/in/cherto" aria-label="Linkedin" target="_blank" rel="noopener noreferrer"> <svg className="h-6 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                            </svg></a>


                        <a className="uppercase p-3 flex items-center border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 " href="https://github.com/jordicher" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><svg className="h-6" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>

                        <a className="uppercase p-1 flex items-center border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-lg rounded-full h-12" href={cv} target="_blank" rel="noopener noreferrer">
                            {data.download}
                                <svg className="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
