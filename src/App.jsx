import React, { useEffect, useState } from "react";
import NavBar from "./components/Common/NavBar/NavBar";
import Homepage from "./components/HomePage/Homepage";
// import Webteam from "./components/WebteamPage/Webteam";
import Contact from "./components/ContactPage/Contact";
import Kaleido from "./components/KaleidoPage/Kaleido";
import SponsorPage from "./components/SponsorPage/SponsorPage";
import TeamFP from "./components/TeamFpPage/TeamFP";
import HistoryPage from "./components/HistoryPage/HistoryPage";
import Gallery from "./components/Gallery/Gallery";
import EventPage from "./components/EventPage/EventPage";
import SubEvent from "./components/SubEvent/SubEvent";
import ThemeState from "./Context/Theme/ThemeState";
import WebTeam from "./components/WebTeam/Webteam";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RollingSquare from "./components/RollingSquare/RollingSquare";
import Workshop from "./components/KaleidoPage/Workshop";
import Techzi from "./components/KaleidoPage/Techzi";
import Taleido from "./components/KaleidoPage/Taleido";
import Fsr from "./components/FsrPage/Fsr";
import Schitron from "./components/Schitron/Schitron";
import Quest from "./components/QuestPage/Quest";
import Fse from "./components/FsePage/Fse";
import Virtuosity from "./components/VirtuosityPage/Virtuosity";
import Acco from "./components/Acco/Acco";

import MediaPage from "./components/MediaPage/MediaPage";
import { QueryClient, QueryClientProvider } from "react-query";
import useLocalStorage from "./CustomHooks/useLoacalStorage";
import "./components/Common/CSS/Root.css";
const queryClient = new QueryClient();
import AOS from 'aos';
import TheMoonPage from "./components/TheMoonPage/TheMoonPage";
import LandingPage from "./components/LandingPage/landingpage";
import Error from "./components/Error";


AOS.init();

function App() {

  useEffect(() => {

    window.addEventListener('load', AOS.refresh)

  }, [])


  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const [icon, setIcon] = useLocalStorage("theme-icon", "fas fa-sun");

  const switchTheme = () => {
    setIcon(theme === "light" ? "fas fa-sun" : "fas fa-moon");
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeState>
        <Router>
          <NavBar switchTheme={switchTheme} icon={icon} />
          <Routes>
            <Route exact path="/" element={<LandingPage/>}></Route>
            <Route exact path="/home" element={<Homepage />}></Route>
            <Route exact path="/guestlecture" element={<Kaleido />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/sponsor" element={<SponsorPage />}></Route>
            <Route exact path="/history" element={<HistoryPage />}></Route>
            <Route exact path="/teamfp" element={<TeamFP />}></Route>
            <Route exact path="/gallery" element={<Gallery />}></Route>
            <Route exact path="/concert" element={<RollingSquare />} />
            <Route exact path="/webTeamPage" element={<WebTeam />} />
            <Route exact path="/workshop" element={<Workshop />} />
            <Route exact path="/techzibition" element={<Techzi />} />
            <Route exact path="/taleidoscope" element={<Taleido />} />
            <Route exact path="/fsr" element={<Fsr />} />
            <Route exact path="/schitron" element={<Schitron />} />
            <Route exact path="/media" element={<MediaPage />} />
            <Route exact path="/acco" element={<Acco />} />
            <Route exact path="/media" element={<MediaPage />} />
            <Route exact path="/quest" element={<TheMoonPage theParent={"quest"}/>} />
            <Route exact path="/fse" element={<TheMoonPage theParent={"fse"} />} />
            <Route exact path="/virtuosity" element={<TheMoonPage theParent={"virtuosity"} />} />
            <Route exact path="/technotron/:event" element={<TheMoonPage theParent={"technotron"}/>} />   
            <Route exact path="/error" element={<Error/>}/>        
            <Route path="/*" element={<Error/>}/>        
          </Routes>
        </Router>
      </ThemeState>
    </QueryClientProvider>
  );
}

export default App;
