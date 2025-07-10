import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";

export default function CountryDetails() {
    const { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountry = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://restcountries.com/v3.1/name/${name}?fullText=true`
                );
                setCountry(response.data[0]);
                toast.success("Country loaded successfully");
            } catch (error) {
                console.error("Fetch single country error:", error);
                toast.error("Could not load country details.");
            } finally {
                setLoading(false);
            }
        };

        fetchCountry();
    }, [name]);

    if (!country) return (
        <div className="min-h-screen flex items-center justify-center">
            <ClipLoader loading={loading} size={50} color="#FDAC74" />
        </div>
    )

    const {
        flags,
        name: countryName,
        capital,
        region,
        subregion,
        population,
        borders,
        currencies,
        languages,
        continents,
        timezones
    } = country;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-zinc-700 hover:bg-orange-200 dark:hover:bg-zinc-600 text-orange-800 dark:text-white transition-all shadow-sm hover:shadow-md"
            >
                ← Back
            </button>

            <div className="flex flex-col md:flex-row gap-8 bg-white/70 dark:bg-zinc-800/60 backdrop-blur border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md p-6">
                <motion.img
                    src={flags.svg}
                    alt={countryName.common}
                    className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow"
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                />

                <div className="flex-1 text-gray-800 dark:text-gray-100">
                    <h2 className="sm:text-3xl text-2xl font-extrabold mb-4 text-orange-600 dark:text-orange-300">
                        {countryName.common}
                    </h2>

                    <ul className="space-y-2 text-sm sm:text-base">
                        <li><span className="font-medium text-zinc-500 dark:text-zinc-400">Capital:</span> {capital?.[0]}</li>
                        <li><span className="font-medium text-zinc-500 dark:text-zinc-400">Region:</span> {region} / {subregion}</li>
                        <li><span className="font-medium text-zinc-500 dark:text-zinc-400">Population:</span> {population.toLocaleString()}</li>
                        <li><span className="font-medium text-zinc-500 dark:text-zinc-400">Currencies:</span> {currencies && Object.values(currencies).map(c => c.name).join(", ")}</li>
                        <li><span className="font-medium text-zinc-500 dark:text-zinc-400">Languages:</span> {languages && Object.values(languages).join(", ")}</li>
                        <li><span className="font-medium text-zinc-500 dark:text-zinc-400">Continent:</span> {continents}</li>
                        <li><span className="font-medium text-zinc-500 dark:text-zinc-400">Time Zone:</span> {timezones}</li>
                    </ul>

                    {borders && (
                        <div className="mt-6">
                            <p className="font-medium text-zinc-500 dark:text-zinc-400 mb-2">Borders:</p>
                            <ul className="flex flex-wrap gap-2">
                                {borders.map((code) => (
                                    <li
                                        key={code}
                                        className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 dark:bg-zinc-700 dark:text-white text-xs font-medium shadow-sm"
                                    >
                                        {code}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
