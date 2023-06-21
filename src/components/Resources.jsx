import React from "react";
import { Fade, Slide,Zoom } from "react-awesome-reveal";


const Resources = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center mt-20">
      <h2 className="md:text-5xl text-4xl font-bold font-poppins text-gray-950 my-5 text-center">
        Expert Insights and Resources
      </h2>
      <p className="text-2xl">
        {" "}
        Get the latest business intelligence relevant to your industry, designed
        to help you grow.
      </p>

      <div className="flex flex-row flex-wrap justify-center items-center my-5">
        <Slide direction="left">
        <div className="flex flex-col justify-center items-center w-[350px] m-3">
          <img
            className=" rounded-xl"
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe250a42e4ba76b2ab04_Mask%20Group%20166.webp"
          ></img>
          <h2 className="text-xl font-semibold font-poppins my-3">
            Google My Business Basics: How to get more customers from GMB.
          </h2>
          <p className="test-base text-gray-500 text-left">
            {" "}
            Customers want to find local proprietors on search engines and
            nearly 90 percent of that traffic goes to Google.
          </p>
        </div>
        </Slide>

        <Zoom><div className="flex flex-col justify-center items-center w-[350px] m-3">
          <img
            className="rounded-xl"
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp"
          ></img>
          <h2 className="text-xl font-semibold font-poppins my-3">
            How to use Google's Business Messaging tool to get new customers
          </h2>
          <p className="test-base text-gray-500 text-left">
            Today’s leading businesses aren’t just being found - they’re
            engaging the moment they’re discovered.
          </p>
        </div></Zoom>

        <Slide direction="right">
        <div className="flex flex-col justify-center items-center w-[350px] m-3">
          <img
            className="rounded-xl"
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe2556fec0b3086291da_pexels-antoni-shkraba-4348404.webp"
          ></img>
          <h2 className="text-xl font-semibold font-poppins my-3">
            6 Ways to Increase Your Website Traffic and Leads
          </h2>
          <p className="test-base text-gray-500 text-left">
            {" "}
            More than 61% of marketers have reported that attracting traffic to
            their website is their biggest challenge.
          </p>
        </div>
        </Slide>
      </div>
    </div>
  );
};

export default Resources;
