/* React Modlar */
import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
/* Companentler */
import Header from "./Companent/Header";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
/* -------------------------------------------------Planets------------------------------------------- */
import Mercury from "./pages/Planets/Mercury"
import Venera from "./pages/Planets/Venera"
import Earth from "./pages/Planets/Earth"
import Mars from "./pages/Planets/Mars"
import Jupiter from "./pages/Planets/Jupiter"
import Saturn from "./pages/Planets/Saturn"
import Uranus from "./pages/Planets/Uranus"
import Neptun from "./pages/Planets/Neptune"
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
                    <Route path="/star/5" element={<Vega />}></Route>
                    <Route path="/star/6" element={<Antares />}></Route>
                    <Route path="/planets/1" element={<Mercury />}></Route>
                    <Route path="/planets/2" element={<Venera />}></Route>
                    <Route path="/planets/3" element={<Earth />}></Route>
                    <Route path="/planets/4" element={<Mars />}></Route>
                    <Route path="/planets/5" element={<Jupiter />}></Route>
                    <Route path="/planets/6" element={<Saturn />}></Route>
                    <Route path="/planets/7" element={<Uranus />}></Route>
                    <Route path="/planets/8" element={<Neptun />}></Route>
                </Routes>
            </div>
        </BrowserRouter >
    );
}