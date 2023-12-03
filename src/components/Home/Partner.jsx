async function getBrandListData() {
    const res = await fetch(`${process.env.BASE_URL}api/BrandList`);
    if (!res.ok) {
        throw new Error("BrandList Calling Fail");
    }
    return res.json();
}

import Image from "next/image";

const Partner = async () => {

    const brandData = await getBrandListData();

    return (
        <section className="w-full bg-[#F8FFF9] py-8 mt-14">

            <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-9 lg:grid-cols-4 ">

                {brandData.map((brand, i) => (
                    <Image
                        key={i}
                        src={brand["image"]}
                        alt={brand['name']}
                        width={115}
                        height={29}
                        priority={true}
                        className="object-cover self-center"
                    />
                ))}

            </div>

        </section>
    );
};

export default Partner;

