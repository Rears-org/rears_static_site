import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export default function Workflow() {
  return (
    <div className="w-full md:h-min sm:h-auto px-2 sm:px-4 py-6 sm:py-10">
      <div className="flex mx-auto">
        <div className="relative w-full aspect-[1180/400]">
          {/* Background Image */}
          <Image
            src="/image/Container.svg"
            alt="Container Logo"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center text-center px-2 sm:px-4">
            <div className="w-full md:w-1/2">
              <div className="space-y-0.5 sm:space-y-1 md:mb-5">
                <h1 className="text-base sm:text-lg md:text-3xl lg:text-5xl font-bold text-white max-w-3xl mx-auto">
                  Problems come and
                </h1>
                <h1 className="text-base sm:text-lg md:text-3xl lg:text-5xl font-bold text-white max-w-3xl mx-auto">
                  get solved with ease
                </h1>
              </div>
              <p className="mt-1.5 sm:mt-4 text-[9px] sm:text-xs md:text-lg md:mb-4 text-gray-200 max-w-2xl mx-auto line-clamp-2 sm:line-clamp-3">
                Our agile approach and proactive strategies allow us to address your IT needs with exceptional speed and precision. We focus on providing solutions that are not only effective but also sustainable for your long-term success.
              </p>
              <Link
                href="/improve-workflow"
                className="mt-2 sm:mt-6 inline-flex items-center text-white hover:text-blue-300 font-medium group text-[10px] sm:text-xs md:text-base"
              >
                Improve your workflow
                <IoArrowForward className="ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
