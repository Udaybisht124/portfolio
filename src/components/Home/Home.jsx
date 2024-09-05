import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            {/* Image Section */}
            <div className="relative flex justify-center mb-8 md:mb-0">
                <img
                    className="w-80 sm:w-96 h-auto shadow-lg shadow-cyan-400/100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdiliSJkVlFmf7BVx-F0CtioI3OMomTEF7A&s"
                    alt="image1"
                />
            </div>

            {/* Text Section */}
            <div className="text-center md:text-right space-y-8 text-center flex flex-col justify-center">
                <h2 className="font-bold text-cyan-500 text-4xl sm:text-5xl" style={{ fontSize: '2.5rem' }}>
                    Hi<span className="hi-icon text-4xl">👋</span>! It's
                    <span className="block text-2xl sm:text-4xl text-cyan-500 mt-4 uppercase">
                        uday singh bisht
                        <h1 className="text-white text-3xl font-extrabold mt-4 sm:mt-10">
                            Frontend Web Developer
                        </h1>
                    </span>
                </h2>

                <Link
                    className="inline-flex text-white items-center sm:text-center px-6 py-3 font-medium bg-cyan-500 rounded-lg hover:opacity-75"
                    to=""
                >
                    &nbsp; Download Resume
                </Link>
            </div>
        </div>
    );
}
