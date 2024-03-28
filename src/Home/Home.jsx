import React, { useEffect , useState} from "react";
import SpeakerCard from "../SpeakerCard/SpeakerCard"; // Import the SpeakerCard component
import About from "../About/About";
import Schedule from "../Schedule/schedule";
import "./Home.css";

const Home = () => {
  const backgroundImage = `/images/Back.png`;
  const Fugacity = "/images/logos/Fugacity1.png";
  const ved = `${process.env.PUBLIC_URL}/images/vedanta colored logo.png`;
  const Altamira = `${process.env.PUBLIC_URL}/images/Altamira Logo.png`;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth<=768);
  const ismobile = window.innerWidth <= 768;

  const speakers = [
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      description: "Description of John Doe",
    },
    {
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      description: "Description of Jane Smith",
    },
    {
      name: "David Johnson",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      description: "Description of David Johnson",
    },
    // Add more speakers as needed
  ];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div id="home">
      <section
        className="h-auto lg:h-[100vh] flex  flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        
        <div className="flex w-full h-[50vh] mt-24 lg:mt-0  lg:h-[80%] flex-col lg:flex-row justify-around">
          <div className="flex justify-center items-center flex-col h-full sm:w-full lg:w-1/2 p-3 text-center">
          <hr 
            style={
              {
                height: ismobile?"400px":"20px",
                backgroundColor: "transparent",
              }
            }
            ></hr>
            <section className="relative w-full h-1/2 lg:h-1/4 flex justify-center items-center text-center">
              <h2
                style={{ WebkitTextStroke: "2px #f7f7f7" }}
                className="text-transparent text-[6em] md:text-[8em] absolute"
              >
                Fugacity{" "}
              </h2>
              <h2 className="animatEffect text-blue-500 text-[6em] md:text-[8em] absolute">
                Fugacity{" "}
              </h2>
            </section>
            <hr 
            style={
              {
                height: ismobile?"10px":"20px",
                backgroundColor: "transparent",
              }
            }
            ></hr>
            <h2 className="text-xl md:text-2xl font-bold mt-5 text-[#B3B3B3] font-avenir">
              30th March 2023-31st March 2023
            </h2>
            <a
              href="/events"
              className="rounded-[4px] bg-blue-600 mt-5 text-lightPrimary py-2 font-bold text-xl hover:bg-[#20CD8D] focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto px-5 text-center"
            >
              Register Now
            </a>
          </div>
          <div className="flex justify-center self-center items-center w-1/2 h-full text-center">
            <img src={Fugacity} className="" alt="logo" width={600} />
          </div>
        </div>
        <hr 
            style={
              {
                height: ismobile?"25px":"0px",
                backgroundColor: "transparent",
              }
            }
            ></hr>
        <div className="flex h-[15%] lg:bg-black flex-col p-5 gap-4 max-w-[700px] mb-12 lg:flex-row justify-around">
          <h1 className="text-white font-bold text-center text-2xl my-auto">
            Sponsored By:
          </h1>
          <img src={ved} alt="" />
          <img src={Altamira} alt="" />
        </div>
      </section>
      <About />
      {/* <section className=" py-10 bg-darkPrimary">
        <div className="container mx-auto flex justify-center items-center flex-col">
          <h2 className="text-3xl font-semibold text-white mb-8">Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
