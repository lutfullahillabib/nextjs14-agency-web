async function TestimonialsListData() {
    const res = await fetch(`${process.env.BASE_URL}api/TestimonialList`);
    if (!res.ok) {
        throw new Error("TestimonialList Calling Fail");
    }
    return res.json();
}

import Image from "next/image";

const TestimonialsList = async () => {

    const testimonialsList = await TestimonialsListData();

    return (
        <section className="bg-white mx-auto px-10">

            <div className="pt-16">
                <h4 className="font-medium text-lg text-green-600 uppercase mb-4">
                    Testimonial List
                </h4>
                <p className="text-xl lg:text-3xl lg:w-3/5 font-semibold text-black capitalize">
                    Better Agency/SEO Solution At Your Fingertips
                </p>
            </div>

            <div className="grid grid-cols-1 justify-items-stretch gap-5 lg:grid-cols-3 md:grid-cols-2 pt-8">
                {testimonialsList.map((testimonial, i) => (
                    <div
                        className="max-w-2xl bg-white rounded-lg duration-300 shadow-lg"
                        key={i}
                    >
                        <div className="flex justify-center items-center pt-10">
                            <Image
                                src={testimonial["image"]}
                                width={96}
                                height={96}
                                alt={testimonial["name"]}
                                className="rounded-lg mx-auto w-32 h-24"
                            />
                        </div>

                        <div className="p-5 pt-10">
                            <p className="mb-2 text-sm text-center text-gray-400 capitalize">
                                {testimonial["msg"]}
                            </p>
                            <h3 className="text-2xl pt-5 text-center font-semibold text-black">
                                {testimonial["name"]}
                            </h3>
                            <p className="text-sm py-3 text-gray-500 text-center">
                                {testimonial["designation"]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default TestimonialsList;



