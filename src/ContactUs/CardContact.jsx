import React from 'react'

const  CardContact =(props)=> {
  return (
    <div className='flex justify-center items-center flex-col w-[350px] rounded-lg hover:shadow-2xl shadow-md bg-slate-950 mb-10 gap-2'>
      <img loading="lazy" className=' rounded-t-lg' width={350} src={props.url} alt='img' />
      <h2 className='text-2xl font-bold text-white my-2'>{props.name}</h2>
      <h3 className='text-xl font-semibold text-slate-400 '>{props.position}</h3>
      <h3 className='text-lg text-slate-200 text-center'>+91-{props.phone}</h3>
      <h3 className='text-lg text-slate-100 mb-2'>{props.email}</h3>
    </div>
  )
}

export default CardContact
