import React, {useEffect, useState } from 'react'
import { db } from '../firebase'
import { Project } from './Project';
import uuid from 'react-uuid'

const Projects = () => {

    const [projectDB, setprojectDB] = useState();

    useEffect(() => {
        const getProjects = async () => {
            const docs = [];
            const querySnapShot = await db.collection('proyectos').get()
            querySnapShot.forEach(doc => {
                docs.push(doc.data());
            })
            setprojectDB(docs);
        }

        getProjects();
    }, [])
    return (

        <div className="container mx-auto" id="proyectos">         
            <h1 className="my-10 text-green-600 text-3xl font-bold text-center">Proyectos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-20">
       
                {

                    projectDB
                        ?
                        projectDB.map(project => <Project project={project} key={uuid()}/>)
                        : 
                       <div className="w-full col-span-3">
                            <svg className="animate-spin h-10 w-10 text-blue-700 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                       </div>
                      
                      
                }








            </div>


        </div>
    )
}

export default Projects
