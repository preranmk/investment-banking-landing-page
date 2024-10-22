import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center border-green-400">
            <p className='uppercase font-bold p-2 text-[#00df9a]'>Growing with data analytics</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data</h1>
            <div className='flex items-center justify-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flixible financing for</p>
                <ReactTyped
                className='md:text-5xl sm:text-4xl text-xl font-bold pl-4'
                    strings={[
                        "BTC",
                        "SASS",
                        "BTB",
                    ]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                    ></ReactTyped>
            </div>
            <p className=' md:text-2xl text-xl font-bold text-gray-400'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md py-2  my-6 mx-auto text-black font-bold'>Get Started</button>
        </div>

    </div>
  )
}

export default Hero