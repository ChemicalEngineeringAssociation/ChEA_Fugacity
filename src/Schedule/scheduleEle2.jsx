import React, { useEffect, useState } from "react";
import AOS from "aos";

function ScheduleEle2(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isMobile = windowWidth <= 768;
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
    <>
    <div className="row schedule-item text-white"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: isHovered ? 'transparent' : 'rgba(0,0,0,0.5)',
                                transition: 'background-color 0.3s ease',
                                width: !isMobile?'70%':'100%',
                            }}
                            //data-aos='fade-up'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="col-md-2" style={{ fontSize: '1rem', marginTop: 'auto', marginBottom: 'auto', marginRight: 30, marginLeft: 20,}}>
                                <time>{props.time}</time>
                            </div>
                            <div className="col-md-100">
                                <h4 style={{
                                    //color: 'white',
                                    fontSize: '1.3rem',
                                    fontWeight: 'bold'
                                }}
                                className="bg text-DarkMain"
                                >{props.event}</h4>
                                <p>{props.description}</p>
                            </div>
                        </div>
                        <hr style={{ width:isMobile? '100%':'70%' }} data-aos='fade-right'></hr>
    </>
    );
    
};

export default ScheduleEle2;
