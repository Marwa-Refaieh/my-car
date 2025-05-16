import { useState } from 'react';
import logo from '../assets/logo.png'
import { FaGlobe } from 'react-icons/fa';
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <nav className="bg-Mybackground shadow-lg fixed top-0 z-40 shadow-white/10 w-full">
                <div className="max-w-7xl mx-auto px-4 py-1 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">

                        {/* logo */}
                        <div className="flex items-center space-x-4">
                            <img src={logo} alt="logo" className="md:w-28 w-32" />
                            <div className="hidden lg:flex lg:text-3xl font-bold text-Myprimary uppercase">
                                My Car
                            </div>

                        </div>

                        {/* search input*/}
                        <div className="w-full sm:w-80 md:w-[40rem] px-3 mr-2 sm:px-5 flex items-center border rounded-full gap-3">
                            <FaSearch className="text-gray-400 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search your dream car..."
                                className="w-full py-2 border-transparent focus:outline-none focus:ring-2 focus:ring-transparent bg-transparent text-white placeholder:text-gray-400"
                            />
                        </div>

                        <div className="flex items-center space-x-4">
                            <a
                                href='#'
                                className='w-20 border border-white rounded-md py-1 text-center hover:shadow-[0_0_10px_#d6cb21] hover:border-Myprimary outline-none transition hover:text-Myprimary'
                            >
                                Login
                            </a>
                            <a
                                href='#'
                                className='w-20 border border-white rounded-md py-1 text-center hover:shadow-[0_0_10px_#d6cb21] hover:border-Myprimary outline-none transition hover:text-Myprimary'
                            >
                                Sign Up
                            </a>
                            <button onClick={toggleSidebar} className="p-2 text-gray-700 hover:text-Myprimary transition text-2xl">
                                <FiAlignJustify size={24} />
                            </button>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-[#121212] text-white shadow-lg transform transition-transform duration-300 z-50 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 flex justify-between items-center border-b border-gray-700">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-300 hover:text-Myprimary text-lg transition"
                    >
                        <FaTimes size={18} className="stroke-current" />
                    </button>

                </div>
                <div className="p-4 space-y-4">

                </div>
            </div>

            {/* Semi-transparent background appears when the sidebar is open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
}

export default Navbar;
