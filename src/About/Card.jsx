import React from "react";

export default function Card(props) {
  return (
    <div className="flex justify-center bg-darkSecondary rounded-xl m-2 items-center flex-col">
      <div className="mt-5">
        <img
          loading="lazy"
          src={props.logo}
          alt={props.title}
          className="object-cover bg-white rounded-md"
          width={200}
          height={200}
          title={props.title}
        />
      </div>
      <div className="p-3 md:p-4 text-center">
        <h2 className="font-bold text-darkMain font-nunito sm:text-lg md:text-xl p-2">
          {props.title}
        </h2>
        <p className=" text-justify text-slate-300 font-avenir">
          {props.description}
          {/* <a className='text-sm text-slate-400' href="/"> Read More...</a> */}
        </p>
      </div>
    </div>
  );
}
