import React, { Fragment } from 'react'

const Project = ({ project }) => {
    console.log(project)
    /*      backgroundImage: `url(images/${project.img})` */
    return (

     <Fragment>

         <div className="col-span-1">
                <p className="text-xl text-indigo-500 font-bold">{project.tecnologias}</p>
                <p className="text-4xl font-bold">{project.titulo}</p>
                <p className="text-2xl">{project.descripcion}</p>
         </div>

         <img className="col-span-1" src="" alt="" />

     </Fragment>

    )
}

export default Project
