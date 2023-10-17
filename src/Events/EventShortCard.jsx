import React from 'react'

const EventShortCard =(props)=> {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-400 text-white gap-2 border-2 border-blue-200 p-2 rounded-lg'>
      <img src={props.url} alt="img" width={100} />
      <h1 className='text-center text-slate-900 font-semibold text-lg'>{props.title}</h1>
      <button className="bg-blue-700 rounded-md p-2   text-sm font-bold cursor-pointer hover::bg-blue-800">
        <a href={`#${props.title}`}>Know More</a>
        
        </button>
    </div>
  )
}

export default EventShortCard
