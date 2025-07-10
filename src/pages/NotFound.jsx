import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900 px-6">
            <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
            <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Page Not Found
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                Sorry, the page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="inline-block bg-gradient-to-r from-orange-500 via-red-400 to-pink-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition"
            >
                Go Home
            </Link>
        </div>
    );
}
