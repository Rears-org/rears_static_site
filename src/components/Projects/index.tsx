import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function Projects(){
    return(
        <div className="w-full md:min-h-min sm:h-auto">
            <div className="flex flex-col items-center justify-center lg:py-0 md:py-10 px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold mb-2 custom-purple-font-color">
                        Our Service List
                    </h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium custom-color-p">
                        What we are offering
                    </h1>
                </div>
                <div className="w-full max-w-[1680px]">
                    {/* First Section - Image Left, Content Right */}
                    <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-8">
                        <div className="w-full lg:w-[55%] order-2 sm:order-2 md:order-1">
                            <Image
                                src={"/image/Rectangle 18.svg"}
                                alt="Website Image"
                                width={483}
                                height={340}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                        <div className="w-full lg:w-[45%] text-center lg:text-left pl-0 lg:pl-8 order-1 sm:order-1 md:order-2">
                            <div className="space-y-3">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold custom-purple-font-color">
                                    Website Development
                                </h1>
                                <p className="text-base md:text-lg text-gray-600">
                                    Transforming your digital vision into a captivating online presence with expert website development
                                </p>
                                <Link 
                                    href="#" 
                                    className="inline-flex items-center gap-2 text-base md:text-lg custom-purple-font-color hover:gap-3 transition-all duration-300"
                                >
                                    Read More 
                                    <IoArrowForwardCircleOutline className="text-xl md:text-2xl" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Second Section - Image First on Small Screens */}
                    <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-8 mt-8">
                        <div className="w-full lg:w-[45%] text-center lg:text-left pl-0 lg:pl-8">
                            <div className="space-y-3">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold custom-purple-font-color">
                                Mobile App Development
                                </h1>
                                <p className="text-base md:text-lg text-gray-600">
                                Transforming ideas into seamless user experiences through innovative mobile app development
                                </p>
                                <Link 
                                    href="#" 
                                    className="inline-flex items-center gap-2 text-base md:text-lg custom-purple-font-color hover:gap-3 transition-all duration-300"
                                >
                                    Read More 
                                    <IoArrowForwardCircleOutline className="text-xl md:text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-[55%]">
                            <Image
                                src={"/image/Rectangle 19.svg"}
                                alt="Mobile Image"
                                width={483}
                                height={340}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Rest of the sections remain unchanged */}
                    {/* Third Section - Image Left, Content Right */}
                    <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-8">
                        <div className="w-full lg:w-[55%] order-2 sm:order-2 md:order-1">
                            <Image
                                src={"/image/Rectangle 20.svg"}
                              alt="UI/UX Design Image"
                                width={483}
                                height={340}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                        <div className="w-full lg:w-[45%] text-center lg:text-left pl-0 lg:pl-8 order-1 sm:order-1 md:order-2">
                            <div className="space-y-3">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold custom-purple-font-color">
                                UI/ UX Design
                                </h1>
                                <p className="text-base md:text-lg text-gray-600">
                                Transforming ideas into seamless user experiences through innovative mobile and web development.
                                </p>
                                <Link 
                                    href="#" 
                                    className="inline-flex items-center gap-2 text-base md:text-lg custom-purple-font-color hover:gap-3 transition-all duration-300"
                                >
                                    Read More 
                                    <IoArrowForwardCircleOutline className="text-xl md:text-2xl" />
                                </Link>
                            </div>
                        </div>
                    </div>
                 
                     {/* Fourth Section - Content Left, Image Right */}

                    <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-8 mt-8">
                        <div className="w-full lg:w-[45%] text-center lg:text-left pl-0 lg:pl-8">
                            <div className="space-y-3">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold custom-purple-font-color">
                                    Software Development
                                </h1>
                                <p className="text-base md:text-lg text-gray-600">
                                    The process of creating computer programs, encompassing design, coding, testing, and maintenance. It transforms user needs into functional software through structured methodologies and diverse technologies.
                                </p>
                                <Link 
                                    href="#" 
                                    className="inline-flex items-center gap-2 text-base md:text-lg custom-purple-font-color hover:gap-3 transition-all duration-300"
                                >
                                    Read More 
                                    <IoArrowForwardCircleOutline className="text-xl md:text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-[55%]">
                            <Image
                                src={"/image/Rectangle 22.svg"}
                                alt="Software Development Image"
                                width={483}
                                height={340}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Fifth Section - Image Left, Content Right */}

                     <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row-reverse items-center justify-between gap-4 md:gap-8 mt-8">
                        <div className="w-full lg:w-[45%] text-center lg:text-left pl-0 lg:pl-8">
                            <div className="space-y-3">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold custom-purple-font-color">
                                    Cloud Engineer
                                </h1>
                                <p className="text-base md:text-lg text-gray-600">
                                    specializes in cloud computing platforms, such as AWS, Azure, or GCP, and implements devops practices within those cloud environments.
                                </p>
                                <Link 
                                    href="#" 
                                    className="inline-flex items-center gap-2 text-base md:text-lg custom-purple-font-color hover:gap-3 transition-all duration-300"
                                >
                                    Read More 
                                    <IoArrowForwardCircleOutline className="text-xl md:text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-[55%]">
                            <Image
                                src={"/image/Rectangle 21.svg"}
                                alt="Cloud Engineer Image"
                                width={483}
                                height={340}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}