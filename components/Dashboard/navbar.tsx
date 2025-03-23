"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggler from "../Header/ThemeToggler";
import Profile from "./profile";
import Sidebar from "./sidebar";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  // Detect screen size and set sidebar state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNavigationOpen(false); // Default to false on mobile
      } else {
        setNavigationOpen(true); // Default to true on larger screens
      }
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleStickyMenu = () => {
      setStickyMenu(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-99999 w-full border border-black/10 bg-black/5 py-3 dark:border-white/10 dark:bg-white/5 ${
          stickyMenu
            ? "bg-slate-50 shadow transition duration-100 dark:bg-black"
            : ""
        }`}
      >
        <div className="relative mx-auto flex max-w-c-1390 items-center justify-between md:px-8 xl:flex 2xl:px-0">
          <div className="flex w-full items-center justify-between xl:w-1/4">
            <a href="/" className="flex">
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={30}
                height={10}
                className="hidden dark:block"
              />
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={30}
                height={10}
                className="dark:hidden"
              />
              <h1 className="translate-x-1 text-2xl text-black dark:text-white max-lg:hidden lg:translate-y-3">
                iStorm
              </h1>
            </a>
          </div>

          {/* Nav Menu Start */}
          <div className="flex h-full items-center justify-end gap-2 max-lg:mr-2 max-lg:mt-0">
            <div className="flex max-lg:gap-10">
              <ThemeToggler />
              <Profile />

              {/* Hamburger Button */}
              <button
                aria-label="hamburger Toggler"
                className="ml-2"
                onClick={() => setNavigationOpen(!navigationOpen)}
              >
                <span className="relative block h-5.5 w-5.5 cursor-pointer">
                  <span className="absolute right-0 block h-full w-full">
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen ? "!w-full delay-300" : "w-0"
                      }`}
                    ></span>
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen ? "delay-400 !w-full" : "w-0"
                      }`}
                    ></span>
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen ? "!w-full delay-500" : "w-0"
                      }`}
                    ></span>
                  </span>
                  <span className="du-block absolute right-0 h-full w-full rotate-45">
                    <span
                      className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                      }`}
                    ></span>
                    <span
                      className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                      }`}
                    ></span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Animation */}
      <AnimatePresence>{navigationOpen && <Sidebar />}</AnimatePresence>
    </>
  );
};

export default Header;
