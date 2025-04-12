import Image from "next/image";

export default function ProjectsIcons() {
  return (
    <div className="w-full md:h-max sm:h-auto">
      <div className="flex flex-col items-center justify-center lg:py-0 md:py-10 px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold mb-2 custom-purple-font-color">
            Projects
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium custom-color-p">
            Our Creative Solution
          </h1>
        </div>
        <div className="w-full max-w-[1680px]">
          <div className="flex flex-row items-center justify-evenly gap-8 md:gap-43">
            <div className="w-1/3 flex items-center justify-center">
              <Image
                src={"/image/Pluginlive.svg"}
                alt="Pluginlive Image"
                width={150}
                height={150}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <Image
                src={"/image/TalAiro.svg"}
                alt="TalArio Image"
                width={150}
                height={150}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <Image
                src={"/image/Hase.svg"}
                alt="Hase Image"
                width={150}
                height={150}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-evenly gap-8 md:gap-43">
            <div className="w-1/3 flex items-center justify-center">
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] relative">
                <Image
                  src="/image/DucoLogo 1.svg"
                  alt="DucoLogo Image"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <Image
                src={"/image/Blujin.svg"}
                alt="Blujin Image"
                width={150}
                height={150}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src={"/image/Skymute.svg"}
                    alt="Skymute Image"
                    width={98}
                    height={93}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-base md:text-2xl lg:text-4xl font-sans font-medium custom-color-p">
                    Skymute
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
