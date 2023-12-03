import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const Breadcums = ({ pageName }) => {
    return (
        <>
            <div className="absolute z-10 -top-40 right-0 opacity-50 blur-sm bg-gradient-to-bl from-emerald-200 to-white h-96 w-96 rounded-l-full"></div>

            <div className="w-full h-80 lg:h-96 bg-slate-50 ">
                {/* relative */}
                <div className="mx-auto px-10 py-8">
                    <div className="flex items-center justify-between">
                        <div className="pt-28 lg:pt-40">
                            <h2 className="text-3xl font-bold text-black">
                                {pageName}
                            </h2>

                            <div className="flex items-center space-x-2 mt-4">

                                <Link href={"/"} className="text-black hover:text-green-600">
                                    Home
                                </Link>

                                <span className="text-black">
                                    <FaAngleRight />
                                </span>

                                <span className="text-green-500">
                                    {pageName}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Breadcums;

