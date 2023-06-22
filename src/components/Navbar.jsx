import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {

  return (
    <div className="ml-[50px] lg:ml-[100px] flex flex-row flex-wrap basis-1/2 justify-between items-center py-2 lg:py-3">
      <div className="float-left">
        <img
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d6709cf8832cfd1775bf4e_salescaptainfull.webp"
          className="h-6 lg:h-8 w-100 lg:w-200"
        ></img>
      </div>
      
      <div className="hidden lg:flex flex-row justify-center items-center">
        <div className="mx-4 text-gray-950 hover:text-blue-700">Products</div>
        <div className="mx-4 text-gray-950 hover:text-blue-700">Solutions</div>
        <div className="mx-4 text-gray-950 hover:text-blue-700">Pricing</div>
        <div className="mx-4 text-gray-950 hover:text-blue-700">Resources</div>
        <div className="mx-4 text-gray-950 hover:text-blue-700">Support</div>

        <div className="mr-[100px] flex flex-row">
          <button className="mx-1 border-2 text-sm text-gray-950 hover:text-blue-700 border-gray-950 hover:border-blue-500 py-1 px-3 rounded">
            Log In
          </button>
          <button
            className="mx-1 border-0 text-sm bg-gray-950 hover:bg-blue-700 text-gray-100 py-2 px-3 rounded"
          >
            Sign up
          </button>



        </div>

 
      </div>
      <button className="lg:hidden rounded-2xl text-black p-2 mr-10 lg:mr-10 shadow-lg">☰</button>

    </div>
  );
};

export default Navbar;
