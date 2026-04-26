import { useNavigate } from "react-router-dom";
import CardStars from "../Companent/CardStars/CardStars";
export default function Stars(){
    return(
     <div className="min-h-screen bg-[#000000d3] flex justify-center ">
        <div>
            <h1 className="text-4xl text-white font-bold mb-10 text-center uppercase tracking-widest">
                Stars
            </h1>
            <CardStars/>
            
        </div>
        </div>
    )
}