import { useContext } from "react";
import { Link } from "react-router";
import { cartContent } from "../../context/MainContext";
import { FaShoppingCart, FaSun, FaMoon, FaShoppingBag } from "react-icons/fa";

export default function Header() {
    let { cartCount, theme, toggleTheme } = useContext(cartContent);

    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            {/* Baaki code same rahega... */}
            <div className="max-w-[1320px] mx-auto flex justify-between items-center p-4">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    <FaShoppingBag />
                    <span>Maashho</span>
                </Link>

                {/* Actions */}
                <div className="flex items-center gap-6">

                    {/* Theme Toggle */}
                    <button onClick={toggleTheme} className=" cursor-pointer text-xl text-gray-600 dark:text-yellow-400 hover:scale-110 transition-transform">
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>

                    {/* Cart Icon */}
                    <Link to="/cart" className="relative text-2xl text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors">
                        <FaShoppingCart />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-md animate-bounce">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}