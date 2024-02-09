import React, { useEffect } from "react";
import { useState } from "react";
import Form from './form'

const Register = () => {
  const bg = `/images/bg1.gif`
  useEffect(() => {
    window.scroll(0,0)
  }, []);

  return (
    <div className='mt-24 w-full bg-darkSecondary pb-5' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`, backgroundSize: 'cover'  }}>
        <Form/>
    </div>
  );
};

export default Register;
