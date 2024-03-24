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
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <Form />
    </div>
  );
};

export default Register;
