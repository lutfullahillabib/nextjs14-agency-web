'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (

        <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
            <div className="rounded-lg bg-[#d7f5dc] p-14 text-center shadow-xl">
                <h2 className="animate-pulse mb-4 text-3xl font-semibold text-red-500">
                    Something went wrong!
                </h2>
                <button
                    className="mt-10 inline-block rounded bg-green-600 px-4 py-2 font-medium hover:bg-green-800 duration-300 text-[#d7f5dc]"
                    onClick={() => reset()}
                // Attempt to recover by trying to re-render the segment
                >
                    Please, Try again
                </button>
            </div>
        </div>
    )
}


