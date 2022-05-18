import "./WorkExperience.scss";

export default function WorkExperience() {

    const data = [
        {
            id: 1,
            company: "University of Waterloo",
            dates: "January 2021 - Present",
            title: "Geospatial Researcher",
            img:
                "assets/td.png",
            icon: "assets/waterloo.png",
            desc:
                [
                    "Leveraged knowledge of REST API's to create endpoints that serve the Borderline iOS app using Python.",

                    "Identified spatially significant correlations (using Getis Ord Gi*) and presented mapped findings at the InfoPlus 2021 Conference.",

                    "Conducted spatial data wrangling and management to prepare analysis-ready datasets for further exploratory analysis."

                ],
        },
        {
            id: 1,
            company: "Natural Resource Solutions Inc.",
            dates: "May 2021 - June 2021",
            title: "GIS Technician",
            img:
                "assets/td.png",
            icon: "assets/waterloo.png",
            desc:
                [
                    "Provided mapping and GIS support for various environmental and ecological projects.",

                    "Accurately and efficiently digitized field collected ecological, infrastructure and agricultural geospatial data. ",

                    "Used efficient workflows and deep knowledge of software to keep up with fast paced project turnover. "

                ],
        },
        {
            id: 1,
            company: "TD Bank",
            dates: "September 2020 - December 2020",
            title: "Geospatial Researcher",
            img:
                "assets/td.png",
            icon: "assets/td.png",
            desc:
                [
                    "Identified regions of market opportunity worth $25 million across Canada, based on Environics Analytics data products.",

                    "Conducted financial viability analysis for 7 new branch openings, using socio-demographic census and internal customer data.",

                    "Created web GIS dashboard for daily updates of COVID-19 cases and its impacts on the TD branch network. Used regularly for pandemic planning by executives."

                ],
        },
        {
            id: 1,
            company: "TD Bank",
            dates: "September 2020 - December 2020",
            title: "Geospatial Researcher",
            img:
                "assets/td.png",
            icon: "assets/td.png",
            desc:
                [
                    "Identified regions of market opportunity worth $25 million across Canada, based on Environics Analytics data products.",

                    "Conducted financial viability analysis for 7 new branch openings, using socio-demographic census and internal customer data.",

                    "Created web GIS dashboard for daily updates of COVID-19 cases and its impacts on the TD branch network. Used regularly for pandemic planning by executives."

                ],
        },
        {
            id: 1,
            company: "TD Bank",
            dates: "September 2020 - December 2020",
            title: "Geospatial Researcher",
            img:
                "assets/td.png",
            icon: "assets/td.png",
            desc:
                [
                    "Identified regions of market opportunity worth $25 million across Canada, based on Environics Analytics data products.",

                    "Conducted financial viability analysis for 7 new branch openings, using socio-demographic census and internal customer data.",

                    "Created web GIS dashboard for daily updates of COVID-19 cases and its impacts on the TD branch network. Used regularly for pandemic planning by executives."

                ],
        },


    ];

    return (
        <div className="workexperience">
            <h1>Work Experiences</h1>

            <div className="container">

                {data.map((d) => (
                    <div className="card">

                        <div className="logo">
                            <img src={d.icon} alt="" />
                        </div>

                        <div className="details">
                            <h1>{d.title}</h1>
                            <h2>{d.company} </h2>
                            <h3>{d.dates} </h3>
                        </div>

                        <div className="description">

                            {d.desc.map((p) => (
                                <p>{p}</p>
                            ))}
  

                        </div>
                    </div>

                ))}





            </div>
        </div>

    )
}