export const FeaturedProjects = [
    {
        id: 0,
        featured: true,
        title: "Guess That Country - Web Game",
        github: "https://github.com/anugra96/GuessThatCountry_Geography_Web_Game_REACT_FLASK",
        link: "https://fast-woodland-19805.herokuapp.com/",
        img: "",
        tools: 
            [
                "React Frontend",  
                "Leaflet.js", 
                "Turf.js",
                "Flask Python Backend",
                "shapely",
                "geojson", 
                "pyproj",
                "leaflet"
            ],
        desc: "Responsive web based geography game. Each round a random country is displayed, and player has 5 hints (direction, distance) to determine the country. ReactJS frontend supported by LeafletJS, Turf.js and Mapbox libraries. Flask backend API for geographic calculations such as Great Circle distance and Rhumb bearing direction. Hosted on Heroku."
    },
    {
        id: 1,
        featured: true,
        title: "MyGov - Spatial Data Visualization Web App",
        github: "https://github.com/anugra96/MyGov_Web_GIS_App_FLASK",
        link: "",
        img: "",
        tools: 
            [
                "Flask Python",  
                "Jupyter Notebook", 
                "Leaflet",
            ],
        desc: "Developed a web GIS application using Flask, Jupyter Notebook and Leaflet. The app visualizes the voting record of wards in Brampton, ON using a choropleth map. Features include a dynamic pop-ups providing city councilor contact info based on user's current location."
    },
    {
        id: 2,
        featured: true,
        title: "Spatial Analysis of Noise Complaints Data - NYC",
        github: "",
        link: "https://uwaterloo.maps.arcgis.com/apps/dashboards/595e40b82aed4f5cab89e8657e5d811e",
        img: "",
        tools: 
            [
                "ArcGIS Pro/Online",
            ],
        desc: "Developed a web GIS application using Flask, Jupyter Notebook and Leaflet. The app visualizes the voting record of wards in Brampton, ON using a choropleth map. Features include a dynamic pop-ups providing city councilor contact info based on user's current location."
    },
];

export const StaticMapProjects = [
    {
        id: 0,
        featured: true,
        title: "Kutupalong Flood Mapping and Hazard Analysis",
        img:"assets/kutupalong.jpg",
        github: "",
        link: "assets/kutupalong_full_size.png",
        tools: 
            [
                "ArcGIS Pro",
                "Google Earth Engine",
                "SNAP",
                "Spatial Analysis",
                "Flood Modelling"
            ],
        desc: "A project to quantify flood impact on infrastructure and population of refugee camps in Bangladesh. "
    },
    {
        id: 1,
        featured: true,
        title: "Waterloo Crime Occurrence Spatial Analysis",
        img:"assets/waterloo_crime_occurrences.jpg",
        github: "",
        link: "assets/waterloo_crime_occurrences.pdf",
        tools: 
            [
                "ArcGIS Pro",  
                "Python", 
            ],
        desc: "Exploratory spatial analysis conducted on the crime occurrences in the City of Waterloo in 2018. Resulting in static maps showing spatial distribution/spread and spatial correlation between crime occurrences and poverty data."
    },
    {
        id: 2,
        featured: true,
        title: "Noise Pollution Impact from Places of Religion in Brampton, ON",
        github: "",
        link: "assets/mosque_azan_impact_zones_brampton_FULL.png",
        img:"assets/mosque.png",
        tools: 
            [
                "ArcGIS Pro/Online",
                "Jupyter Notebooks"
            ],
        desc: "Used Brampton Open Data and academic data sources to analyze the impact of noise from religious buildings on the surrounding community and Brampton as a whole. "
    },
    {
        id: 3,
        featured: true,
        title: "Visualizing 2016 Household Income in Brampton, ON",
        github: "",
        link: "assets/household_income_map_brampton_FULL.jpg",
        img:"assets/household_income_map_brampton.jpg",
        tools: 
            [
                "ArcGIS Pro/Online",
                "Jupyter Notebooks"
            ],
        desc: "A visualization showing the spatial distribution of household income in 2016 in Brampton, ON. There is a clear concentration of low income households in Downtown Brampton and higher household incomes in the periphery."
    },
    {
        id: 4,
        featured: true,
        title: "Visualizing Urban and Natural Features on Brampton, ON",
        github: "",
        link: "assets/natural_urban_brampton_FULL.png",
        img:"assets/natural_urban_brampton.jpg",
        tools: 
            [
                "ArcGIS Pro/Online",
            ],
        desc: "A visualization both natural and urban forms of Brampton, ON in harmony. This includes buildings, roads, green cover and water bodies."
    },

];

