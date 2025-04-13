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
                    <div className="hidden md:flex items-center lg:space-x-16 md:space-x-1 md:items-center">
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-black hover:text-blue-600"
                             onClick={() => {
                                console.log('HHHHHHHHHH')
                                document.getElementById('project-section')?.scrollIntoView({ behavior: 'smooth' });
                              }}>
                                <span className='lg:text-xl md:text-[14px]'>Products</span>
                                {/* <svg className="ml-2 lg:w-6 lg:h-6 md:w-4 md:h-4 md:ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg> */}
                            </button>
                            {/* <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <ul className="py-2">
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Product 1</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Product 2</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Product 3</a></li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-black hover:text-blue-600">
                                <span className='lg:text-xl md:text-[14px]'>Solutions</span>
                                {/* <svg className="ml-2 lg:w-6 lg:h-6 md:w-4 md:h-4 md:ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg> */}
                            </button>
                            {/* <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <ul className="py-2">
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Solution 1</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Solution 2</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Solution 3</a></li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-black hover:text-blue-600">
                                <span className='lg:text-xl md:text-[14px]'>Services</span>
                                {/* <svg className="ml-2 lg:w-6 lg:h-6 md:w-4 md:h-4 md:ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg> */}
                            </button>
                            {/* <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <ul className="py-2">
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Service 1</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Service 2</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Service 3</a></li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-black hover:text-blue-600">
                                <span className='lg:text-xl md:text-[14px]'>Help Center</span>
                                {/* <svg className="ml-2 lg:w-6 lg:h-6 md:w-4 md:h-4 md:ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg> */}
                            </button>
                            {/* <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <ul className="py-2">
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Help 1</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Help 2</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-black hover:bg-blue-50">Help 3</a></li>
                                </ul>
                            </div> */}
                        </div>
                        {/* <Link href="/pricing" className="lg:text-xl text-black hover:text-blue-600  md:text-[14px]">
                            Pricing
                        </Link> */}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* <Link href="/login" className="lg:text-xl text-blue-500 font-medium hover:text-blue-700 md:text-[15px]">
                            Log In
                        </Link> */}
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
                                onClick={() => toggleDropdown('products')}
                                className="flex items-center justify-between w-full px-3 py-2 text-black hover:text-blue-600"
                            >
                                <span>Products</span>
                                {/* <svg 
                                    className={`w-6 h-6 transition-transform duration-200 ${activeDropdown === 'products' ? 'transform rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg> */}
                            </button>
                            {/* {activeDropdown === 'products' && (
                                <div className="pl-4">
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Product 1</a>
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Product 2</a>
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Product 3</a>
                                </div>
                            )} */}
                        </div>

                        {/* Solutions Dropdown */}
                        <div className="relative">
                            <button 
                                onClick={() => toggleDropdown('solutions')}
                                className="flex items-center justify-between w-full px-3 py-2 text-black hover:text-blue-600"
                            >
                                <span>Solutions</span>
                                {/* <svg 
                                    className={`w-6 h-6 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'transform rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg> */}
                            </button>
                            {/* {activeDropdown === 'solutions' && (
                                <div className="pl-4">
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Solution 1</a>
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Solution 2</a>
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Solution 3</a>
                                </div>
                            )} */}
                        </div>

                        {/* Services Dropdown */}
                        <div className="relative">
                            <button 
                                onClick={() => toggleDropdown('services')}
                                className="flex items-center justify-between w-full px-3 py-2 text-black hover:text-blue-600"
                            >
                                <span>Services</span>
                                {/* <svg 
                                    className={`w-6 h-6 transition-transform duration-200 ${activeDropdown === 'services' ? 'transform rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg> */}
                            </button>
                            {/* {activeDropdown === 'services' && (
                                <div className="pl-4">
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Service 1</a>
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Service 2</a>
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Service 3</a>
                                </div>
                            )} */}
                        </div>

                        {/* Help Center Dropdown */}
                        <div className="relative">
                            <button 
                                onClick={() => toggleDropdown('help')}
                                className="flex items-center justify-between w-full px-3 py-2 text-black hover:text-blue-600"
                            >
                                <span>Help Center</span>
                                {/* <svg 
                                    className={`w-6 h-6 transition-transform duration-200 ${activeDropdown === 'help' ? 'transform rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg> */}
                            </button>
                            {/* {activeDropdown === 'help' && (
                                <div className="pl-4">
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Help 1</a>
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Help 2</a>
                                    <a href="#" className="block px-3 py-2 text-black hover:text-blue-600">Help 3</a>
                                </div>
                            )} */}
                        </div>

                        {/* <Link href="/pricing" className="block px-3 py-2 text-black hover:text-blue-600">
                            Pricing
                        </Link> */}
                        {/* <Link href="/login" className="block px-3 py-2 text-black hover:text-blue-600">
                            Log In
                        </Link> */}
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