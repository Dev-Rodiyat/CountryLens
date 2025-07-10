import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import axios from "axios";
import SearchBar from "../components/SearchBar";

export default function Home() {
    const [countries, setCountries] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,cca3")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((data) => {
                setCountries(data);
                setFiltered(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setLoading(false);
            });
    }, []);

    const handleSearch = (query) => {
        const q = query.toLowerCase();
        const result = countries.filter((c) =>
            c.name.common.toLowerCase().includes(q)
        );
        setFiltered(result);
    };

    const handleRegionChange = (region) => {
        if (!region) return setFiltered(countries);
        const result = countries.filter((c) => c.region === region);
        setFiltered(result);
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <SearchBar onSearch={handleSearch} onRegionChange={handleRegionChange} />

            {loading ? (
                <div className="text-center mt-16 text-xl animate-pulse">Loading countries...</div>
            ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filtered.map((country) => (
                        <CountryCard key={country.cca3} country={country} />
                    ))}
                </div>
            )}
        </div>
    );
}