export const WebMapProjects = [
    {
        id: 0,
        featured: true,
        title: "Walkability to Transit Nodes in Toronto, ON",
        github: "",
        link: "https://api.mapbox.com/styles/v1/borderlinedataresearch/ckzre2t3i000j14nswkawbfz5.html?title=view&access_token=pk.eyJ1IjoiYm9yZGVybGluZWRhdGFyZXNlYXJjaCIsImEiOiJja3hjZG03bjYwMjdiMm5wZTIyN3dwZ3N4In0.WfLutrEyBlzP5tGoqmH0YA&zoomwheel=true&fresh=true#9.64/43.716/-79.4157",
        img: "assets/toronto_transit.png",
        tools: 
            [
                "ArcGIS Pro",
                "Mapbox Studio",
                "Python"
            ],
        desc: "Calculated and visualized walk times to transit nodes (3 mins, 5 mins, 10 mins) to evaluate public transportation accessibility and induce further research into spatial inequalities in the city."
    },
    {
        id: 1,
        featured: true,
        title: "Walkability to Transit Nodes in Ottawa, ON",
        github: "",
        link: "https://api.mapbox.com/styles/v1/borderlinedataresearch/cl2i1q1vp001j15o8xyshr840.html?title=view&access_token=pk.eyJ1IjoiYm9yZGVybGluZWRhdGFyZXNlYXJjaCIsImEiOiJja3hjZG03bjYwMjdiMm5wZTIyN3dwZ3N4In0.WfLutrEyBlzP5tGoqmH0YA&zoomwheel=true&fresh=true#10.51/45.3831/-75.6749",
        img: "assets/ottawa_transit.png",
        tools: 
            [
                "ArcGIS Pro",
                "Mapbox Studio",
                "Python"
            ],
        desc: "Calculated and visualized walk times to transit nodes (3 mins, 5 mins, 10 mins) to evaluate public transportation accessibility and induce further research into spatial inequalities in the city."
    },
    {
        id: 2,
        featured: true,
        title: "Walkability to Transit Nodes in Waterloo, ON",
        github: "",
        link: "https://api.mapbox.com/styles/v1/borderlinedataresearch/ckydbs3244rwy14s80gz4ggzp.html?title=view&access_token=pk.eyJ1IjoiYm9yZGVybGluZWRhdGFyZXNlYXJjaCIsImEiOiJja3hjZG03bjYwMjdiMm5wZTIyN3dwZ3N4In0.WfLutrEyBlzP5tGoqmH0YA&zoomwheel=true&fresh=true#11.37/43.4561/-80.4986",
        img: "assets/waterloo_transit.png",
        tools: 
            [
                "ArcGIS Pro",
                "Mapbox Studio",
                "Python"
            ],  
        desc: "Calculated and visualized walk times to transit nodes (3 mins, 5 mins, 10 mins) to evaluate public transportation accessibility and induce further research into spatial inequalities in the city."
    },
    {
        id: 3,
        featured: true,
        title: "Walkability to Transit Nodes in Hamilton, ON",
        github: "",
        link: "https://api.mapbox.com/styles/v1/borderlinedataresearch/cl2i1440o001h15o8w0rcqfhi.html?title=view&access_token=pk.eyJ1IjoiYm9yZGVybGluZWRhdGFyZXNlYXJjaCIsImEiOiJja3hjZG03bjYwMjdiMm5wZTIyN3dwZ3N4In0.WfLutrEyBlzP5tGoqmH0YA&zoomwheel=true&fresh=true#12.39/43.23897/-79.84247",
        img: "assets/hamilton_transit.png",
        tools: 
            [
                "ArcGIS Pro",
                "Mapbox Studio",
                "Python"
            ],
        desc: "Calculated and visualized walk times to transit nodes (3 mins, 5 mins, 10 mins) to evaluate public transportation accessibility and induce further research into spatial inequalities in the city."
    },
    {
        id: 4,
        featured: true,
        title: "Spatial Analysis of Noise Complaints Data - NYC",
        github: "",
        img: "assets/noise_complaints_nyc.png",
        link: "https://uwaterloo.maps.arcgis.com/apps/mapviewer/index.html?webmap=6ab510ed15284a74994a29ac03ed7924",
        tools: 
            [
                "ArcGIS Pro/Online",
            ],
        desc: "Identified spatially significant correlations (using Getis Ord Gi*) between noise complaints and the geographic distribution of marginalized people in New York City. Created GIS dashboard to present findings and induce further analysis and research. Presented findings at the InfoPlus 2021 Conference."
    },
];


export const WebDevProjects = [
    {
        id: 0,
        featured: true,
        title: "Guess That Country - Web Game",
        github: "https://github.com/anugra96/GuessThatCountry_Geography_Web_Game_REACT_FLASK",
        link: "https://fast-woodland-19805.herokuapp.com/",
        img: "assets/guess_that_country.png",
        tools: 
            [
                "React Frontend",  
                "Leaflet.js", 
                "Turf.js",
                "Flask Python Backend",
                "shapely",
                "geojson", 
                "pyproj",
                "leaflet"
            ],
        desc: "Responsive web based geography game. Each round a random country is displayed, and player has 5 hints (direction, distance) to determine the country. ReactJS frontend supported by LeafletJS, Turf.js and Mapbox libraries. Flask backend API for geographic calculations such as Great Circle distance and Rhumb bearing direction. Hosted on Heroku."
    },
    {
        id: 1,
        featured: true,
        title: "MyGov - Spatial Data Visualization Web App",
        github: "https://github.com/anugra96/MyGov_Web_GIS_App_FLASK",
        link: "https://youtu.be/6CEKjqr6XbU",
        img: "assets/mygov.png",
        tools: 
            [
                "Flask Python",  
                "Jupyter Notebook", 
                "Leaflet",
            ],
        desc: "Developed a web GIS application using Flask, Jupyter Notebook and Leaflet. The app visualizes the voting record of wards in Brampton, ON using a choropleth map. Features include a dynamic pop-ups providing city councilor contact info based on user's current location."
    },
    {
        id: 2,
        featured: true,
        title: "Anugra Shah Portfolio Website",
        github: "",
        link: "https://superlative-pastelito-e93ce4.netlify.app/",
        img: "assets/personal_website.png",
        tools: 
            [
                "ArcGIS Pro/Online",
            ],
        desc: "Developed a web GIS application using Flask, Jupyter Notebook and Leaflet. The app visualizes the voting record of wards in Brampton, ON using a choropleth map. Features include a dynamic pop-ups providing city councilor contact info based on user's current location."
    },
];







