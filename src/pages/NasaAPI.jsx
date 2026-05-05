import { useEffect, useState } from "react";

export default function NasaMedia() {
    const [data, setData] = useState(null);

    const API_KEY = import.meta.env.VITE_NASA_API_KEY;

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    if (!data) return <p className="text-white flex justify-center text-center m-15 text-[20px]">Loading space...</p>;

    return (
        <div className="text-teal-500 p-6 text-center">
            <h1 className="text-3xl font-bold m-7 ">{data.title}</h1>
            {data.media_type === "image" && (
                <img src={data.url} alt={data.title} className="rounded-xl" />
            )}
            {data.media_type === "video" && (
                data.url.includes("youtube.com") || data.url.includes("youtu.be") ? (
                    <iframe
                        src={data.url.replace("watch?v=", "embed/")}
                        className="w-full aspect-video rounded-xl shadow-lg"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <video
                        src={data.url}
                        controls
                        className="w-full aspect-video rounded-xl shadow-lg"
                        autoPlay
                        muted
                        loop
                    />
                )
            )}

            <p className="mt-4 text-gray-300">{data.explanation}</p>
        </div>
    );
}
