import React, { Fragment } from 'react'
import uuid from 'react-uuid'
import fotoCVPNG from '../img/JordiArmengolChertoCV.png'
import fotoCVWEBP from '../img/JordiArmengolChertoCV.webp'
import cv from '../jordiCV.pdf'

const AboutMe = ({ data }) => {
    return (
        <Fragment>
            <div className="lg:h-screen flex flex-col" id="sobreMi">

            <div className="container mx-auto my-auto text-center text-xl" >

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mx-5 lg:m-0 space-y-6" >

                    <picture>
                        <source srcSet={fotoCVWEBP} type="image/webp" />
                        <source srcSet={fotoCVPNG} type="image/png" />
                        <img src={fotoCVPNG} alt="My face" className="m-auto" />
                    </picture>

                    <div className="col-span-2">
                        <h1 className="text-green-600 text-4xl font-bold">{data.title}</h1>
                        <h3 className="p-3">{data.subtitle}</h3>

                        <div className=" text-justify">
                            <p className="tracking-wide leading-10">
                                {data.paragraph}
                            </p>
                        </div>

                        <a className="uppercase p-8 flex items-center border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-lg rounded-full h-12 mx-auto my-5" href={cv} target="_blank" rel="noopener noreferrer">
                            {data.download}
                            <svg className="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>

                        </a>

                    </div>


                    <div className="col-span-2 text-left">
                        <h4 className="text-persian text-3xl font-bold" >{data.skills.title}</h4>
                        <ul className="list-inside list-disc">
                            {data.skills.languages.map(skill => <li key={uuid()}>{skill}</li>)}
                        </ul>

                        <p className="my-2">
                            {data.skills.paragraph}
                        </p>
                    </div>

                    <div className="col-span-1 text-left">
                        <h4 className="text-persian text-3xl font-bold">{data.hobbies.title}</h4>
                        <ul className="list-inside list-disc">
                            {data.hobbies.hobby.map(pastime => <li key={uuid()}>{pastime}</li>)}
                        </ul>
                        <p className="my-2">{data.hobbies.paragraph}
                            <svg className="inline-block h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.911 10c-.308 3.325-1.397 5.712-2.948 8h-4.926c-1.373-2.009-2.613-4.372-2.948-8h10.822zm2.089-2h-15c0 5.716 1.826 8.996 4 12h7c2.12-2.911 4-6.333 4-12zm1.119 2c-.057.701-.141 1.367-.252 2h1.549c-.449 1.29-1.5 2.478-2.299 2.914-.358 1.038-.787 1.981-1.26 2.852 3.275-1.143 5.847-4.509 6.143-7.766h-3.881zm-1.119 12h-15v2h15v-2zm-3.06-19.614c-.416 1.702-3.07 2.477-3.983 4.614-.088-1.846 1.107-3.031 1.75-3.93 1.045-1.465-.537-2.267-1.633-1.171-.188.187-.38.435-.573.756-.193-.322-.386-.57-.573-.757-1.089-1.09-2.664-.294-1.658 1.137.635.903 1.863 2.095 1.775 3.965-.914-2.137-3.567-2.912-3.984-4.614-.355-1.445.928-2.386 2.29-2.386.793 0 1.613.32 2.15 1.045.537-.725 1.357-1.045 2.15-1.045 1.362 0 2.644.941 2.289 2.386z" /></svg>
                        </p>

                    </div>

                </div>
            </div>
            </div>

        </Fragment>
    )
}

export default AboutMe
