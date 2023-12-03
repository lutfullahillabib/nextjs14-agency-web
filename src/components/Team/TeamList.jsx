async function getTeamListData() {
    const res = await fetch(`${process.env.BASE_URL}api/TeamList`);
    if (!res.ok) {
        throw new Error("TeamList Calling Fail");
    }
    return res.json();
}

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const TeamList = async () => {

    const teamData = await getTeamListData();

    return (
        <section className="bg-white mx-auto px-10">

            <div className="pt-16">
                <h3 className="font-medium text-lg text-green-600 uppercase mb-4">
                    Our Team Member
                </h3>
                <p className="text-xl lg:text-3xl lg:w-3/5 font-semibold text-black capitalize">
                    Check our awesome team members
                </p>
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-3 md:grid-cols-2 pt-8">
                {teamData.slice(0, 3).map((item, i) => (
                    <div
                        className=" bg-white border border-gray-300 rounded-lg shadow-lg group/team relative"
                        key={i}
                    >
                        <div className=" transition duration-300">
                            {/* group-hover/team:blur-sm */}
                            <Image
                                className="rounded object-cover"
                                src={item["image"]}
                                width={500}
                                height={300}
                                style={{
                                    width: "100%",
                                    height: "300px",
                                }}
                                alt={item["name"]}
                            />
                        </div>

                        <div className="p-5">
                            <h5 className="mb-2 text-2xl text-center font-semibold text-black">
                                {item["name"]}
                            </h5>
                            <p className="text-sm text-gray-500 text-center">
                                {item["bio"]}
                            </p>
                            <div className="absolute inset-0 justify-center flex items-center">
                                {/* hidden group-hover/team:flex */}
                                <div className="bg-white p-2 rounded-3xl shadow-lg flex justify-around gap-3 divide-x">
                                    <Link href={item["facebook"]}>
                                        <FaFacebookF className="text-gray-500 hover:text-black duration-300" />
                                    </Link>

                                    <Link href={item["twitter"]}>
                                        <FaTwitter className="text-gray-500 hover:text-black duration-300 ml-2" />
                                    </Link>

                                    <Link href={item["instagram"]}>
                                        <FaInstagram className="text-gray-500 hover:text-black duration-300 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default TeamList;


