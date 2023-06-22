import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row flex-wrap p-4 '>
        <div className='basis-1/3'>
            <img className="h-6 md:h-8 w-[100px] md:w-[200px]" src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62d85afd15788d0263af7b58_full_logo_white.webp'></img>
        </div>
        <div className='basis-2/3 flex flex-row justify-around items-top font-poppins'>
            <div className='hidden lg:flex flex-col justify-center items-left'>
                <p className='text-gray-500 font-semibold text-xs lg:text-lg my-1'>Products</p>
                <p className='text-white text-xs lg:text-lg my-1'>Reviews</p>
                <p className='text-white text-xs lg:text-lg my-1'>Listings</p>
                <p className='text-white text-xs lg:text-lg my-1'>Marketing</p>
                <p className='text-white text-xs lg:text-lg my-1'>WebBoost</p>
                <p className='text-white text-xs lg:text-lg my-1'>Referals</p>
                <p className='text-white text-xs lg:text-lg my-1'>Payments</p>
                <p className='text-white text-xs lg:text-lg my-1'>WebChats</p>
            </div>

            <div className='hidden lg:flex flex-col justify-center items-left '>
                <p className='text-white text-xs lg:text-lg my-1'>WebChats</p>
                <p className='text-white text-xs lg:text-lg my-1'>Messaging</p>
                <p className='text-white text-xs lg:text-lg my-1'>Captain AI</p>
                <p className='text-white text-xs lg:text-lg my-1'>Feedback & <br /> Survey</p>
                <p className='text-white text-xs lg:text-lg my-1'>Competitions &<br /> Insights</p>
                <p className='text-white text-xs lg:text-lg my-1'>Customer<br /> Manager</p>
            </div>

            <div className='hidden md:flex flex-col justify-center items-left'>
                <p className='text-gray-500 font-semibold text-xs lg:text-lg my-1'>Industry</p>
                <p className='text-white text-xs lg:text-lg my-1'>Healthcare</p>
                <p className='text-white text-xs lg:text-lg my-1'>Dental</p>
                <p className='text-white text-xs lg:text-lg my-1'>Home Services</p>
                <p className='text-white text-xs lg:text-lg my-1'>Hospitality</p>
                <p className='text-white text-xs lg:text-lg my-1'>Automotive</p>
                <p className='text-white text-xs lg:text-lg my-1'>Restaurants</p>
                <p className='text-white text-xs lg:text-lg my-1'>Welness</p>
                <p className='text-white text-xs lg:text-lg my-1'>Professional <br />Service</p>
            </div>

            <div className='flex flex-col justify-center items-left'>
                <p className='text-gray-500 font-semibold text-xs lg:text-lg my-1'>Partner</p>
                <p className='text-white text-xs lg:text-lg my-1'>Became a Parther</p>
                <p className='text-gray-500 font-semibold text-xs lg:text-lg my-1'>Company</p>
                <p className='text-white text-xs lg:text-lg my-1'>Contact</p>
                <p className='text-white text-xs lg:text-lg my-1'>Careers</p>
                <p className='text-white text-xs lg:text-lg my-1'>Press</p>
                <p className='text-white text-xs lg:text-lg my-1'>Partners</p>
                <p className='text-white text-xs lg:text-lg my-1'>Legal</p>
            </div>

            <div className='flex flex-col justify-center items-left'>
                <p className='text-gray-500 font-semibold text-xs lg:text-lg my-1'>US Headquarters</p>
                <p className='text-white text-xs lg:text-lg my-1'>447 Broadway,<br />2nd Floor<br />New York 10013</p>
                <p className='text-gray-500 font-semibold text-xs lg:text-lg my-1'>India office</p>
                <p className='text-white text-xs lg:text-lg my-1'>1467 Jhansi<br /> HSR Layout Bengaluru <br />Karnataka 560102</p>
                <p className='text-white text-xs lg:text-lg my-1'>London Office</p>
                <p className='text-white text-xs lg:text-lg my-1'>79-91 Borough Rd <br />London England <br />400706</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer