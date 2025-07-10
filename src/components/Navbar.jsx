import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
    const [dark, setDark] = useState(() =>
        localStorage.getItem("countryTheme") === "dark"
    );

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("countryTheme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("countryTheme", "light");
        }
    }, [dark]);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-900/50 shadow-xl transition-colors duration-300 border-b border-white/10 dark:border-zinc-800/50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4 px-6 sm:px-10">
                <h1
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-400 to-pink-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                    🌍 CountryLens
                </h1>

                <button
                    onClick={() => setDark(!dark)}
                    className="group p-2 rounded-full bg-white/30 dark:bg-zinc-700/30 backdrop-blur-md border border-white/20 dark:border-zinc-600/30 shadow-inner transition-all duration-300 hover:scale-110 active:scale-95"
                >
                    {dark ? (
                        <FiMoon className="w-6 h-6 text-zinc-900 dark:text-white transition-colors duration-300 group-hover:text-orange-400" />
                    ) : (
                        <FiSun className="w-6 h-6 text-yellow-500 transition-colors duration-300 group-hover:text-orange-500" />
                    )}
                </button>
            </div>
        </nav>
    );
}
