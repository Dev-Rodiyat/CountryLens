import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CountryCard({ country }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/country/${country.name.common}`}>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">{country.name.common}</h3>
            <p><span className="font-medium">Region:</span> {country.region}</p>
            <p><span className="font-medium">Capital:</span> {country.capital?.[0] || "N/A"}</p>
            <p><span className="font-medium">Population:</span> {country.population.toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
