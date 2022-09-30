import React from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import { useState, useEffect } from "react";
import { FeaturedProjects, StaticMapProjects, WebMapProjects, WebDevProjects } from "../../projects";

export default function Portfolio() {
    const [selected, setSelected] = useState("webdev");
    const [clickedItem, setClickedItem] = useState(
        {
            id: -1,
            active: false,
            category: StaticMapProjects,
        }
    );
    const [data, setData] = useState([]);



    function get_category(s) {
        if (s === "featured") {
            return FeaturedProjects;
        } else if (s === "staticmaps") {
            return StaticMapProjects;
        } else if (s === "webmaps") {
            return WebMapProjects;
        } else {
            return WebDevProjects;
        }
    }

    const list = [
        {
            id: "webdev",
            title: "Web Development"
        },
        {
            id: "staticmaps",
            title: "Static Maps"
        },
        {
            id: "webmaps",
            title: "Web Maps"
        }
    ];

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(FeaturedProjects);
                break;
            case "staticmaps":
                setData(StaticMapProjects);

                break;
            case "webmaps":
                setData(WebMapProjects);
                break;
            case "webdev":
                setData(WebDevProjects);
                break;
            default:
                setData(StaticMapProjects);

        }
    }, [selected]);



    return (
        <div className="portfolio" id="portfolio">
            {(!clickedItem.active) ?

                <>
                    <h1 className="go_away_mobile">Portfolio</h1>
                    <ul className="go_away_mobile">
                        {list.map(item => (
                            <PortfolioList
                                title={item.title}
                                active={selected === item.id}
                                setSelected={setSelected}
                                id={item.id}
                            />
                        ))}
                    </ul>

                </>

                :
                <>
                </>

            }

            <div className="container">

                {(clickedItem.active) ?

                    <div className="item-active" >


                        <div className="image">
                            <img src={clickedItem.category[clickedItem.id].img} alt="" />
                        </div>

                        <div className="description">
                            <h3>{clickedItem.category[clickedItem.id].title}</h3>
                            <p>{clickedItem.category[clickedItem.id].desc}</p>


                        </div>



                        {clickedItem.category === WebDevProjects &&
                            <>
                                <a className="github" href={clickedItem.category[clickedItem.id].github} target="_blank"> Github </a>
                                <a className="demo" href={clickedItem.category[clickedItem.id].link} target="_blank"> Demo </a>
                            </>
                        }

                        {clickedItem.category === StaticMapProjects &&
                            <>
                                <a href={clickedItem.category[clickedItem.id].link} target="_blank"> <p>View Map</p> </a>
                            </>
                        }


                        {clickedItem.category === WebMapProjects &&
                            <>
                                <a href={clickedItem.category[clickedItem.id].link} target="_blank"> <p>View Web Map</p></a>
                            </>
                        }





                        <div className="backbutton" onClick={() => setClickedItem({ id: -1, active: (!clickedItem.active), category: get_category(selected) })}>Back</div>




                    </div>


                    :

                    <>

                        {data.map((d) => (
                            <div className="item" onClick={() => setClickedItem({ id: d.id, active: (!clickedItem.active), category: get_category(selected) })}>
                                <img src={d.img} alt="" />
                                <h3>{d.title}</h3>
                            </div>
                        ))}

                    </>

                }


            </div>

            {(!clickedItem.active) ?

                <ul className="go_away_mobile_bottom">
                    {list.map(item => (
                        <PortfolioList
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                        />
                    ))}
                </ul>

                :
                <>
                </>

            }
        </div>
    )
}