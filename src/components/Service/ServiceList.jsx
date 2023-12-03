async function getServiceList() {
    const res = await fetch(`${process.env.BASE_URL}api/AllService`);
    if (!res.ok) {
        throw new Error("ServiceList Calling Fail");
    }
    return res.json();
}

import Image from "next/image";

const ServiceList = async () => {

    const serviceList = await getServiceList();

    return (
        <section className="bg-white mx-auto px-10">

            <div className="pt-16">
                <h3 className="font-medium text-lg text-green-600 uppercase mb-4">
                    Our All Services
                </h3>
                <p className="text-xl lg:text-3xl lg:w-2/5 font-semibold text-black capitalize">
                    We Provide BestWeb design services
                </p>
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-2 pt-8">
                {serviceList.map((service, i) => (
                    <div
                        className=" bg-white rounded-lg shadow-lg duration-300"
                        key={i}
                    >
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl text-start font-semibold text-black">
                                {service["title"]}
                            </h5>
                            <p className="text-sm text-gray-400 text-start">
                                {service["des"]}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-4">
                            <div className="grid gap-4">
                                <div>
                                    <Image
                                        className="min-w-full rounded-lg"
                                        src={service["image1"]}
                                        width={358}
                                        height={164}
                                        alt={service['title']}
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="min-w-full rounded-lg"
                                        src={service["image2"]}
                                        alt={service['title']}
                                        width={358}
                                        height={263}
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <Image
                                        className="min-w-full rounded-lg"
                                        src={service["image3"]}
                                        width={358}
                                        height={263}
                                        alt={service['title']}
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="min-w-full rounded-lg"
                                        src={service["image4"]}
                                        alt={service['title']}
                                        width={358}
                                        height={263}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ServiceList;


