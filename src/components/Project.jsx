import React from 'react'

export const Project = ({project}) => {
    return (
        <div className="w-full" >
            <div className="mx-auto bg-white rounded-lg overflow-hidden border min-h-full ">

                <div className="flex items-center justify-between px-6 py-6 card-header">
                    <h3 className="text-primary-grey text-2xl uppercase font-black">{project.titulo}</h3>
                </div>
                <span className="flex border-b px-6 w-auto"></span>
                <div className=" relative px-6 py-6 md:py-12 lg:py-6 pt-10" /* style={{                                    
                                    backgroundImage: "url('https://raw.githubusercontent.com/jordicher/parejas/master/img/jugando.png')"            
                                }} */> <div className="absolute top-0 left-0 opacity-10 w-full h-full bg-contain bg-center bg-no-repeat" style={{
                        backgroundImage: `url(${project.img})`
                    }} />

                    <div className="relative">
                        <div className="font-bold text-xl lg:text-2xl mb-2 border-l-4 border-green-300 rounded pl-6 text-primary-grey " >{project.tecnologias}</div>
                        <p className="text-grey-darker py-4 md:h-box-text text-center text-lg lg:text-xl"> {project.descripcion}
                        </p>


                        <div className="flex flex-row-reverse z-10">

                            <a className="uppercase p-3 flex items-center border border-purple-400 text-purple-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12" href={project.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>


                            <a className="uppercase p-3 flex items-center border border-blue-400 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 mr-4" href={project.url} aria-label="GitHub" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>  </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
