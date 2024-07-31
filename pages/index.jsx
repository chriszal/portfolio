import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import { BsArrowUpRight } from "react-icons/bs";

import Avatar_Black from "@/public/Avatar-black.svg";
import Avatar_White from "@/public/Avatar-white.svg";
import BooBlack from "@/public/boo-black.svg";
import BooWhite from "@/public/boo-white.svg";
import Link from "next/link";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  

  return (
    <>
      <Head>
        <title>chriszal | portofolio</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <div className="flex flex-row justify-start items-center mt-20">
          <div className={`border-4 rounded-full overflow-hidden ${currentTheme === "dark" ? "border-white" : "border-black"}`}>
              <Image
                src="/avatar.jpeg"
                alt="chriszal"
                width="80"
                height="80"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col ml-4">
              <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
                <span className="font-semibold">christos zalachoris</span>
                
              </h2>
              <h3>
                <Link
                  href={"https://www.linkedin.com/in/christos-zalachoris-997623208/"}
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>@chriszal</p>
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h3>
            </div>
          </div>
          <div className="mt-12 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
            <p className="sm:leading-6 md:leading-6 lg:leading-8">
            I am a software developer fueled by a ceaseless passion for innovation and the execution of new ideas. My journey in the tech world is driven by the thrill of turning concepts into reality, skillfully weaving together the realms of front-end web development, mobile app creation, and the intricate art of backend database management. 
            </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
