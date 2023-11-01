import React from 'react'
import CardContact from './CardContact';
// import Vp from '../images/members/vp.png'
// import Vrushesh from '../images/members/vrushesh.jpeg'
// import Harshit from '../images/members/harshit.jpg'
// import Vignesh from '../images/members/vignesh.jpeg'
// import Suvetha from '../images/members/suvetha.jpeg'
// import Shyam from '../images/members/shyam.jpg'
// import Vardhan from '../images/members/vardhan.png'
// import Om from '../images/members/om.jpeg'
// import Krishna from '../images/members/krishna.jpeg'
// import Kaushal from '../images/members/kaushal.jpg'
import koushal from '../images/heads/koushal.jpg'
import suraj from '../images/heads/suraj.jpg'
import sikhar from '../images/heads/sikhar.jpg'
import ankush from '../images/heads/ankush.jpg'
import manish from '../images/heads/manish.jpg'
import shaukat from '../images/heads/shaukat.jpg'
import shreyash from '../images/heads/shreyash.jpg'
import rahul from '../images/heads/rahul.png'
import jeevan from '../images/heads/jeevan.jpg'
import prakhar from '../images/heads/prakhar.jpg'
import shivam from '../images/heads/shivam.jpg'
import megha from '../images/heads/megha.jpg'
const  ContactUs=()=> {
  return (
    <div className=' mt-16 w-full bg-blue-950 pb-5 '>
      <h1 className='text-center text-5xl font-bold text-white my-3 p-4'>Contact Us</h1>
      {/* <div className='flex justify-center items-center'>
        <CardContact name="Kumari Bhawna" position="Vice President" email="bhawna.julia060@gmail.com" phone="9661012727" url={Vp} />
      </div>
      <div className='flex flex-col lg:flex-row justify-around items-center mt-10'>
        <CardContact name="Vrushabh Sonawane" position="PG Representative" email="vrushabhsonawane98@gmail.com" phone="9099137175" url={Vrushesh} />
        <CardContact name="Harshit Patel" position="General Secretary" email="harshitpatel7117@gmail.com" phone="626347117" url={Harshit} />
        <CardContact name="S.S.S Vardhan" position="UG Representative" email="sesettyssvardhan@gmail.com" phone="8639789316" url={Vardhan} />
      </div>
      <h1 className='text-center  text-2xl font-bold text-white my-3 p-4'>Team Heads</h1>
      
      <div className='flex flex-col lg:flex-row justify-around items-center mt-5'>
        <CardContact name="Kaushal Thakur" position="Design Team head" email="kaushaljackson.KJ@gmail.com" phone="6266347117" url={Kaushal} />
        <CardContact name="Om Pisu" position="Web Team Head" email="pisuom@gmail.com" phone="9940303983" url={Om} />
        <CardContact name="Krishna Kumar" position="Core Team Head" email="krishnakrk111@gmail.com" phone="8239691473" url={Krishna} />
      </div>
      <div className='flex flex-col lg:flex-row justify-around items-center mt-5'>
        <CardContact name="Vignesh Cheepurapalli" position="Sponsorship Team Head" email="cheepurallivignesh@gmail.com" phone="9573950599" url={Vignesh} />
        <CardContact name="Suvetha H" position="Design Team Head" email="suvehk7@gmail.com" phone="9384117607" url={Suvetha} />
        <CardContact name="Shyam Kumar Agarwal" position="Publicity Team Head" email="shyamskyska@gmail.com" phone="8102178395" url={Shyam} />
      </div> */}
      <div className='flex justify-center items-center'>
        <CardContact name="Koushal Kumar" position="Vice President" email="kaushaljackson.kj@gmail.com" phone="8709192811" url={koushal} />
      </div>
        {/* <CardContact name="S.S.S Vardhan" position="UG Representative" email="sesettyssvardhan@gmail.com" phone="8639789316" url={Vardhan} /> */}
      <div className='flex flex-col gap-2 lg:flex-row justify-around items-center mt-10 max-w-[1500px] mx-auto'>
        <CardContact name="Suraj Padmanabh Shet" position="PG Representative" email="surajshet5555@gmail.com" phone="8660292319" url={suraj} />
        <CardContact name="Ankush Kumar" position="Fugacity Co-ordinator" email="ankumar505@gmail.com" phone="8651812624" url={ankush} />
      </div>
      <h1 className='text-center  text-2xl font-bold text-white my-3 p-4 underline'>Team Heads</h1>
      
      <div id='tech' className='flex flex-col gap-2 lg:flex-row justify-around items-center mt-5 max-w-[1500px] mx-auto'>
        <CardContact name="Shaukat Ali" position="Web Team Head" email="shau8122@gmail.com" phone="7654831436" url={shaukat} />
        <CardContact name="Manish vaghmashi" position="Core Team Head" email="manishvaghamashi1011@gmail.com" phone="9316614261" url={manish} />
        <CardContact name="Shreyash Jay" position="Core Team Head" email="shreyashjay5@gmail.com" phone="9608407527" url={shreyash} />
      </div>
      <div id='design' className='flex flex-col gap-2 lg:flex-row justify-around items-center mt-5 max-w-[1500px] mx-auto'>
        <CardContact name="Shikhar Samrat" position="General Secretary" email="shikharsamrat22@gmail.com" phone="6205324328" url={sikhar} />
        <CardContact name="Rahul Rajwar" position="Design Team head" email="rahulbilturajwar@gmail.com" phone="8092573150" url={rahul} />
        <CardContact name="Thummalapelli Jeevan Kumar" position="Design Team Head" email="jeevankumar.t1709@gmail.com" phone="9121931784" url={jeevan} />
      </div>
      <div className='flex flex-col lg:flex-row gap-2 justify-around items-center mt-5 max-w-[1500px] mx-auto'>
        <CardContact name="Prakhar Jain" position="Sponsorship Team Head" email="Prakhar.jain3333@gmail.com" phone="7727082097" url={prakhar} />
        <CardContact name="Megha Singh" position="Sponsorship Team Head" email="meghasingh1004@gmail.com" phone="8271226399" url={megha} />
        <CardContact name="Shivam Kumar Sharma" position="Sponsorship Team Head" email="iamshivamkumarsharma@gmail.com" phone="9939893600" url={shivam} />
      </div>

    </div>
  )

}

export default ContactUs;
