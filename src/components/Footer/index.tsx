"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return (
      <footer className="w-full custom-purple">
        <div className="flex flex-col md:flex-row pl-5 md:pl-2.5 pr-5 md:pr-[50px] py-10 gap-10">
          {/* Left side - 30% */}
          <div className="w-full md:w-[30%] flex items-center justify-center">
            <Image
              src={"/image/footer.svg"}
              alt="footer Image"
              width={351}
              height={165}
              className="bg-opacity w-[200px] md:w-auto"
              priority
            />
          </div>
          {/* Right side - 70% */}
          <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-start gap-6 md:gap-15 lg:gap-40">
            <div className="w-full md:w-auto">
              <h2 className="text-3xl md:text-4xl font-medium mb-6 md:mb-8">
                Services
              </h2>
              <ul>
                <li className="mb-4 md:mb-7">
                  <Link
                    href="#"
                    className="text-lg md:text-xl text-black hover:text-blue-600"
                  >
                    Website Development
                  </Link>
                </li>
                <li className="mb-4 md:mb-7">
                  <Link
                    href="#"
                    className="text-lg md:text-xl text-black hover:text-blue-600"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="mb-4 md:mb-7">
                  <Link
                    href="#"
                    className="text-lg md:text-xl text-black hover:text-blue-600"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li className="mb-4 md:mb-7">
                  <Link
                    href="#"
                    className="text-lg md:text-xl text-black hover:text-blue-600"
                  >
                    Cloud Storage
                  </Link>
                </li>
                <li className="mb-4 md:mb-7">
                  <Link
                    href="#"
                    className="text-lg md:text-xl text-black hover:text-blue-600"
                  >
                    Application Development
                  </Link>
                </li>
                <li className="mb-4 md:mb-7">
                  <Link
                    href="#"
                    className="text-lg md:text-xl text-black hover:text-blue-600"
                  >
                    Architecture Consulting
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="w-full md:w-auto">
                    <h2 className="text-3xl md:text-4xl font-medium mb-6 md:mb-8">Other</h2>
                    <ul>
                        <li className="mb-4 md:mb-7">
                            <Link href="#" className="text-lg md:text-xl text-black hover:text-blue-600">About Us</Link>
                        </li>
                        <li className="mb-4 md:mb-7">
                            <Link href="#" className="text-lg md:text-xl text-black hover:text-blue-600">Blog</Link>
                        </li>
                        <li className="mb-4 md:mb-7">
                            <Link href="#" className="text-lg md:text-xl text-black hover:text-blue-600">Portfolio</Link>
                        </li>
                        <li className="mb-4 md:mb-7">
                            <Link href="#" className="text-lg md:text-xl text-black hover:text-blue-600">Career</Link>
                        </li>
                    </ul>
                </div> */}
            <div className="w-full md:w-auto">
              <h2 className="text-3xl md:text-4xl font-medium mb-6 md:mb-8">
                Contact Us
              </h2>
              <ul>
                <li className="mb-4 md:mb-7">
                  <a
                    href="mailto:admin@rears.in"
                    className="text-lg md:text-xl text-black hover:text-blue-600"
                  >
                    admin@rears.in
                  </a>
                </li>
                <li className="mb-4 md:mb-7">
                  <Link
                    href="#"
                    className="text-lg md:text-xl text-black hover:text-blue-600"
                  >
                    +91 7708102805
                  </Link>
                </li>
                <li className="mb-4 md:mb-7">
                  <Link
                    href="#"
                    className="text-lg md:text-xl text-black hover:text-blue-600"
                  >
                    sawyerpuram - TamilNadu
                  </Link>
                </li>
              </ul>
              <h2 className="text-3xl md:text-4xl font-bold mt-6">Follow Us</h2>
              <div className="flex items-start gap-8 mt-4">
                <a
                  href="#"
                  className="text-3xl md:text-4xl text-black hover:text-blue-600"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/company/rears"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl md:text-4xl text-black hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Rears-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl md:text-4xl text-black hover:text-blue-600"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}