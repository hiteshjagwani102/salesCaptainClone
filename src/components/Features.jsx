import React from "react";
import { Fade, Slide,Flip } from "react-awesome-reveal";


const Features = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center mt-20 py-20 px-5">
      <Flip><h2 className="text-2xl md:text-5xl text-4xl text-white font-bold font-poppins text-gray-950 my-5 text-center">
        Ready to grow?
      </h2></Flip>
      <p className="text-lg md:text-2xl text-white ">
        See why 100,000+ businesses trust us. Book a personalized demo to see
        how SalesCaptain provides you the right tools to grow your business.
      </p>

      <div className="flex flex-row items-center flex-wrap justify-center my-5">
      <input className='border-2 border-gray-500 focus:border-blue-700 placeholder:text-gray-500 rounded-lg px-3 py-2 mr-3 tracking-wide w-[250px] h-[40px] md:h-[50px] lg:w-[300px]' type="text" placeholder="ENTER YOUR EMAIL"></input>
            <button className="border-0 text-sm bg-blue-800 hover:bg-blue-700 text-gray-100 py-2 md:py-3 px-2 md-px-4 rounded-lg ml-2 my-3">GET DEMO</button>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center">
            <img className="w-[200px] mr-2" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp"></img>
            <p className="text-sm text-white">500+ Reviews</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center my-3">
            <img className="w-[100px] md:w-[150px] my-2" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562b0cd76f4e7026cba9_18-187112_google-transparent-white-logo.webp"></img>
            <img className="w-[100px] md:w-[150px] my-2" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af5631b8d59acd37236ca0_c-dark.webp"></img>
            <img className="w-[100px] md:w-[150px] my-2" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562bb61c17fbd3d37043_6033de5cf82f810004782cb7.webp"></img>
        </div>

    </div>
  );
};

export default Features;
