import React, { useEffect, useState } from "react";
import AOS from "aos";

function Schedule() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const backgroundImage = `/images/back_about2.png`;
    const [day, setDay] = useState("Day-1");
    useEffect(() => {
        AOS.init({ duration: 2000 });
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div
            className="pt-10 w-full bg-darkSecondary pb-5"
            // style={{
            //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
            //     backgroundSize: "cover",
            // }}
        >
            <h1 className="text-center text-3xl md:text-5xl font-bold font-nunito text-darkMain my-3 p-4" data-aos='fade-down'>
                Schedule
            </h1>
            <div className="flex justify-center items-center gap-10">
                <button
                    className={`px-5 rounded-lg  py-2 bg-darkPrimary text-lightPrimary m-2 font-bold text-xl ${day === "Day-1" && "underline"
                        }`}
                    onClick={() => setDay("Day-1")}
                    data-aos='fade-right'
                >
                    Day 1
                </button>
                <button
                    className={`px-5 rounded-lg bg-darkPrimary text-lightPrimary py-2  m-2 font-bold text-xl ${day === "Day-2" && "underline"
                        }`}
                    onClick={() => setDay("Day-2")}
                    data-aos='fade-left'
                >
                    Day 2
                </button>
            </div>

            {day === "Day-1" && (
                <>
                    <div
                        id="Day-1"
                        className="flex flex-col gap-2 justify-around items-center mt-10 max-w-[1000px] mx-auto" role='tabpanel'
                        style={
                            {
                                position: 'relative',
                            }
                        }
                    >

                        <div className="row schedule-item text-white"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                            data-aos='fade-up'
                        >
                            <div className="col-md-2" style={{ fontSize: '1.3rem', marginTop: 'auto', marginBottom: 'auto', marginRight: 30, marginLeft: 20 }}>
                                <time>09:30 AM</time>
                            </div>
                            <div className="col-md-100">
                                <h4 style={{
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold'
                                }}
                                >Registration</h4>
                                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                            </div>
                        </div>
                        <div className="row schedule-item text-white"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                            data-aos='fade-up'
                        >
                            <div className="col-md-2" style={{ fontSize: '1.3rem', marginTop: 'auto', marginBottom: 'auto', marginRight: 30, marginLeft: 20 }}>
                                <time>09:30 AM</time>
                            </div>
                            <div className="col-md-100">
                                <h4 style={{
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold'
                                }}
                                >Registration</h4>
                                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                            </div>
                        </div>
                        <div className="row schedule-item text-white"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                            data-aos='fade-up'
                        >
                            <div className="col-md-2" style={{ fontSize: '1.3rem', marginTop: 'auto', marginBottom: 'auto', marginRight: 30, marginLeft: 20 }}>
                                <time>09:30 AM</time>
                            </div>
                            <div className="col-md-100">
                                <h4 style={{
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold'
                                }}
                                >Registration</h4>
                                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                            </div>
                        </div>
                        <div className="row schedule-item text-white"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                            data-aos='fade-up'
                        >
                            <div className="col-md-2" style={{ fontSize: '1.3rem', marginTop: 'auto', marginBottom: 'auto', marginRight: 30, marginLeft: 20 }}>
                                <time>09:30 AM</time>
                            </div>
                            <div className="col-md-100">
                                <h4 style={{
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold'
                                }}
                                >Registration</h4>
                                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                            </div>
                        </div>
                        <div className="row schedule-item text-white"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                            data-aos='fade-up'
                        >
                            <div className="col-md-2" style={{ fontSize: '1.3rem', marginTop: 'auto', marginBottom: 'auto', marginRight: 30, marginLeft: 20 }}>
                                <time>09:30 AM</time>
                            </div>
                            <div className="col-md-100">
                                <h4 style={{
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold'
                                }}
                                >Registration</h4>
                                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                            </div>
                        </div>


                    </div>

                </>
            )}
            {day === "Day-2" && (
                <>
                    <div
                        id="Day-2"
                        className="flex flex-col gap-2 lg:flex-row justify-around items-center mt-10 max-w-[1000px] mx-auto">
                        {/* Enter Day-2 Schedule */}
                    </div>
                </>
            )}
        </div>
    );
};

export default Schedule;
