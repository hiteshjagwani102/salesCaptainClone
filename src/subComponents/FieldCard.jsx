import React from 'react'

const FieldCard = (props) => {
  return (
    <div className='transition ease-in-out hover:-translate-y-1 hover:scale-110 basis-1/5 flex flex-col justify-center items-center border-1 border-gray-300 shadow rounded-xl p-5 my-3  mx-3'>
        <img className='w-[50px] h-[50px] my-2' src={props.img}></img>
        <h3 className='text-3xl font-bold my-2'>{props.title}</h3>
    </div>
  )
}

export default FieldCard