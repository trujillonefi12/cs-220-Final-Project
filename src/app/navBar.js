"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./themeSwitcher.js"

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className="flex justify-center mt-4"> {/* Added mt-4 for margin-top */}
            <nav className="inline-block bg-gray-50 rounded-full border shadow-lg">
                <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-10">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open main menu</span>
                                {!open ? (
                                    <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                ) : (
                                    <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="hidden sm:block">
                                <div className="flex space-x-2"> {/* Reduced space between items */}
                                    <Link href="/" passHref>
                                        <span
                                            className={`text-black ${activeLink === '/' ? 'text-green-500' : ''} px-1 py-1 rounded-md text-xs font-medium hover-line`}
                                            onClick={() => handleLinkClick('/')}
                                        >
                                            Home
                                        </span>
                                    </Link>
                                    <Link href="/AboutMe" passHref>
                                        <span
                                            className={`text-black ${activeLink === '/AboutMe' ? 'text-green-500' : ''} px-1 py-1 rounded-md text-xs font-medium hover-line ${activeLink === '/AboutMe' ? 'active' : ''}`}
                                            onClick={() => handleLinkClick('/AboutMe')}
                                        >
                                            About
                                        </span>
                                    </Link>
                                    <Link href="/services" passHref>
                                        <span
                                            className={`text-black ${activeLink === '/services' ? 'text-green-500' : ''} px-1 py-1 rounded-md text-xs font-medium hover-line ${activeLink === '/services' ? 'active' : ''}`}
                                            onClick={() => handleLinkClick('/services')}
                                        >
                                            Projects
                                        </span>
                                    </Link>
                                    <Link href="/UsesSection" passHref>
                                        <span
                                            className={`text-black ${activeLink === '/contact' ? 'text-green-500' : ''} px-1 py-1 rounded-md text-xs font-medium hover-line ${activeLink === '/contact' ? 'active' : ''}`}
                                            onClick={() => handleLinkClick('/contact')}
                                        >
                                            Uses
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link href="/" passHref>
                                <span
                                    className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover-line ${activeLink === '/' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('/')}
                                >
                                    Home
                                </span>
                            </Link>
                            <Link href="/AboutMe" passHref>
                                <span
                                    className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover-line ${activeLink === '/AboutMe' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('/AboutMe')}
                                >
                                    About
                                </span>
                            </Link>
                            <Link href="/services" passHref>
                                <span
                                    className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover-line ${activeLink === '/services' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('/services')}
                                >
                                    Projects
                                </span>
                            </Link>
                            <Link href="/UsesSection" passHref>
                                <span
                                    className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover-line ${activeLink === '/contact' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('/contact')}
                                >
                                    Uses
                                </span>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

        </div>
    );
}
