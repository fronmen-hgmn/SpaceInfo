/* React Modlar */
import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
/* Companentler */
import Header from "./Companent/Header";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
/* -------------------------------------------------Stars------------------------------------------- */
import Stars from "./pages/Stars";
import Sun from "./pages/Stars/Sun";
import SiriusA from "./pages/Stars/SiriusA";
import Betelgeuse from "./pages/Stars/Betelgeuse";
import Rigel from "./pages/Stars/Rigel";
import Vega from "./pages/Stars/Vega";
import Antares from "./pages/Stars/Antares";
/* -------------------------------------------------Galaxies------------------------------------------- */
import Galaxies from "./pages/Galaxies";
import Andromeda from "./pages/galaxi/Andromeda";
import TheLargeandSmallMagellanicClouds from "./pages/galaxi/TheLargeandSmallMagellanicClouds";
import Sagitarius from "./pages/galaxi/Sagitarius";
import Missions from "./pages/Missions";
import About from "./pages/About";
import videoBg from "./assets/space-bg.mp4";

import "./styles/CustomCssTW.css";
/* FontAwesom(ICONLAR) */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function App() {
    return (
        <BrowserRouter basename="/SpaceInfo">
            <div className="relative min-h-screen">
                <div className="fixed inset-0 -z-10 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover">
                        <source src={videoBg} type="video/mp4" />
                    </video>
                </div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/planets" element={<Planets />}></Route>
                    <Route path="/stars" element={<Stars />}></Route>
                    <Route path="/galaxies" element={<Galaxies />}></Route>
                    <Route path="/missions" element={<Missions />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/andromeda" element={<Andromeda />}></Route>
                    <Route path="/TheLargeandSmallMagellanicClouds" element={<TheLargeandSmallMagellanicClouds />}></Route>
                    <Route path="/Sagitarius" element={<Sagitarius />}></Route>
                    <Route path="/star/1" element={<Sun />}></Route>
                    <Route path="/star/2" element={<SiriusA />}></Route>
                    <Route path="/star/3" element={<Betelgeuse />}></Route>
                    <Route path="/star/4" element={<Rigel />}></Route>
                    <Route path="/star/5" element={<Vega/>}></Route>
                    <Route path= "/star/6" element={<Antares/>}></Route>
                </Routes>
            </div>
        </BrowserRouter >
    );
}