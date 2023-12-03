import Link from "next/link";

export default function NotFound() {
  return (

    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-[#d7f5dc] p-14 text-center shadow-xl">
        <h1 className="animate-pulse mb-4 text-3xl font-semibold text-red-500">
          Error - 404
        </h1>
        <p className="text-black font-medium">
          Oops! The page you are looking for could not be found.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block rounded bg-green-600 px-4 py-2 font-medium hover:bg-green-800 duration-300 text-[#d7f5dc]"
        >
          Go back to Home Page
        </Link>
      </div>
    </div>

  );
}

