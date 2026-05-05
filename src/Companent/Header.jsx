import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    return (
        <header className="flex justify-between p-7 ">
            <div onClick={() => navigate("/")} className="font-medium 
            text-5xl 
            text-gray-300 glow-text logo ">Space Info</div>
{/* Burger button MD */}
            <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-white text-3xl z-50">
        {isOpen ? "✕" : "☰"}
      </button>

            <ul className={`
        ${isOpen ? "flex" : "hidden"} 
        flex-col md:flex md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent
        gap-5 m-3 text-xl mr-12 z-40`}>
                <li className="hovtext">
                    <Link to="/">Home </Link>
                </li>
                <li className="hovtext">
                    <Link to="/planets">Planets</Link>
                </li>
                <li className="hovtext">
                    <Link to="/stars">Stars</Link>
                </li>
                <li className="hovtext">
                    <Link to="/galaxies">Galaxies</Link>
                </li>
                <li className="hovtext">
                    <Link to="/nasamed">NASA</Link>
                </li>
                <li className="hovtext">
                    <Link to="/spacequiz">Quiz</Link>
                </li>
                <li className="hovtext">
                    <Link to="/about">About</Link>
                </li>
                
            </ul>
        </header>
    )
}