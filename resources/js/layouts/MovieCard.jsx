import { Link } from "@inertiajs/inertia-react"
import React from "react"

export default function MovieCard({ movie }) {

    let [hours, minutes] = movie.duration.split(':');

    return (
        <Link href={"/movies/" + movie.id} className="group">
            <div className="relative flex flex-col min-h-64 bg-gray-800 shadow-sm border border-gray-600 rounded-lg w-full overflow-hidden bg-center bg-cover">
                <div className="w-full h-full top-0 left-0 absolute bg-center bg-cover group-hover:scale-125 transition" style={{ backgroundImage: `url('/storage/uploads/${movie.thumbnail}')` }}></div>
                <div className="w-full h-full top-0 left-0 absolute bg-gradient-to-t from-black to-transparent "></div>
                <div className="p-4">
                    <div className="z-10 relative inline-block mb-4 rounded bg-[#fc684d] py-1 font-semibold tracking-wider px-4 border border-transparent text-xs text-white transition-all shadow-sm text-center">
                        {movie.category.name.toUpperCase()}
                    </div>
                    <div className="absolute bottom-6 left-4">
                        <h6 className="mb-2 text-white text-xl font-semibold">
                            {movie.title}
                        </h6>
                        <div className="flex gap-4">
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-slate-500" viewBox="0 0 448 512">
                                    {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                    <path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"/>
                                </svg>
                                <span className="text-sm text-slate-400 font-medium">{movie.year}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-slate-500" viewBox="0 0 512 512">
                                    {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                                </svg>
                                <span className="text-sm text-slate-400 font-medium">{hours}h {minutes}min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </Link>
    )
}