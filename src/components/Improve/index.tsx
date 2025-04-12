"use client"
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { useState } from "react";

type TabType = 'development' | 'plan' | 'design';

type ContentType = {
    [key in TabType]: {
        text: string;
        buttonColor: string;
    }
}

export default function Improve() {
    const [activeTab, setActiveTab] = useState<TabType>('development');

    const content: ContentType = {
        development: {
            text: "Proactive monitoring and maintenance to prevent problems before they occur. Rapid response to any IT issues, ensuring minimal disruption. Our development team uses cutting-edge technologies to build robust solutions.",
            buttonColor: "bg-blue-100 hover:bg-blue-200 text-blue-600"
        },
        plan: {
            text: "Strategic planning and roadmap development to align IT initiatives with business goals. Comprehensive project management ensuring timely delivery and optimal resource utilization.",
            buttonColor: "bg-purple-100 hover:bg-purple-200 text-purple-600"
        },
        design: {
            text: "User-centered design approach creating intuitive and engaging interfaces. Our design team focuses on delivering seamless experiences that delight users while maintaining functionality.",
            buttonColor: "bg-green-100 hover:bg-green-200 text-green-600"
        }
    };

    return (
        <div className="w-full md:h-max sm:h-auto px-4 md:px-10 py-10 md:py-16">
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                            Improve workflow
                        </h1>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <button 
                                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                                    activeTab === 'development' ? content.development.buttonColor : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                                onClick={() => setActiveTab('development')}
                            >
                                Development
                            </button>
                            <button 
                                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                                    activeTab === 'plan' ? content.plan.buttonColor : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                                onClick={() => setActiveTab('plan')}
                            >
                                Plan
                            </button>
                            <button 
                                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                                    activeTab === 'design' ? content.design.buttonColor : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                                onClick={() => setActiveTab('design')}
                            >
                                Design
                            </button>
                        </div>
                        <p className="text-gray-600 text-base md:text-lg max-w-xl transition-all duration-300 ease-in-out">
                            {content[activeTab].text}
                        </p>
                        <Link 
                            href="/tools"
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group text-sm md:text-base"
                        >
                            Check the tools
                            <IoArrowForward className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-video relative rounded-2xl overflow-hidden bg-gray-100">
                            <Image
                                src="/image/Hase.svg"
                                alt="Demo Video"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-gray-900 ml-1"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}