import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { Border } from "../Border";
import { SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import clsx from "clsx";


export default function OpenWeather() { 
    const [cityData, setCityData] = useState(null);
    const [cityName, setCityName] = useState('');
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const API_KEY = import.meta.env.VITE_API_KEY;
    const apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`;

    const fetchCityData = async () => {
        setLoading(true);
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            setCityData(data);
            setLoading(false);
        } catch (error) {
            setHasError(true);
            setLoading(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchCityData();
        setCityName('');
    }

    return (
        <Container className="">
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                    <SunIcon className="h-12 w-12 flex-none text-neutral-950" />
                                    <h3 className="mt-6 flex items-center text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                        OpenWeather API
                                    </h3>
                                </div>
                                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                        A spectrum of ready-to-use weather products 
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Direct Geocoding
                                </p>
                                <div className="mt-6 space-y-6 text-base text-neutral-600">
                                    <p>
                                        Geocoding is the process of transforming any location name into geographical coordinates, and vice versa (reverse geocoding). 
                                        OpenWeather&rsquo;s Geocoding API supports both direct and reverse methods, working at the level of city names, areas, districts, countries, and states.
                                    </p>
                                </div>
                                <div className="mt-8 flex">
                                    <div className="flex w-full items-center justify-center rounded-lg border bg-cosa-white p-2">
                                        <form 
                                            className="flex items-center justify-center rounded-lg"
                                            onSubmit={handleSubmit}
                                        >
                                            <input
                                                type="text"
                                                placeholder="Enter a city name"
                                                className="rounded-lg border p-2 mr-2 text-center"
                                                value={cityName}
                                                onChange={(e) => setCityName(e.target.value)}
                                            />
                                            <button
                                                type="submit"
                                                onClick={handleSubmit}
                                                className={clsx(
                                                    "flex items-center justify-center rounded-lg bg-neutral-950 text-white p-2",
                                                    "hover:bg-centro-blue/90 transition-colors duration-200 ease-in-out",
                                                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-950",
                                                    "disabled:opacity-50 disabled:cursor-not-allowed",
                                                    { "opacity-50 cursor-not-allowed": loading }
                                                )}
                                            >
                                                { loading ? "Loading..." : "Search"}
                                            </button>
                                        </form>
                                        {cityData && (
                                            <div className="flex flex-col items-center justify-center w-full">
                                                <p className="text-base font-semibold text-neutral-950">
                                                    {cityData[0].name}, {cityData[0].state}, {cityData[0].country}
                                                </p>
                                                <p className="text-sm text-neutral-600 text-center">
                                                    Latitude: {cityData[0].lat} 
                                                    <span className="block">Longitude: {cityData[0].lon} </span>
                                                </p>                                                    
                                            </div>
                                        )}
                                    </div>                                        
                                </div>
                            </div>
                        </Border>
                    </article>
                </FadeIn>
            </div>
        </Container>
    );
}