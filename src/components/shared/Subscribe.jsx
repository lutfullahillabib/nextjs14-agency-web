
const Subscribe = () => {
    return (
        <div
            className="flex flex-col lg:flex-row justify-center items-center mx-auto px-4 py-6 ">
            <div className=" px-10 lg:w-3/4 flex flex-col justify-center items-center py-20">
                {/* shadow-lg rounded */}
                <h2 className="text-green-500 text-xl mb-5 font-medium uppercase">
                    SUBSCRIBE
                </h2>
                <p className="lg:w-96 text-center mb-3 text-black text-xl font-semibold capitalize">
                    Subscribe to get the latest news about us
                </p>
                <p className="text-center text-gray-400 mb-10 text-base font-medium capitalize">
                    Please drop your email below to get daily update about what we do
                </p>

                <div className="relative w-full lg:w-96">
                    <label
                        htmlFor="Email"
                        className="mb-2 text-sm font-medium text-black sr-only"
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        id="Email"
                        className="block w-full p-4 ps-5 text-sm text-black border border-black rounded-lg bg-white focus:border-green-500 focus:outline-none"
                        placeholder="Enter Your Email Address"
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-orange-600 hover:bg-green-500 duration-300 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;

