import { useState } from "react";
import TopBar from "./Components/TopBar/TopBar";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Works/Works";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Menu from "./Components/Menu/Menu";
import Experience from "./Components/Experiences/Experience";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import WorkMap from "./Components/WorkMap/WorkMap";
import PortfolioNav from "./Components/PortfolioNav/PortfolioNav";
import "./App.scss";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <WorkMap />
        {/* <Works /> */}
        {/* <PortfolioNav /> */}
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
