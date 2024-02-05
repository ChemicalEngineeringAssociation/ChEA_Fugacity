
import React from "react";

const MerchCard = (props1) => {
  return (
    <div className=" cardParent relative h-[400px] w-[320px] ">
      <div className=" card absolute h-full w-full p-2 bg-darkPrimary rounded-lg">
      <h2 className="text-2xl font-bold text-darkMain  font-nunito my-2 text-center">{props1.name}</h2>
        <img
          loading="lazy"
          className=" h-[300px] w-full object-cover rounded-10"
          src={props1.url}
          alt="img"
        />
      </div>
    </div>
  );
};

export default MerchCard;
