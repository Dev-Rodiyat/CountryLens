import { FiSearch, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const SearchFilterBar = ({ onSearch, onRegionChange }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("");
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        onRegionChange(region);
        setShowDropdown(false);
    };

    return (
        <div className="sticky top-[64px] z-30 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white px-4 py-4 mb-12 transition-colors">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-4">
                <div className="relative w-full sm:max-w-md">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search for a country..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            onSearch(e.target.value);
                        }}
                        className="w-full pl-10 pr-10 py-2 rounded-lg bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 shadow-sm focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 transition outline-none"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => {
                                setSearchTerm("");
                                onSearch("");
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 transition"
                        >
                            <FiX className="w-5 h-5" />
                        </button>
                    )}
                </div>

                <div className="relative w-full sm:w-64" ref={dropdownRef}>
                    <button
                        onClick={() => setShowDropdown((prev) => !prev)}
                        className="w-full flex justify-between items-center px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white shadow-sm focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 transition outline-none"
                    >
                        {selectedRegion || "Filter by Region"}
                        <FiChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? "rotate-180" : "rotate-0"
                                }`}
                        />
                    </button>

                    <AnimatePresence>
                        {showDropdown && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute mt-2 w-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white rounded-lg shadow-lg border border-zinc-100 dark:border-zinc-700 z-20 overflow-hidden"
                            >
                                {regions.map((region) => (
                                    <li
                                        key={region}
                                        onClick={() => handleRegionSelect(region)}
                                        className="px-4 py-2 hover:bg-orange-100 dark:hover:bg-zinc-700 cursor-pointer transition"
                                    >
                                        {region}
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default SearchFilterBar;
