"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { menuItems } from "@/utils";
import { MenuItem } from "@/utils/types";
import Button from "../button";
import ThemeToggler from "../theme";
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "@/context";

export default function Header() {
  const [sticky, setSticky] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const {setSearchQuery, setSearchResults} = useContext(GlobalContext)
  const router = useRouter();
  const pathName = usePathname();

  function handleStickyNavbar() {
    if (typeof window !== 'undefined' && window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  }

  function handleNavbarToggle() {
    setNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleStickyNavbar);
    }
  });

  useEffect(()=> {
    setSearchResults([]) 
    setSearchQuery('')  
  },[pathName])

 
  return (
    <div>
      <header
        className={`top-0 left-0 z-40 flex w-full items-center bg-transparent
        ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop:blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }
        `}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[240px] px-2 sm:px-4 xl:mr-12">
              <Link
                href={"/"}
                className={`text-[30px] font-extrabold cursor-pointer block w-full
                    ${sticky ? "py-5 lg:py-2" : "py-8"}
                    `}
              >
                NextBlog
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={handleNavbarToggle}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-2 sm:right-4 top-1/2 block translate-y-[-50%] rounded-lg px-2 sm:px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[7px] rotate-45" : ""}
                        `}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "opacity-0" : ""}
                        `}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[-8px] -rotate-45" : ""}
                        `}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-0 z-30 w-[200px] sm:w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4
                px-4 sm:px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100

                ${
                  navbarOpen
                    ? "visible top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }
                `}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuItems.map((item: MenuItem) => (
                      <li key={item.id} className="group relative">
                        <Link
                          href={item.path}
                          className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    {/* Mobile menu items */}
                    <li className="lg:hidden border-t border-body-color border-opacity-10 dark:border-white dark:border-opacity-10 mt-4 pt-4">
                      <div className="flex flex-col gap-3">
                        <Button
                          onClick={() => {
                            router.push("/create");
                            setNavbarOpen(false);
                          }}
                          text="Create"
                        />
                        <div className="flex justify-center">
                          <ThemeToggler />
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden lg:flex gap-2 sm:gap-4 items-center justify-end pr-4 sm:pr-8 lg:pr-0">
                <Button
                  onClick={() => router.push("/create")}
                  text="Create"
                />
                <div className="flex gap-3 items-center">
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
