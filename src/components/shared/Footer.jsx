// async function getData() {
//     const res = await fetch(process.env.BASE_URL + "api/SocialLink");
//     if (!res.ok) {
//         throw new Error("SocialLink List Calling Fail");
//     }
//     return res.json();
// }

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = async () => {

    // const data = await getData();

    return (

        <div className="w-full bg-black pt-20 px-20">

            <div className="flex flex-col mx-auto lg:flex-row justify-between gap-4">

                <div>

                    <Link href='/'>
                        <h2 className="select-none">
                            <span className="text-orange-600 text-3xl font-semibold">WebCraft</span>
                            {" "}
                            <span className="text-green-600 text-3xl font-semibold">Solutions</span>
                        </h2>
                    </Link>

                    <p className="lg:w-80 pt-4 text-white">
                        Some footer text about the Agency. Just a little description to
                        help people understand you better
                    </p>

                    <div className="flex gap-3 mt-4">
                        <a
                            // href={data[0]['link']}
                            href="https://www.facebook.com"
                            target="_blank"
                            className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-600 transition-all duration-300"
                        >
                            <FaFacebookF className="text-white" />
                        </a>
                        <a
                            // href={data[1]['link']}
                            href="https://www.twitter.com"
                            target="_blank"
                            className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-600 transition-all duration-300"
                        >
                            <FaTwitter className="text-white" />
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-600 transition-all duration-300"
                        >
                            <FaLinkedin className="text-white" />
                        </a>
                        <a
                            // href={data[2]['link']}
                            href="https://www.instagram.com"
                            target="_blank"
                            className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-600 transition-all duration-300"
                        >
                            <FaInstagram className="text-white" />
                        </a>
                    </div>

                </div>

                <div>
                    <h3 className="text-white mb-4 font-medium text-xl">
                        Quick Links
                    </h3>

                    <ul className="text-white">
                        <li className="py-1 hover:text-orange-600 transition-all duration-300">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="py-1 hover:text-orange-600 transition-all duration-300">
                            <Link href="/team">
                                Team
                            </Link>
                        </li>
                        <li className="py-1 hover:text-orange-600 transition-all duration-300">
                            <Link href="/service">
                                Services
                            </Link>
                        </li>
                        <li className="py-1 hover:text-orange-600 transition-all duration-300">
                            <Link href="/project">
                                Projects
                            </Link>
                        </li>
                        <li className="py-1 hover:text-orange-600 transition-all duration-300">
                            <Link href="/testimonial">
                                Testimonials
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white mb-4 font-medium text-xl">Address</h3>

                    <div className="text-white">

                        <ul>
                            <li className="py-1">
                                Dhaka, Bangladesh
                            </li>
                            <li className="py-1 hover:text-orange-600 transition-all duration-300">
                                <a href="tel:+880123456789">+880123456789</a>
                            </li>
                            <li className="py-1 hover:text-orange-600 transition-all duration-300">
                                <a href="mailto:ex@gmail.com">
                                    WebCraftSolutions@gmail.com
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>

            <div className="text-end text-white py-10">
                <span className="">
                    Copyright &copy; WebCraft Solutions {new Date().getFullYear().toString()}.
                </span>
            </div>

        </div>
    );
};

export default Footer;

