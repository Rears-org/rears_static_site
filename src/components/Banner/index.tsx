"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

interface CounterAnimationProps {
    end: number;
    duration?: number;
}

function CounterAnimation({ end, duration = 1000 }: CounterAnimationProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
}

export default function Banner() {
    return (
        <div>
            {/* Desktop Version */}
            <div className="hidden md:block w-full md:h-max lg:h-max xl:h-max 2xl:h-screen">

                <div className="lg:flex md:flex z-10">
                    <div className="sm:px-4 sm:pt-10">
                        <div className="">
                            <h1 className="lg:text-6xl font-sans font-semibold md:text-4xl sm:text-3xl">Where <span className="custom-spacial-color">Technology</span></h1>
                            <h1 className="lg:text-6xl font-sans font-semibold md:text-4xl sm:text-3xl">Meets Ingenuity.</h1>
                        </div>
                        <div className="mt-7 lg:text-2xl font-light sm:text-base sm:mt-4">
                            <p>We do not just code, we conquer. Your one stop service</p>
                            <p>center to manage your businesses and needs.</p>
                        </div>
                        
                        <div className="flex gap-20 mt-10 sm:gap-8 sm:mt-6 sm:justify-center">
                            <div className="text-center">
                                <h2 className="lg:text-4xl mb-2 flex items-center md:text-3xl sm:text-2xl">
                                    <span className="custom-spacial-color font-semibold">
                                        <CounterAnimation end={16} />
                                        <span>+</span>
                                    </span>
                                </h2>
                                <p className="text-gray-600 lg:text-2xl sm:text-base">successful projects</p>
                            </div>
                            <div className="text-center">
                                <h2 className="lg:text-4xl mb-2 flex items-center md:text-3xl sm:text-2xl">
                                    <span className="custom-spacial-color font-semibold">
                                        <CounterAnimation end={12} />
                                        <span>+</span>
                                    </span>
                                </h2>
                                <p className="text-gray-600 lg:text-2xl sm:text-base">satisfied clients</p>
                            </div>
                        </div>

                        <div className="lg:mt-10 flex items-center gap-8 md:mt-7 sm:mt-6 sm:flex-col sm:items-stretch sm:gap-4 sm:px-4">
                            <Link 
                                href="#" 
                                className="custom-special-color-button lg:text-xl font-medium px-6 py-3 rounded-full hover:bg-[#4a43b0] transition-colors duration-300 sm:text-base sm:py-2.5 flex items-center justify-center"
                            >
                                Book a free call
                            </Link>
                            <Link 
                                href="#" 
                                className="inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 sm:justify-center"
                            >
                                <span className="lg:text-xl custom-spacial-color sm:text-base">See projects</span>
                                <FaCircleArrowRight className="lg:text-xl custom-spacial-color sm:text-base"/>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 relative hidden sm:hidden md:block">
                        <div className="absolute top-1/2 -translate-y-1/2 w-full">
                            <Image 
                                src="/image/Illustration.svg"
                                alt="Banner Image"
                                width={900}
                                height={732}
                                className="w-full h-full object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="block sm:block md:hidden w-full min-h-[50vh] relative">
                <div className="absolute inset-0">
                    <Image 
                        src="/image/Illustration.svg"
                        alt="Banner Image"
                        fill
                        className="object-contain opacity-20"
                        priority
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center px-6 py-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-sans font-semibold mb-2">
                            Where <span className="custom-spacial-color">Technology</span>
                        </h1>
                        <h1 className="text-3xl font-sans font-semibold mb-4">
                            Meets Ingenuity.
                        </h1>
                    </div>
                    <div className="text-center text-base font-light mb-6">
                        <p className="mb-1">We do not just code, we conquer. Your one stop service</p>
                        <p>center to manage your businesses and needs.</p>
                    </div>
                    
                    <div className="flex justify-center gap-8 mb-8">
                        <div className="text-center">
                            <h2 className="text-2xl mb-2">
                                <span className="custom-spacial-color font-semibold">
                                    <CounterAnimation end={32} />
                                    <span>+</span>
                                </span>
                            </h2>
                            <p className="text-gray-600 text-base">successful projects</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl mb-2">
                                <span className="custom-spacial-color font-semibold">
                                    <CounterAnimation end={22} />
                                    <span>+</span>
                                </span>
                            </h2>
                            <p className="text-gray-600 text-base">satisfied clients</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 w-full">
                        <Link 
                            href="#" 
                            className="w-full custom-special-color-button text-base font-medium px-6 py-2.5 rounded-full hover:bg-[#4a43b0] transition-colors duration-300 flex items-center justify-center"
                        >
                            Book a free call
                        </Link>
                        <Link 
                            href="#" 
                            className="w-full inline-flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300"
                        >
                            <span className="text-base custom-spacial-color">See projects</span>
                            <FaCircleArrowRight className="text-base custom-spacial-color"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}