'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    // const router = useRouter();
    // const { pathname } = useRouter();

    const [mobileMenu, setmobileMenu] = useState(false);

    const pathname = usePathname();

    const togglemobileMenu = () => {
        setmobileMenu(!mobileMenu);
    };

    useEffect(() => {
        setmobileMenu(false);
    }, [pathname]);

    // navbar sticky on scroll down and remove sticky on scroll up effect start here
    const [scrollPosition, setSrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`w-full h-20 z-50 ${scrollPosition > 0
                ? "shadow-md bg-white fixed transition-all duration-300"
                // : "fixed"
                : "absolute"
                }`}
        >

            <div className="h-full mx-auto px-10">
                <div className="flex items-center justify-between h-full">

                    <Link href={"/"}>
                        <h2 className="select-none">
                            <span className="text-orange-600 text-2xl font-semibold">WebCraft</span>
                            {" "}
                            <span className="text-green-600 text-2xl font-semibold">Solutions</span>
                        </h2>
                    </Link>

                    <div className="md:hidden">
                        <button
                            className="text-black"
                            onClick={togglemobileMenu}
                        >
                            {mobileMenu ? (
                                <RxCross2 className="h-6 w-6 text-black" />
                            ) : (
                                <GiHamburgerMenu className="h-6 w-6 text-black" />
                            )}
                        </button>
                    </div>

                    <ul
                        className={`md:flex items-center hidden gap-8`}
                    >
                        <li className="">
                            <Link
                                href={"/"}
                                className="text-black duration-300 hover:text-green-600 font-medium"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                href={"/team"}
                                className={`text-black duration-300 hover:text-green-600 font-medium ${pathname === "/team" ? "text-green-600" : ""
                                    }`}
                            >
                                Team
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                href={"/service"}
                                className={`text-black duration-300 hover:text-green-600 font-medium ${pathname === "/service" ? "text-green-600" : ""
                                    }`}
                            >
                                Services
                            </Link>
                        </li>

                        <li className="">
                            <Link
                                href={"/project"}
                                className={`text-black duration-300 hover:text-green-600 font-medium ${pathname === "/project" ? "text-green-600" : ""
                                    }`}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                href={"/testimonial"}
                                className={`text-black duration-300 hover:text-green-600 font-medium ${pathname === "/testimonial" ? "text-green-600" : ""
                                    }`}
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                href={"#"}
                                className="text-black font-medium px-8 py-3 rounded-lg border-[1px] border-[#20B15A] duration-300 hover:bg-[#20B15A] hover:text-[#d7f5dc] transition-all"
                            >
                                Login
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                href={"#"}
                                className="text-white font-medium px-8 py-3 rounded-lg hover:text-[#d7f5dc] duration-300 transition-all bg-[#20B15A]"
                            >
                                Register
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>

            {/* mobile-menu */}

            <div
                className={`md:hidden ${mobileMenu ? "block" : "hidden"
                    } transition-all-out duration-300`}
            >
                <ul className="flex flex-col items-center py-8 space-y-4 mt-1 bg-[#d7f5dc] shadow">

                    <li className="">
                        <Link
                            href={"/"}
                            className="text-black duration-300 hover:text-green-600 font-medium"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            href={"/team"}
                            className={`text-black duration-300 hover:text-green-600 font-medium ${pathname === "/team" ? "text-green-600" : ""
                                }`}
                        >
                            Team
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            href={"/service"}
                            className={`text-black duration-300 hover:text-green-600 font-medium ${pathname === "/service" ? "text-green-600" : ""
                                }`}
                        >
                            Services
                        </Link>
                    </li>

                    <li className="">
                        <Link
                            href={"/project"}
                            className={`text-black duration-300 hover:text-green-600 font-medium ${pathname === "/project" ? "text-green-600" : ""
                                }`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            href={"/testimonial"}
                            className={`text-black duration-300 hover:text-green-600 font-medium ${pathname === "/testimonial" ? "text-green-600" : ""
                                }`}
                        >
                            Testimonials
                        </Link>
                    </li>

                    <ul className="flex pt-4 gap-4">
                        <li className="">
                            <Link
                                href={"#"}
                                className="text-black duration-300 hover:bg-[#20B15A] hover:text-[#d7f5dc] font-medium px-8 py-3 rounded-lg border-[1px] border-[#20B15A]"
                            >
                                Login
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                href={"#"}
                                className="text-white font-medium px-8 py-3 rounded-lg bg-[#20B15A] hover:text-[#d7f5dc] duration-300"
                            >
                                Register
                            </Link>
                        </li>
                    </ul>

                </ul>
            </div>

        </nav>
    );
};

export default Navbar;

