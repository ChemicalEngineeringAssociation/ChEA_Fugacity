import React, { useEffect } from "react";
import CardContact from "./CardContact";
const ContactUs = () => {
  const koushal = `/images/heads/koushal.webp`;
  const suraj = `/images/heads/suraj.webp`;
  const sikhar = `/images/heads/sikhar.webp`;
  const ankush = `/images/heads/ankush.webp`;
  const manish = `/images/heads/manish.webp`;
  const shaukat = `/images/heads/shaukat.webp`;
  const shreyash = `/images/heads/shreyash.webp`;
  const rahul = `/images/heads/Rahul.jpg`;
  const jeevan = `/images/heads/jeevan.webp`;
  const prakhar = `/images/heads/prakhar.webp`;
  const shivam = `/images/heads/shivam.webp`;
  const megha = `/images/heads/megha.webp`;
  const rupesh = `/images/heads/Rupesh.jpeg`;
  const debmitra = `/images/heads/Debmitra.jpg`;
  const hod = `/images/heads/HOD.jpg`;
  const facad = `/images/heads/Facad.jpg`;
  const proffIncharge = `/images/heads/proffIncharge.png`;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className=" pt-36 w-full bg-darkSecondary pb-5 ">
      <h1 className="text-center text-3xl md:text-5xl font-bold font-nunito text-darkMain my-3 p-4">
        Acknowledgement
      </h1>
      <div
        id="prof"
        className="flex flex-col gap-2 lg:flex-row justify-around items-center mt-10 max-w-[1000px] mx-auto"
      >
        <CardContact
          name="Prof. B.C. Meikap"
          position="HOD Chemical Engineering Department"
          email="bcmeikap@che.iitkgp.ac.in"
          phone="3222-282249"
          url={hod}
        />

        <CardContact
          name="Prof. Koustuv Ray"
          position="ChEA Incharge"
          email="koustuv@che.iitkgp.ac.in"
          phone="3222-284582"
          url={facad}
        />
        <CardContact
          name="Prof. Swambabu Varanasi"
          position="Professor Incharge"
          email="swambabu@che.iitkgp.ac.in"
          phone="3222-284582"
          url={proffIncharge}
        />
      </div>
      <h1 className="text-center text-3xl md:text-5xl font-bold font-nunito text-darkMain my-3 p-4">
        Our Team
      </h1>

      <div className="flex justify-center items-center">
        <CardContact
          name="Koushal Kumar"
          position="Vice President"
          email="kaushaljackson.kj@gmail.com"
          phone="8709192811"
          url={koushal}
        />
      </div>
      {/* <CardContact name="S.S.S Vardhan" position="UG Representative" email="sesettyssvardhan@gmail.com" phone="8639789316" url={Vardhan} /> */}
      <div className="flex flex-col gap-2 lg:flex-row justify-around items-center mt-10 max-w-[1000px] mx-auto">
        <CardContact
          name="Suraj Padmanabh Shet"
          position="PG Representative"
          email="surajshet5555@gmail.com"
          phone="8660292319"
          url={suraj}
        />
        <CardContact
          name="Ankush Kumar"
          position="Fugacity Co-ordinator"
          email="ankumar505@gmail.com"
          phone="8651812624"
          url={ankush}
        />
        <CardContact
          name="Rupesh Narayan"
          position="UG Representative"
          email="rupeshnarayan06@gmail.com"
          phone="9971968380"
          url={rupesh}
        />
      </div>
      <h1 className="text-center font-nunito text-darkMain  text-2xl font-bold my-3 p-4 underline">
        Team Heads
      </h1>

      <div
        id="tech"
        className="flex flex-col gap-2 lg:flex-row justify-around items-center mt-5 max-w-[1000px] mx-auto"
      >
        <CardContact
          name="Shaukat Ali"
          position="Web Team Head"
          email="shau8122@gmail.com"
          phone="7654831436"
          url={shaukat}
        />
        {/* <CardContact name="Manish vaghmashi" position="Core Team Head" email="manishvaghamashi1011@gmail.com" phone="9316614261" url={manish} />
        <CardContact name="Shreyash Jay" position="Core Team Head" email="shreyashjay5@gmail.com" phone="9608407527" url={shreyash} /> */}
        <CardContact
          name="Rahul Rajwar"
          position="Design Team head"
          email="rahulbilturajwar@gmail.com"
          phone="8092573150"
          url={rahul}
        />
        <CardContact
          name="Thummalapelli Jeevan Kumar"
          position="Design Team Head"
          email="jeevankumar.t1709@gmail.com"
          phone="9121931784"
          url={jeevan}
        />
      </div>
      {/* <div id='design' className='flex flex-col gap-2 lg:flex-row justify-around items-center mt-5 max-w-[1500px] mx-auto'>
      </div> */}
      <div className="flex flex-col lg:flex-row gap-2 justify-around items-center mt-5 max-w-[1500px] mx-auto">
        {/* <CardContact name="Prakhar Jain" position="Sponsorship Team Head" email="Prakhar.jain3333@gmail.com" phone="7727082097" url={prakhar} /> */}
        <CardContact
          name="Shikhar Samrat"
          position="General Secretary"
          email="shikharsamrat22@gmail.com"
          phone="6205324328"
          url={sikhar}
        />
        <CardContact
          name="Megha Singh"
          position="Sponsorship Team Head"
          email="meghasingh1004@gmail.com"
          phone="8271226399"
          url={megha}
        />
        <CardContact
          name="Shivam Kumar Sharma"
          position="Sponsorship Team Head"
          email="iamshivamkumarsharma@gmail.com"
          phone="9939893600"
          url={shivam}
        />
        <CardContact
          name="Debmitra Mukherjee"
          position="Sponsorship Team Head"
          email="debmitra999@gmail.com"
          phone="7003727109"
          url={debmitra}
        />
      </div>
    </div>
  );
};

export default ContactUs;
