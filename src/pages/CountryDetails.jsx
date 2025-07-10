import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CountryDetails() {
    const { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then((res) => res.json())
            .then((data) => setCountry(data[0]));
    }, [name]);

    if (!country) return <div className="p-4">Loading...</div>;

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
    } = country;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:shadow"
            >
                ← Back
            </button>

            <div className="flex flex-col md:flex-row gap-8">
                <img
                    src={flags.svg}
                    alt={countryName.common}
                    className="w-full md:w-1/2 rounded shadow"
                />
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">{countryName.common}</h2>
                    <p><strong>Capital:</strong> {capital?.[0]}</p>
                    <p><strong>Region:</strong> {region} / {subregion}</p>
                    <p><strong>Population:</strong> {population.toLocaleString()}</p>
                    <p><strong>Currencies:</strong> {currencies && Object.values(currencies).map(c => c.name).join(", ")}</p>
                    <p><strong>Languages:</strong> {languages && Object.values(languages).join(", ")}</p>
                    {borders && (
                        <div className="mt-4">
                            <strong>Borders:</strong>
                            <ul className="flex flex-wrap gap-2 mt-2">
                                {borders.map((code) => (
                                    <li
                                        key={code}
                                        className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-sm"
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
