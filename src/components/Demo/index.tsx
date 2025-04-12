import Image from "next/image";
import Link from "next/link";
import { CiSquareChevRight } from "react-icons/ci";

export default function Demo() {
  return (
    <div className="w-full md:h-max sm:h-auto">
      <div className="flex flex-col lg:flex-row md:flex-row z-10 py-6 md:py-10 relative">
        <div className="w-full lg:w-1/2 relative lg:-translate-y-1/2 md:translate-y-0 px-4">
          <div className="font-sans text-center md:text-left max-w-full overflow-hidden">
            <h1 className="text-xl md:text-2xl lg:text-4xl whitespace-nowrap leading-tight">
              Transform Your <b>Business</b> through
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-4xl whitespace-nowrap leading-tight">
              The <b>Power</b> of <b>Information</b>
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-4xl whitespace-nowrap leading-tight">
              Technologies
            </h1>
          </div>

          <div className="mt-4 md:mt-7 text-sm md:text-xl lg:text-2xl font-light text-center md:text-left">
            <p className="mb-1">
              Launch a business today with our help and get it done with amazing
            </p>
            <p className="mb-1">
              launch features, websites and more with rears. We help business
              like
            </p>
            <p>yours thrive every day and beyond</p>
          </div>
          <div className="mt-6 lg:mt-10 md:mt-8 flex flex-col md:flex-row items-center gap-3 md:gap-4 lg:gap-8">
            <Link
              href="#"
              className="w-full md:w-auto custom-purple-color text-white text-sm md:text-lg lg:text-xl font-medium px-4 md:px-6 py-2 md:py-2.5 lg:py-3 rounded-lg hover:bg-[#4a43b0] transition-colors duration-300 text-center"
            >
              Contact Now
            </Link>
            <div className="flex items-center gap-2">
              <Link href="#">
                <CiSquareChevRight className="text-[#6C63FF] text-xl md:text-2xl lg:text-4xl w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 animate-pulse hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href="#"
                className="text-sm md:text-base lg:text-xl hover:text-blue-400 transition-colors duration-300"
              >
                Book a Demo Today
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative hidden md:block">
          <div className="absolute lg:-translate-y-1/2 md:translate-y-0 w-full aspect-[492/412]">
            <Image
              src={"/image/Right.svg"}
              alt="Right Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
