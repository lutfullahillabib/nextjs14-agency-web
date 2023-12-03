import Image from "next/image";
import Partner from "./Partner";

async function getHeroListData() {
    const res = await fetch(`${process.env.BASE_URL}api/HeroList`);
    if (!res.ok) {
        throw new Error("HeroList Calling Fail");
    }
    return res.json();
}

const HeroList = async () => {

    const heroListData = await getHeroListData();

    return (
        <section className="">
            <div className="mx-auto px-10 pt-28 grid grid-cols-1 gap-5 lg:grid-cols-2">

                <div className="flex justify-center items-start flex-col">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 capitalize">
                        {heroListData["title"]}
                    </h1>
                    <p className="font-medium text-lg mb-8 capitalize">
                        {heroListData["description"]}
                    </p>
                    <button className="inline-flex items-center justify-center gap-2 bg-green-500 rounded-lg p-4 text-white text-lg font-semibold font-poppins hover:bg-green-600 transition-all">
                        Get Started
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <Image
                                className="min-w-full min-h-full rounded-lg"
                                src={heroListData["image2"]}
                                width={358}
                                height={263}
                                style={{
                                    width: "358px",
                                    height: "263px",
                                    objectFit: "cover",
                                }}
                                alt="hero-img"
                                property="true"
                            />
                        </div>
                        <div>
                            <Image
                                className="min-w-full min-h-full rounded-lg"
                                src={heroListData["image1"]}
                                alt="hero-img"
                                property="true"
                                style={{
                                    width: "358px",
                                    height: "263px",
                                    objectFit: "cover",
                                }}
                                width={358}
                                height={263}
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <Image
                                className="min-w-full min-h-full rounded-lg"
                                src={heroListData["image4"]}
                                width={358}
                                height={263}
                                style={{
                                    width: "358px",
                                    height: "263px",
                                    objectFit: "cover",
                                }}
                                alt="hero-img"
                                property="true"
                            />
                        </div>
                        <div>
                            <Image
                                className="min-w-full min-h-full rounded-lg"
                                src={heroListData["image3"]}
                                alt="hero-img"
                                property="true"
                                width={358}
                                height={263}
                                style={{
                                    width: "358px",
                                    height: "263px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <Partner />
        </section>
    );
};

export default HeroList;
