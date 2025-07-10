import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import axios from "axios";
import SearchFilterBar from "../components/SearchFilterBar";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

export default function Home() {
    const [countries, setCountries] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,cca3"
                );
                setCountries(response.data);
                setFiltered(response.data);
                toast.success("Countries loaded successfully.");
            } catch (error) {
                console.error("Axios fetch error:", error);
                toast.error("Failed to load countries. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    const handleSearch = (query) => {
        setSearchTerm(query);
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
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <SearchFilterBar
                onSearch={handleSearch}
                onRegionChange={handleRegionChange}
            />

            {loading ? (
                <div className="min-h-screen flex items-center justify-center">
                    <ClipLoader loading={loading} size={50} color="#FDAC74" />
                </div>
            ) : filtered.length === 0 ? (
                <div className="min-h-[40vh] flex flex-col items-center justify-center text-center text-gray-600 dark:text-gray-300">
                    <p className="text-xl font-semibold mb-2">
                        No countries found
                        {searchTerm && (
                            <>
                                {" "}
                                for{" "}
                                <span className="text-orange-500 dark:text-orange-400">
                                    "{searchTerm}"
                                </span>
                            </>
                        )}
                    </p>
                    <p className="text-sm max-w-sm">
                        Try adjusting your search term or filter region to find the country you're looking for.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-6">
                    {filtered.map((country) => (
                        <CountryCard key={country.cca3} country={country} />
                    ))}
                </div>
            )}
        </div>
    );
}
