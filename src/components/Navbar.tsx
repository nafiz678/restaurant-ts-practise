import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full bg-black/30 text-white backdrop-blur-md z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo Section */}
                <div className="text-2xl font-bold text-white">
                    <h2>BISTRO BOSS</h2>
                    <p className="text-sm text-white tracking-[0.45rem]">RESTAURANT</p>
                </div>

                {/* Nav Links */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8 text-white font-medium">
                        <li className="hover:text-blue-500 cursor-pointer"><NavLink to={"/"}>Home</NavLink></li>
                        <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
                        <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
                        <li className="hover:text-blue-500 cursor-pointer"><NavLink to={"/ourMenu"}>Our menu</NavLink></li>
                        <li className="hover:text-blue-500 cursor-pointer"><NavLink to={"/order/salad"}>Our Order</NavLink></li>
                        <li className="hover:text-blue-500 cursor-pointer">Some nav item</li>
                    </ul>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-16 left-0 w-full bg-white/30 backdrop-blur-md md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <ul className="flex flex-col space-y-4 text-center py-4 text-gray-800 font-medium">
                    <li className="hover:text-blue-500 cursor-pointer">Home</li>
                    <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
                    <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
                    <li className="hover:text-blue-500 cursor-pointer">Our Menu</li>
                    <li className="hover:text-blue-500 cursor-pointer">Our Shop</li>
                    <li className="hover:text-blue-500 cursor-pointer">Some nav item</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
