import React from 'react'

export default function Card(props) {
  return (
    <div className="flex justify-center bg-[#49496d] rounded-xl m-2 items-center flex-col">
          <div className="mt-5">
            <img src={props.logo} alt="" className="object-fill bg-white"
             width={200}
              />
          </div>
          <div className="p-5 text-center">
            <h3 className="font-bold text-slate-50 sm:text-lg md:text-xl p-2">{props.title}</h3>
            <p className='text-slate-200'>
            {props.description}
            {/* <a className='text-sm text-slate-400' href="/"> Read More...</a> */}
            </p>
          </div>
    </div>
  )
}
