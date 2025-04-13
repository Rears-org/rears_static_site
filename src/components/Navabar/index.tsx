"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    return (
        <nav className="fixed w-full bg-white shadow-sm z-50">
            <div className=" mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                            <Image
                                src="/image/Rears Logo - Final - Primary 2.svg"
                                alt="REARS Logo"
                                width={144}
                                height={62}
                                className="lg:w-36 md:w-[120px] h-auto md:mb-4"
                                priority
                            />
                    </div>

                    {/* Navigation Items */}
                    <div className="hidden md:flex items-center lg:space-x-16 md:space-x-10 md:items-center">
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-black hover:text-blue-600"
                             onClick={() => {
                                const section = document.getElementById('banner-section');
                                if (section) {
                                    const navbarHeight = 140; // Height of the fixed navbar
                                    const elementPosition = section.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                                    
                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: "smooth"
                                    });
                                }
                              }}>
                                <span className='lg:text-xl md:text-[14px]'>Products</span>
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-black hover:text-blue-600" 
                            onClick={() => {
                                const section = document.getElementById('demo-section');
                                if (section) {
                                  const screenWidth = window.innerWidth;

                                  let navbarHeight = 200;

                                  if (screenWidth >= 1024) {
                                    navbarHeight = 500;
                                  } else if (screenWidth >= 768) {
                                    navbarHeight = 140;
                                  } 
                                  const elementPosition =
                                    section.getBoundingClientRect().top;
                                  const offsetPosition =
                                    elementPosition +
                                    window.pageYOffset -
                                    navbarHeight;

                                  window.scrollTo({
                                    top: offsetPosition,
                                    behavior: "smooth",
                                  });
                                }
                              }}>
                                <span className='lg:text-xl md:text-[14px]'>Solutions</span>
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-black hover:text-blue-600"
                            onClick={() => {
                                const section = document.getElementById('project-section');
                                if (section) {
                                    const navbarHeight = 140; // Height of the fixed navbar
                                    const elementPosition = section.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                                    
                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: "smooth"
                                    });
                                }
                              }}>
                                <span className='lg:text-xl md:text-[14px]'>Services</span>
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-black hover:text-blue-600"
                             onClick={() => {
                                const section = document.getElementById('project-icons-section');
                                if (section) {
                                    const navbarHeight = 130; // Height of the fixed navbar
                                    const elementPosition = section.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                                    
                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: "smooth"
                                    });
                                }
                              }}>
                                <span className='lg:text-xl md:text-[14px]'>Projects</span>
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/demo"
                            className="lg:text-xl md:text-[15px] bg-blue-600 font-medium text-white px-12 py-3 rounded-[8px] hover:bg-blue-700 hover:text-shadow-white transition-colors"
                        >
                            Request for Demo
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {/* Products Dropdown */}
                        <div className="relative">
                            <button 
                                onClick={() => {
                                    const section = document.getElementById('banner-section');
                                    if (section) {
                                        const navbarHeight = 120;
                                        const elementPosition = section.getBoundingClientRect().top;
                                        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                                        
                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: "smooth"
                                        });
                                    }
                                    setIsOpen(false); // Close mobile menu after clicking
                                }}
                                className="flex items-center justify-between w-full px-3 py-2 text-black hover:text-blue-600"
                            >
                                <span>Products</span>
                            </button>
                        </div>

                        {/* Solutions Dropdown */}
                        <div className="relative">
                            <button 
                                 onClick={() => {
                                    const section = document.getElementById('demo-section');
                                    if (section) {
                                        const navbarHeight = 130;
                                        const elementPosition = section.getBoundingClientRect().top;
                                        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                                        
                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: "smooth"
                                        });
                                    }
                                    setIsOpen(false);
                                }}
                                className="flex items-center justify-between w-full px-3 py-2 text-black hover:text-blue-600"
                            >
                                <span>Solutions</span>
                            </button>
                        </div>

                        {/* Services Dropdown */}
                        <div className="relative">
                            <button 
                                 onClick={() => {
                                    const section = document.getElementById('project-section');
                                    if (section) {
                                        const navbarHeight = 130;
                                        const elementPosition = section.getBoundingClientRect().top;
                                        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                                        
                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: "smooth"
                                        });
                                    }
                                    setIsOpen(false); // Close mobile menu after clicking
                                }}
                                className="flex items-center justify-between w-full px-3 py-2 text-black hover:text-blue-600"
                            >
                                <span>Services</span>
                            </button>
                        </div>

                        {/* Help Center Dropdown */}
                        <div className="relative">
                            <button 
                                onClick={() => {
                                    const section = document.getElementById('project-icons-section');
                                    if (section) {
                                        const navbarHeight = 120;
                                        const elementPosition = section.getBoundingClientRect().top;
                                        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                                        
                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: "smooth"
                                        });
                                    }
                                    setIsOpen(false); // Close mobile menu after clicking
                                }}
                                className="flex items-center justify-between w-full px-3 py-2 text-black hover:text-blue-600"
                            >
                                <span>Projects</span>
                            </button>
                        </div>

                        <Link
                            href="/demo"
                            className="block px-3 py-2 bg-blue-600 text-white rounded-[8px] hover:bg-blue-700 hover:text-shadow-white transition-colors"
                        >
                            Request for Demo
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}