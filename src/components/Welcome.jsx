import React from 'react'
import { ReactComponent as CodeThink } from '../img/codeThink.svg'

const Welcome = ({ data }) => {
    return (
        <div className="h-screen bg-persian flex flex-col font-bold text-gray-200 pt-20 place-items-end">

            <div className="container mx-auto text-center my-auto">
                <h1 className="text-5xl lg:text-7xl" data-reveal-delay="200">Jordi Armengol Cherto</h1>

                <h3 className="text-3xl lg:text-4xl pl-3 py-3">{data.subtitle}</h3>

                <p className="text-2xl lg:text-3xl p-3 tracking-wide leading-10">
                    {data.paragraph}
                </p>
            </div>

            {/* <img src={codeThinking} alt="" className="bg-red-200"/> */}
            <CodeThink className="h-auto w-1/2" />
        </div>
    )
}

export default Welcome
