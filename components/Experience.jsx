import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { BsArrowUpRight } from "react-icons/bs";

import FloatBlack from "@/public/float-black.svg";
import FloatWhite from "@/public/float-white.svg";

const Experience = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const today = new Date();
  const startDate = new Date(2021, 6);
  let diffYears = today.getFullYear() - startDate.getFullYear();
  let diffMonths = today.getMonth() - startDate.getMonth();
  if (
    diffMonths < 0 ||
    (diffMonths === 0 && today.getDate() < startDate.getDate())
  ) {
    diffYears--;
    diffMonths += 12;
  }

  return (
    <div className=" mt-32 lg:mt-8 flex flex-col justify-start space-y-12 mx-auto items-center md:mt-20 lg:min-h-screen">
      
    
      <div className="flex flex-col relative space-y-16 md:space-y-10 lg:space-y-8 items-center">
        <div className="drop-shadow-2xl flex flex-col space-y-4 mx-6 md:mx-20 lg:mx-0 md:w-[70%] lg:w-[80%] max-w-2xl">
          <div className="mx-auto text-center font-bold font-deca text-2xl text-indigo-500 dark:text-[#4cc9f0]">
          Technical Development
          </div>
          <div className="font-normal sm:text-[0.95rem] md:text-base text-center">
          I&apos;m well-versed in web and mobile development, specializing in React.js and Next.js for building dynamic websites and applications. My mobile development skills ensure a smooth user experience on any device.
          </div>
        </div>
        <div className="drop-shadow-xl flex flex-col space-y-4 mx-6 md:mx-20 lg:mx-0 md:w-[70%] lg:w-[80%] max-w-2xl rounded-[1.4rem] p-4 rounded-tl-none">
          <div className="mx-auto text-center font-deca font-bold text-2xl dark:text-[#d58357] text-orange-500">
          Architectural Design & Data Engineering
          </div>
          <div className="font-normal sm:text-[0.95rem] md:text-base text-center">
          I specialize in planning and designing software architecture, focusing on microservices and APIs for scalable backends. My work with AI and data processing enhances application features and data insights.
          </div>
        </div>
        <div className="bg-purple-300 w-36 h-36 rounded-lg p-4 select-none ">
        <div className="bg-purple-400  h-28 w-28 flex-col justify-end mx-auto blur-none z-40 items-center text-center text-xl text-white font-medium rounded-lg p-2">
          <div className="basis-[60%] text-5xl font-black ">
            <h2 className="text-border mt-1 ">
              {diffYears}
              <sup className="text-lg">{`.${diffMonths + 1}`}</sup>
            </h2>
          </div>
          <div className="basis-[30%] text-xs mt-3 font-out">
            Years of Experience
          </div>
        </div>
      </div>
      </div>
      <div className="w-[80%] max-w-2xl mx-auto">
        <div className="text-center font-normal mb-6 tracking-normal text-sm leading-5 sm:text-base lg:text-lg ">
        Dive into my portfolio to experience the convergence of creativity and technology firsthand. Each project is a testament to my commitment to excellence, showcasing a diverse range of applications designed to captivate, engage, and innovate.
        </div>
        <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
          <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
            <Link
              href="/projects"
              className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
            >
              <BsArrowUpRight className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
              <p>Projects</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
