async function getWorkListData() {
    const res = await fetch(`${process.env.BASE_URL}api/WorkList`);
    const res2 = await fetch(`${process.env.BASE_URL}api/StatList`);
    const data = await res.json();
    const data2 = await res2.json();
    return { data, data2 };
}

import { PiUsersThree } from "react-icons/pi";
import { FiThumbsUp } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { GrProjects } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";

const WorkList = async () => {

    const workList = await getWorkListData();

    return (
        <section className="bg-white px-10 mx-auto py-16">

            <div>
                <h4 className="font-medium text-lg text-green-600 uppercase mb-4">
                    Work List
                </h4>
                <p className="text-xl lg:text-3xl lg:w-3/5 font-semibold text-black capitalize">
                    We provide the Perfect Solution to your business growth
                </p>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-3 md:grid-cols-2">
                    {workList.data.map((work, i) => (
                        <div
                            className="max-w-lg p-6 bg-white rounded-lg hover:border-green-600 transition-all duration-500"
                            key={i}
                        >
                            <div className="bg-[#D7F5DC] rounded-xl h-5 w-5 p-8 mb-3 flex justify-center items-center">
                                <span className="text-green-600">{work["step"]} </span>
                            </div>
                            <h5 className="mb-2 text-xl lg:text-2xl font-semibold text-black ">
                                {work["title"]}
                            </h5>
                            <p className="mb-5 text-gray-400 ">
                                {work["des"]}
                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center text-black hover:underline"
                            >
                                Learn More
                                <FaArrowRightLong className="text-black ml-2" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-4 md:grid-cols-2">
                    <div className="w-full h-72 p-6 bg-white flex flex-col justify-center items-center rounded-lg shadow-lg transition-all duration-500">
                        <div className="bg-[#D7F5DC] rounded mb-3 flex justify-center items-center">
                            <PiUsersThree className="text-7xl text-black p-5" />
                        </div>
                        <h5 className="mb-2 text-xl lg:text-2xl font-semibold text-black ">
                            {workList.data2.followers}
                        </h5>
                        <p className="text-black">Followers</p>
                    </div>
                    <div className="w-full h-72 p-6 bg-white flex flex-col justify-center items-center rounded-lg shadow-lg transition-all duration-500">
                        <div className="bg-[#D7F5DC] rounded mb-3 flex justify-center items-center">
                            <FiThumbsUp className="text-7xl text-black p-5" />

                        </div>
                        <h5 className="mb-2 text-xl lg:text-2xl font-semibold text-black ">
                            {workList.data2.followers}
                        </h5>
                        <p className="text-black">Solved Problems</p>
                    </div>
                    <div className="w-full h-72 p-6 bg-white flex flex-col justify-center items-center rounded-lg shadow-lg transition-all duration-500">
                        <div className="bg-[#D7F5DC] rounded mb-3 flex justify-center items-center">
                            <CiFaceSmile className="text-7xl text-black p-5" />
                        </div>
                        <h5 className="mb-2 text-xl lg:text-2xl font-semibold text-black ">
                            {workList.data2.followers}
                        </h5>
                        <p className="text-black">Happy Customers</p>
                    </div>
                    <div className="w-full h-72 p-6 bg-white flex flex-col justify-center items-center rounded-lg shadow-lg transition-all duration-500">
                        <div className="bg-[#D7F5DC] rounded mb-3 flex justify-center items-center">
                            <GrProjects className="text-7xl text-black p-5" />
                        </div>
                        <h5 className="mb-2 text-xl lg:text-2xl font-semibold text-black ">
                            {workList.data2.followers}
                        </h5>
                        <p className="text-black">Projects</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default WorkList;

