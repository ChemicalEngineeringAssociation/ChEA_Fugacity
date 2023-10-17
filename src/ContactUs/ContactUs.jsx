import React from 'react'
import CardContact from './CardContact';
import Vp from 'images/vp.png'
import Vrushesh from 'images/vrushesh.jpeg'
import Harshit from 'images/harshit.jpg'
import Vignesh from 'images/vignesh.jpeg'
import Suvetha from 'images/suvetha.jpeg'
import Shyam from 'images/shyam.jpg'

// import Koushal from 'images/kaushal.jpg'
const  ContactUs=()=> {
  return (
    <div className='bg-custom-blue   text-custom-blue bg-custom-gradient mt-16 '>
      <h1 className='text-center text-5xl font-bold text-white my-3 p-4'>Contact Us</h1>
      <div className='flex justify-center items-center'>
        <CardContact name="Kumari Bhawna" position="Vice President" email="bhawna.julia060@gmail.com" phone="9661012727" url={Vp} />
      </div>
      <div className='flex flex-col lg:flex-row justify-around items-center mt-10'>
        <CardContact name="Vrushabh Sonawane" position="PG Representative" email="vrushabhsonawane98@gmail.com" phone="9099137175" url={Vrushesh} />
        <CardContact name="Harshit Patel" position="General Secretary" email="harshitpatel7117@gmail.com" phone="626347117" url={Harshit} />
        <CardContact name="S.S.S Vardhan" position="UG Representative" email="sesettyssvardhan@gmail.com" phone="8639789316" url={Vp} />
      </div>
      <h1 className='text-center  text-2xl font-bold text-white my-3 p-4'>Team Heads</h1>
      
      <div className='flex flex-col lg:flex-row justify-around items-center mt-5'>
        <CardContact name="Kaushal Thakur" position="Design Team head" email="kaushaljackson.KJ@gmail.com" phone="6266347117" url={Harshit} />
        <CardContact name="Om Pisu" position="Web Team Head" email="pisuom@gmail.com" phone="9940303983" url={Vp} />
        <CardContact name="Krishna Kumar" position="Core Team Head" email="krishnakrk111@gmail.com" phone="8239691473" url={Vp} />
      </div>
      <div className='flex flex-col lg:flex-row justify-around items-center mt-5'>
        <CardContact name="Vignesh Cheepurapalli" position="Sponsorship Team Head" email="cheepurallivignesh@gmail.com" phone="9573950599" url={Vignesh} />
        <CardContact name="Suvetha H" position="Design Team Head" email="suvehk7@gmail.com" phone="9384117607" url={Suvetha} />
        <CardContact name="Shyam Kumar Agarwal" position="Publicity Team Head" email="shyamskyska@gmail.com" phone="8102178395" url={Shyam} />
      </div>
    </div>
  )

}

export default ContactUs;
