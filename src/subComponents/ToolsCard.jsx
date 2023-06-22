import React from 'react'

const ToolsCard = (props) => {

    // const renderList = props.arr.map((item,index) =>
    // <button className="text-sm text-gray-700 bg-sky-300 rounded-2xl p-2 m-2">{item}</button>
    // )

    return (
      <div className="flex flex-column flex-wrap py-5 px-4 m-2 border-1 rounded-3xl w-[300px] lg:w-[450px]">
        <h1 className='text-4xl text-sky-800'>{props.head}</h1>
        <p className='text-gray-500 text-lg my-3 font-thin'>{props.shead}</p>
        <div className='flex flex-row mt-3'>
            <img className='basis-1/4 h-12 ' src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg" ></img>
            <div className='basis-3/4'>
                <h2 className='text-gray-950 font-bold text-2xl'>{props.prod[0]}</h2>
                <p className='text-gray-500 text-sm my-1 font-thin'>Improve ratings & get chosen more.</p>
            </div>
        </div>
        <hr className='text-gray-400' />

        <div className='flex flex-row mt-3'>
            <img className='basis-1/4 h-12' src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg" ></img>
            <div className='basis-3/4'>
                <h2 className='text-gray-950 font-bold text-2xl'>{props.prod[1]}</h2>
                <p className='text-gray-500 text-sm my-1 font-thin'>Improve ratings & get chosen more.</p>
            </div>
        </div>
        <hr className='text-gray-400' />

        <div className='flex flex-row mt-3'>
            <img className='basis-1/4 h-12 ' src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg" ></img>
            <div className='basis-3/4'>
                <h2 className='text-gray-950 font-bold text-2xl'>{props.prod[2]}</h2>
                <p className='text-gray-500 text-sm my-1 font-thin'>Improve ratings & get chosen more.</p>
            </div>
        </div>
        <hr className='text-gray-400' />

        <div className='flex flex-row mt-3'>
            <img className='basis-1/4 h-12 ' src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg" ></img>
            <div className='basis-3/4'>
                <h2 className='text-gray-950 font-bold text-2xl'>{props.prod[3]}</h2>
                <p className='text-gray-500 text-sm my-1 font-thin'>Improve ratings & get chosen more.</p>
            </div>
        </div>

      </div>
    );
}

export default ToolsCard