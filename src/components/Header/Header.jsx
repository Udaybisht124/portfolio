import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                    {/* Logo or title */}
                    <h1 className="text-cyan-400 font-extrabold uppercase text-xl sm:text-2xl md:text-3xl">
                        Portfolio
                    </h1>
                    
                    {/* Hamburger Icon */}
                    <button
                        onClick={handleMenuToggle}
                        className="lg:hidden text-white text-2xl focus:outline-none"
                    >
                        {isMenuOpen ? '✖' : '☰'}
                    </button>

                    {/* Menu items */}
                    <div className={`lg:flex flex-col lg:flex-row items-center ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                        <Link
                            to="/"
                            className="text-white hover:bg-cyan-400 hover:text-black focus:ring-4 focus:ring-gray-300 font-medium text-cyan-400 rounded-lg text-sm sm:text-base md:text-lg px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Home
                        </Link>
                        <Link
                            to="/skill"
                            className="text-white hover:bg-cyan-400 hover:text-black focus:ring-4 focus:ring-gray-300 font-medium text-cyan-400 rounded-lg text-sm sm:text-base md:text-lg px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Skill
                        </Link>
                        <Link
                            to="/project"
                            className="text-white hover:bg-cyan-400 hover:text-black focus:ring-4 focus:ring-gray-300 font-medium text-cyan-400 rounded-lg text-sm sm:text-base md:text-lg px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm sm:text-base md:text-lg px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
