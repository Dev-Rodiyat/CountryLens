import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="max-w-6xl mx-auto flex justify-between items-center p-4 px-6 sm:px-10">
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center py-2">
                © {new Date().getFullYear()} CountryLens. All rights reserved.
            </div>
            <Link to='/'>
            <p className="hover:text-orange-600">-Home</p></Link>
        </footer>
    );
};

export default Footer;