import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Grow = () => {
  return (
    <div className="flex flex-col mt-20">
      <h2 className="md:text-5xl text-4xl font-bold font-poppins text-gray-950 my-5 text-center">
        Make your business stand out with us
      </h2>
      <div className="flex flex-row flex-wrap justify-around items-center my-20">
        <Slide direction="left">
          <img
            className="h-[400px] mr-4"
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62cc453f2139195799ff1678_Mask%20Group%20109.webp"
          ></img>
        </Slide>
        <Slide direction="right">
          <div className="w-[500px]">
            <h2 className="text-5xl font-bold font-poppins my-3">
              Get discovered by more customers
            </h2>
            <p className="my-3">
              Higher reviews & better listings make you more discoverable to
              people organically
            </p>
            <button className="text-blue-800 font-semibold">Get started</button>
          </div>
        </Slide>
      </div>

      <div className="flex flex-row-reverse flex-wrap justify-around items-center my-20">
        <Slide direction="right">
          <img
            className="h-[400px] mr-4"
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62def85e197fa06b03e4005b_Group%2018718.webp"
          ></img>
        </Slide>
        <Slide direction="left">
          <div className="w-[500px]">
            <h2 className="text-5xl font-bold font-poppins my-3">
              Faster conversion with our Captain AI
            </h2>
            <p className="my-3">
              Automate web chat, messaging, reviews & feedbacks with our AI
              assistant
            </p>
            <button className="text-blue-800 font-semibold">Get started</button>
          </div>
        </Slide>
      </div>

      <div className="flex flex-row flex-wrap justify-around items-center my-20">
        <Slide direction="left">
          <img
            className="h-[400px] mr-4"
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fb4ff877b8c4b92833_new111.webp"
          ></img>
        </Slide>
        <Slide direction="right">
          <div className="w-[500px]">
            <h2 className="text-5xl font-bold font-poppins my-3">
              Marketing that works for you
            </h2>
            <p className="my-3">
              Run highly effective & targeted campaigns on text & emails and put
              your customer data to use
            </p>
            <button className="text-blue-800 font-semibold">Get started</button>
          </div>
        </Slide>
      </div>

      <div className="flex flex-row-reverse flex-wrap justify-around items-center my-20">
        <Slide direction="right">
          <img
            className="h-[400px] mr-4"
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fba79d98b49f7812a5_new222.webp"
          ></img>
        </Slide>
        <Slide direction="left">
          <div className="w-[500px]">
            <h2 className="text-5xl font-bold font-poppins my-3">
              Training & Support
            </h2>
            <p className="my-3">
              Talk to a dedicated relationship manager to get the help you need.
              No wait time, a dedicated line just for you.
            </p>
            <button className="text-blue-800 font-semibold">Get started</button>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Grow;
