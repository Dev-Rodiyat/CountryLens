import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-white to-slate-100 dark:from-zinc-900 dark:via-black dark:to-zinc-800 px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-800 dark:text-white mb-4">
                    Discover Countries Around the Globe
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                    Explore official flags, capitals, populations, and more using live global data.
                </p>

                <Link to="/home">
                    <button className="px-6 py-3 bg-gradient-to-r from-orange-500 via-red-400 to-pink-500 text-white rounded-full font-semibold text-lg transition duration-300 shadow-lg hover:scale-105">
                        Get Started
                    </button>
                </Link>
            </div>

            <p className="fixed bottom-0 w-full">
               <Footer/>
            </p>
        </div>
    );
}
