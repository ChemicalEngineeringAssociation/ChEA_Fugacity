import React, { useEffect } from "react";
import { useState } from "react";
import Form from "./form";

const Register = () => {
  const bg = `/images/bg1.gif`;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div
      className="pt-36 py-10 w-full bg-darkSecondary"
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
      //   backgroundSize: "cover",
      // }}
    >
      <h1 className="text-center text-2xl md:text-4xl font-bold font-nunito text-darkMain my-1 p-4">
        Register Your Self
      </h1>
      <Form />
    </div>
  );
};

export default Register;
