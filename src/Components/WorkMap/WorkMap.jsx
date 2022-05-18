import "./WorkMap.scss";
import "leaflet/dist/leaflet.css";
import { Experiences } from "../../experiences";
import { useState, useRef } from "react";
import { Map, Marker, Overlay } from "pigeon-maps"
import { stamenToner } from 'pigeon-maps/providers';


export default function WorkMap() {
    const [selectedCenter, setSelectedCenter] = useState(
        {
            id: -1,
            center: [43.47226771462009, -80.54484557793234],
            zoom: 15,
            active: false
        }
    );




    return (

        <div className="workmap" id="workmap">
            <div className="left">
                

                {(selectedCenter.active) ?

                    <div className="active-card-wrapper">
                        <div className="logo">
                            <img src={Experiences[selectedCenter.id].icon} alt="" />
                        </div>


                        <div className="details">
                            <h1>{Experiences[selectedCenter.id].title}</h1>
                            <h2>{Experiences[selectedCenter.id].company}</h2>
                            <h3>{Experiences[selectedCenter.id].dates}</h3>
                            <div className="skills">
                                {Experiences[selectedCenter.id].skills.map((s) => (
                                    <span> {s}, </span>
                                ))}
                            </div>
                        </div>

                        <div className="description">
                            {Experiences[selectedCenter.id].desc.map((p) => (
                                <p>{p}</p>
                            ))}
                            
                        </div>

                        <div className="backbutton" onClick={() => setSelectedCenter({ id: -1, active: (!selectedCenter.active) })}>Back</div>

                    </div>

                    :

                    <>
                        {Experiences.map((d) => (
                            <div className={(selectedCenter.id == d.id && selectedCenter.active) ? "active-card-wrapper" : "card-wrapper"} onClick={() => setSelectedCenter({ id: d.id, center: d.center, zoom: d.zoom, active: (!selectedCenter.active) })}>

                                <div className="logo">
                                    <img src={d.icon} alt="" />
                                </div>

                                <div className="details">
                                    <h1>{d.title}</h1>
                                    <h2>{d.company}</h2>
                                    <h3>{d.dates}</h3>
                                    <div className="skills">
                                        {d.skills.map((s) => (
                                            <span> {s}, </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="description">
                                    {d.desc.map((p) => (
                                        <p>{p}</p>
                                    ))}
                                </div>






                            </div>

                        ))}

                        <a className="arrow_down">
                            <img src="assets/down.png" alt="" />
                        </a>




                    </>


                }





            </div>
            <div className="right">
                <Map
                    provider={stamenToner}
                    center={selectedCenter.center}
                    zoom={selectedCenter.zoom}
                    animate={true}
                    animateMaxScreens={5}
                >
                    {/* <Marker width={50} anchor={selectedCenter.center} /> */}
                    {Experiences.map((i) => (
                        <Overlay anchor={i.center}>
                            <img src={i.icon} width={50} height={50} alt='' />
                        </Overlay>
                    ))}


                </Map>


            </div>
            



        </div>
    )

}