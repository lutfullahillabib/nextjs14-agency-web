async function getFeauterProjectData() {
    const res = await fetch(`${process.env.BASE_URL}api/FeaturedProject`);
    if (!res.ok) {
        throw new Error("FeauterProjectList Calling Fail");
    }
    return res.json();
}

import Image from "next/image";
import Link from "next/link";

const FeauterProject = async () => {

    const feauterProject = await getFeauterProjectData();

    return (
        <section className="bg-green-50 px-10 py-16">

            <div>
                <h4 className="font-medium text-lg text-green-600 uppercase mb-4">
                    Featured Project
                </h4>
                <p className="text-xl lg:text-3xl lg:w-3/5 font-semibold text-black capitalize">
                    We provide the Perfect Solution to your business growth
                </p>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-2">
                    <div className="flex items-center">
                        <div className="w-full">
                            <Image
                                src={feauterProject[0]["image"]}
                                width={603}
                                height={531}
                                alt="Feauter-Project"
                                className="object-cover rounded"
                                priority
                            />
                            <p className="text-sm text-[#2E3E5C] pt-5">
                                {feauterProject[0]["remark"]} - December 03, 2023
                            </p>
                            <h3 className="text-2xl font-bold text-[#2E3E5C] pt-2 hover:text-teal-600 hover:underline">
                                <Link href={feauterProject[0]["live"]} target="_blank">
                                    {feauterProject[0]["title"]}
                                </Link>
                            </h3>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 p-2 gap-4">
                            <div className="grid gap-4">
                                <div>
                                    <Image
                                        className="min-w-full rounded-lg"
                                        src={feauterProject[1]["image"]}
                                        width={603}
                                        height={531}
                                        alt="Feauter-Project"
                                        priority={true}
                                    />
                                    <p className="text-sm text-[#2E3E5C] pt-5">
                                        {feauterProject[1]["remark"]} - December 03, 2023
                                    </p>
                                    <h3 className="text-base font-bold text-[#2E3E5C] pt-2 hover:text-teal-600 hover:underline">
                                        <Link href={feauterProject[1]["live"]} target="_blank">
                                            {feauterProject[1]["title"]}
                                        </Link>
                                    </h3>
                                </div>
                                <div>
                                    <Image
                                        className="min-w-full rounded-lg"
                                        src={feauterProject[2]["image"]}
                                        width={603}
                                        height={531}
                                        alt="Feauter-Project"
                                        priority={true}
                                    />
                                    <p className="text-sm text-[#2E3E5C] pt-5">
                                        {feauterProject[2]["remark"]} - December 03, 2023
                                    </p>
                                    <h3 className="text-base font-bold text-[#2E3E5C] pt-2 hover:text-teal-600 hover:underline">
                                        <Link href={feauterProject[3]["live"]} target="_blank">
                                            {feauterProject[3]["title"]}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <Image
                                        className="min-w-full rounded-lg"
                                        src={feauterProject[3]["image"]}
                                        width={603}
                                        height={531}
                                        alt="Feauter-Project"
                                        priority={true}
                                    />
                                    <p className="text-sm text-[#2E3E5C] pt-5">
                                        {feauterProject[3]["remark"]} - December 03, 2023
                                    </p>
                                    <h3 className="text-base font-bold text-[#2E3E5C] pt-2 hover:text-teal-600 hover:underline">
                                        <Link href={feauterProject[3]["live"]} target="_blank">
                                            {feauterProject[3]["title"]}
                                        </Link>
                                    </h3>
                                </div>
                                <div>
                                    <Image
                                        className="min-w-full rounded-lg"
                                        src={feauterProject[4]["image"]}
                                        width={603}
                                        height={531}
                                        alt="Feauter-Project"
                                        priority={true}
                                    />
                                    <p className="text-sm text-[#2E3E5C] pt-5">
                                        {feauterProject[4]["remark"]} - December 03, 2023
                                    </p>
                                    <h3 className="text-base font-bold text-[#2E3E5C] pt-2 hover:text-teal-600 hover:underline">
                                        <Link href={feauterProject[4]["live"]} target="_blank">
                                            {feauterProject[4]["title"]}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FeauterProject;

