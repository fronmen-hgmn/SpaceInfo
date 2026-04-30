import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="grid sm:grid-cols- lg:grid-cols-0">
            <main className="position  z-index  ">
                <h1 className="text-4xl sm:text-3xl md:text-6xl lg:text-8xl font-bold">Space Exploration</h1>
                <p className="mt-4 text-2xl">Discover planets, stars, and galaxies beyond imagination</p>
                <h1 className="mt-5">If you don't know where to start, click the random button.</h1>
                <button className="button" onClick={()=>navigate("/stars")}>Start your journey <FontAwesomeIcon icon={faArrowRight} /></button>
            </main>
            <ul className="sosialPosition">
                <a href="https://github.com/fronmen-hgmn"><li className="sosial"><FontAwesomeIcon icon={faGithub} /></li></a>
                <a href="https://www.instagram.com/fearlesswarr1or1/"><li className="sosial"><FontAwesomeIcon icon={faInstagram} /></li></a>
            </ul>
        </div>
    )
}