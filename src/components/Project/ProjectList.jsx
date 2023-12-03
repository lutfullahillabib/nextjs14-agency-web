async function getProjectListData() {
    const res = await fetch(`${process.env.BASE_URL}api/AllProject`);
    if (!res.ok) {
        throw new Error("ProjectList Calling Fail");
    }
    return res.json();
}

import Image from "next/image";

const ProjectList = async () => {

    const projectList = await getProjectListData();

    return (
        <section className="bg-white mx-auto px-10">

            <div className="pt-16">
                <h3 className="font-medium text-lg text-green-600 uppercase mb-4">
                    All Project
                </h3>

                <p className="text-xl lg:text-3xl lg:w-3/5 font-semibold text-black capitalize">
                    Better Agency/SEO Solution At Your Fingertips
                </p>
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-2 pt-8">
                {projectList.map((project, i) => (
                    <div
                        className="w-full bg-white rounded-lg shadow-lg duration-300"
                        key={i}
                    >
                        <div className="p-5 flex justify-center items-center">
                            <Image
                                src={project["image"]}
                                alt={project["title"]}
                                width={544}
                                height={472}
                                className="rounded-lg"
                            />
                        </div>

                        <h5 className="mb-2 p-5 text-2xl text-center font-semibold text-black">
                            {project["title"]}
                        </h5>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default ProjectList;


