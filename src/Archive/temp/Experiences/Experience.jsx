import React from "react";
import "./Experience.scss";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data";


const data = [
    {
        id: 1,
        title: "Social Media App",
        img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
        dates: "Jan 2021 - Feb 2022",
    },
    {
        id: 2,
        title: "Rampa UI Design",
        img:
            "https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900",
        dates: "Jan 2021 - Feb 2022",
    },
    {
        id: 3,
        title: "E-commerce Web Design",
        img:
            "https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900",
        dates: "Jan 2021 - Feb 2022",
    },
    {
        id: 4,
        title: "Relax Mobile App",
        img:
            "https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900",
        dates: "Jan 2021 - Feb 2022",
    },
    {
        id: 5,
        title: "Hero Web Design",
        img:
            "https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900",
        dates: "Jan 2021 - Feb 2022",
    },
    {
        id: 6,
        title: "Banking App",
        img:
            "https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900",
        dates: "Jan 2021 - Feb 2022",
    },
    {
        id: 6,
        title: "Banking App",
        img:
            "https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900",
        dates: "Jan 2021 - Feb 2022",
    },
    {
        id: 6,
        title: "Banking App",
        img:
            "https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900",
        dates: "Jan 2021 - Feb 2022",
    },
    {
        id: 6,
        title: "Banking App",
        img:
            "https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900",
        dates: "Jan 2021 - Feb 2022",
    },
    {
        id: 6,
        title: "Banking App",
        img:
            "https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900",
        dates: "Jan 2021 - Feb 2022",
    },
];

export default function Experience() {
    return (
        <div className="experience" id="experience">
            
            <div class="card-container">
            <h1>Work Experiences</h1>
                {data.map((d) => (
                    <div class="card">
                        <header class="article-header">
                            <div>
                                <div class="category-title">
                                    <span class="date">{d.dates}</span>
                                </div>
                            </div>
                            <h2 class="article-title">
                                {d.title}
                            </h2>
                        </header>
                        <div class="author">
                            <div class="profile"></div>
                            <div class="info">
                                <div class="caption">Author</div>
                                <div class="name">David Hose</div>
                            </div>
                        </div>
                        <div class="tags">
                            <div>JavaScript</div>
                            <div>HTML</div>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    )
}