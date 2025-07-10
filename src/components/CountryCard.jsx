import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CountryCard({ country }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xs sm:max-w-sm mx-auto"
        >
            <Link to={`/country/${country.name.common}`}>
                <div className="relative bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.01]">

                    <div className="absolute top-3 right-3 bg-orange-100 text-orange-600 dark:bg-zinc-700 dark:text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm">
                        {country.cca3}
                    </div>

                    <motion.img
                        src={country.flags.svg}
                        alt={`Flag of ${country.name.common}`}
                        className="w-full h-28 sm:h-40 object-cover border-b border-gray-200 dark:border-gray-700"
                        initial={{ scale: 1.05, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />

                    <div className="p-4 sm:p-5 text-gray-800 dark:text-gray-100 text-sm space-y-1">
                        <h3 className="text-base sm:text-lg font-bold truncate">{country.name.common}</h3>

                        <p>
                            <span className="font-medium text-zinc-500 dark:text-zinc-400">Region:</span>{" "}
                            {country.region}
                        </p>
                        <p>
                            <span className="font-medium text-zinc-500 dark:text-zinc-400">Capital:</span>{" "}
                            {country.capital?.[0] || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-zinc-500 dark:text-zinc-400">Population:</span>{" "}
                            {country.population.toLocaleString()}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
