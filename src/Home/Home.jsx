import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// import TypingEffect from "react-typing-effect";
import "./Home.css";
import About from "../About/About";
import Schedule from "../Schedule/schedule";

const Home = () => {
  const Fugacity = `/images/logos/Fugacity.webp`;
  const backgroundImage = `/images/Back.png`;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
    <div id="home">
      <section
        className=" h-[100vh]  flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <>
          {/* ======= Hero Section ======= */}
          <section id="hero">
            <div
              className="hero-container"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <h1 className="mb-4 pb-0">
                Fugacity
                <br />
                <span>Chemical Engineering</span> Fest
              </h1>
              <p className="mb-4 pb-0">
                India Institute of Technology, Kharagpur
              </p>
              <p className="mb-4 pb-0">30 March 2024 - 31 March 2024</p>
              <a
                href="https://www.youtube.com/watch?v=7PIji8OubXU"
                className="glightbox play-btn mb-4"
              />
              {/* <a href="#about" class="about-btn scrollto">About The Event</a> */}
            </div>
          </section>
          {/* End Hero Section */}
          <a
            href="#"
            className="back-to-top d-flex align-items-center justify-content-center"
          >
            <i className="bi bi-arrow-up-short" />
          </a>
          <Helmet>
            {/* Vendor JS Files */}
            <script src="assets/vendor/aos/aos.js"></script>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            {/* Template Main JS File */}
            <script src="assets/js/main.js"></script>
          </Helmet>
          <Helmet>
            {/* Google Fonts */}
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800"
              rel="stylesheet"
            />

            {/* Vendor CSS Files */}
            <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
            <link
              href="assets/vendor/bootstrap/css/bootstrap.min.css"
              rel="stylesheet"
            />
            {/* Uncomment if needed */}
            {/* <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/> */}
            <link
              href="assets/vendor/glightbox/css/glightbox.min.css"
              rel="stylesheet"
            />
            {/* Uncomment if needed */}
            {/* <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/> */}

            {/* Template Main CSS File */}
            <link href="assets/css/style.css" rel="stylesheet" />
          </Helmet>
        </>

        {/*         
        <div className="flex w-full h-[90%] flex-col md:flex-row justify-around">
          <div className="flex justify-center items-center flex-col  h-full sm:w-full md:w-1/2 p-3  text-center">
            <section className=" relative w-full h-1/4 flex justify-center items-center  text-center">
              <h2
                style={{ WebkitTextStroke: "2px #f7f7f7" }}
                className=" text-transparent text-[6em] md:text-[8em] absolute "
              >
                Fugacity{" "}
              </h2>
              <h2 className="animatEffect text-blue-500 text-[6em] md:text-[8em] absolute  ">
                Fugacity{" "}
              </h2>
            </section>
            <h2 className="text-xl md:text-2xl font-bold mt-5 text-[#B3B3B3] font-avenir"> */}
        {/* <TypingEffect
                text={["", "Register Now!"]}
                speed={400}
                eraseDelay={1000}
              /> */}
        {/* 30th March 2023-31st March 2023
            </h2>
            <a
              href="/register"
              className=" rounded-[4px] bg-blue-600 mt-5 text-lightPrimary py-2 font-bold text-xl   hover:bg-[#20CD8D] focus:ring-4 focus:outline-none focus:ring-blue-300  sm:w-auto px-5  text-center"
            >
              Register Now
            </a> */}
        {/* <div className="flex mt-10 justify-around w-full items-center">
              <h1 className="text-white text-lg">Sponsored By</h1>
              <img src={Fugacity} className="" alt="logo" width={100} />
              <img src={Fugacity} className="" alt="logo" width={100} />
              <img src={Fugacity} className="" alt="logo" width={100} />
            </div> */}
        {/* </div>

          <div className=" flex justify-center items-center  sm:w-full md:w-1/2 h-full col-lg-6  order-1 order-lg-2 header-img text-center">
            <img src={Fugacity} className="" alt="logo" width={400} />
          </div>
        </div> */}
      </section>
      <About />
      {/* <Merchandise/> */}
    </div>
    <About/>
    </>
  );
};

export default Home;
