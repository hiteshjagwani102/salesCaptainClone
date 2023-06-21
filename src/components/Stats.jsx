import React from "react";
import TestimonialCard from "../subComponents/TestimonialCard";
import { Fade,Slide, Zoom } from "react-awesome-reveal";

const Stats = () => {

    return (
  <div className="flex flex-column justify-center items-center mt-20 motion-safe:animate-fadeIn">
    <Fade>
    <h2 className="md:text-5xl text-4xl font-bold font-poppins text-gray-950 my-5 text-center">
      Trusted by 100,000+ local businesses globally
    </h2>
    </Fade>
    <div className="flex flex-row justify-center flex-wrap items-center">
      <img
        className="mx-2 my-2"
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cad44fb711e700c0a1_Group%2018530.webp"
      ></img>
      <img
        className="mx-2 my-2"
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cae70f01d34820d129_Group%2018531.webp"
      ></img>
      <img
        className="mx-2 my-2"
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp"
      ></img>
      <img
        className="mx-2 my-2"
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca4e2bcd235bf57982_Group%2018533.webp"
      ></img>
      <img
        className="mx-2 my-2"
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp"
      ></img>
      <img
        className="mx-2 my-2"
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cb054ce48a81f23d47_Group%2018535.webp"
      ></img>
      <img
        className="mx-2 my-2"
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969caa274fa886bbafd69_Group%2018536.webp"
      ></img>
    </div>

    <div className="flex flex-row flex-wrap justify-center items-center mt-20">
        <Slide direction="left"><TestimonialCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp" name="Simon Page" desg="Owner, Mamagato Restaurant" praise="In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn" perc="40%" prof="Average net profit increase" arr={["Messaging","Webchat","Reviews","Listings","Referrals"]} /></Slide>

        <Zoom><TestimonialCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp" name="Daniel Wilson" desg="Marketing head, The Air Conditioning Company" praise="“Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google" perc="200%" prof="New review growth" arr={["Reviews","Lsitings","Messaging","Webchat","Customer Manager"]} /></Zoom>


        <Slide direction="right"><TestimonialCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp" name="Debbie Rose" desg="Owner, Jiva luxury Spa" praise="Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in weeks" perc="$150k" prof="Generated with marketing campaign" arr={["Marketing","Webchat","Review","Messaging","Competition & Insights"]} /></Slide>

    </div>

  </div>
);
    }

export default Stats;
