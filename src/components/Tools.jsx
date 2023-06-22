import React from 'react'
import ToolsCard from '../subComponents/ToolsCard'
import { Zoom,Slide } from 'react-awesome-reveal';

const Tools = () => {

const titles1 = ["Reviews","Listings","Marketing","SmartPages"];
const titles2 = ["WebChat","Messaging","Referrals","Payments"];
const titles3 = ["Captain AI","Feedback & Survey","Competition & Insights","Customer Manager"];



  return (
    <div className='flex flex-column justify-center items-center mt-20'>
        <h2 className="text-2xl md:text-5xl text-4xl font-bold font-poppins text-gray-950 my-5 text-center">
        Tools to take your business to next level
    </h2>

    <div className="flex flex-row flex-wrap justify-center items-center">
        <Slide direction='left'><ToolsCard head="Attract" shead="Attract more customers" prod ={titles1}/></Slide>
        <Zoom><ToolsCard head="Engage" shead="Convert leads to customers" prod={titles2}/></Zoom>
        <Slide direction='right'><ToolsCard head="Elevate" shead="Provide a delightfull experience" prod={titles3}/></Slide>
    </div>

       

    </div>
  )
}

export default Tools
