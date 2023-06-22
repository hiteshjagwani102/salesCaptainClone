import React from 'react'
import { Fade } from "react-awesome-reveal";


const Intro = () => (
    <div className='flex flex-column flex-wrap justify-center items-center lg:h-[100vh]'>
        
        <h1 className='text-3xl sm:text-6xl md:8xl font-bold font-poppins my-3 leading-15 text-center'>Best way to grow your<br /> local business</h1>

        
        <p className='text-lg md:text-2xl text-gray-500 my-4 mx-4 text-center'>Artificial Intelligence powered easy-to-use tools to get more<br /> customers & give them a better experience</p>
        <div className='flex flex-row flex-wrap items-center justify-center my-5'>
            <input className='border-2 border-gray-500 focus:border-blue-700 placeholder:text-gray-500 rounded-lg px-3 py-2 mr-3 tracking-wide w-[250px] h-[40px] md:h-[50px] lg:w-[300px]' type="text" placeholder="ENTER YOUR EMAIL"></input>
            <button className="border-0 text-sm bg-gray-950 hover:bg-blue-700 text-gray-100 py-2 md:py-3 px-2 md-px-4 rounded-lg ml-2 my-4">GET DEMO</button>
        </div>

        <div>

        </div>
    </div>
  )


export default Intro