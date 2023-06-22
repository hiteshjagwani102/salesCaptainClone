import React from "react";



const TestimonialCard = (props) => {

    const renderList = props.arr.map((item,index) =>
    <button key={index} className="text-sm lg:text-base text-gray-700 bg-sky-300 rounded-2xl p-2 m-2">{item}</button>
    )

    return (
      <div className="flex flex-column flex-wrap py-5 px-4 m-2 border-1 rounded-3xl w-[300px] lg:w-[450px]">
        {/* personal details */}
        <div className="flex flex-row justify-left p-3">
          <img src={props.img} className="w-[50px] h-[50px] mr-5"></img>
          <div>
            <h3 className="text-2xl lg:text-4xl font-semibold font-poppins">{props.name}</h3>
            <p className="text-sm text-gray-500 font-thin font-sans">{props.desg}</p>
          </div>
        </div>
    
        {/* Prasie */}
        <div>
          <p className="my-4 text-base lg:text-xl text-center w-auto">
            "{props.praise}"
          </p>
        </div>
    
        {/* Stats */}
        <div className="flex flex-column justify-center items-center my-2">
          <h2 className="text-7xl lg:text-8xl font-poppins font-medium">{props.perc}</h2>
          <p className="text-gray-500 text-lg">{props.prof}</p>
        </div>
    
        {/* Product list */}
        <div className="flex flex-column my-4">
          <p className="text-lg lg:text-2xl font-semibold">Products used:</p>
          <div className="flex flex-row flex-wrap ">
            {renderList}
          </div>
        </div>
      </div>
    );
}

export default TestimonialCard;
