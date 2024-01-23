import React from 'react'

const EventShortCard =(props)=> {
  return (
    <div className='eventShortCard bg-darkPrimary 
    '>
      <img loading='lazy' src={props.url} alt="img" width={100} height={100} />
      <h1 className='text-center text-lightSecondary font-semibold text-lg font-nunito'>{props.title}</h1>
      <button className=" rounded-md bg-darkSecondary text-lightPrimary p-2   text-sm font-bold cursor-pointer hover::bg-darkPrimary">
        <a href={`#${props.title}`}>Know More</a>
        </button>
    </div>
  )
}

export default EventShortCard
