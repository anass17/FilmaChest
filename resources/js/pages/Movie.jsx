import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

export default function Movie({ movie }) {

    const [hours, minutes] = movie.duration.split(':');

    return (
        <>
            <Navbar />

            <div>
                <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 py-16 text-white items-center relative z-10">
                    <div className="w-full h-96 overflow-hidden bg-cover bg-center rounded-md" style={{ backgroundImage: `url('/storage/uploads/${movie.thumbnail}')` }}></div>
                    <div className="">
                        <h1 className="font-semibold text-4xl mb-7 text-[#FF5F2A]">{movie.title}</h1>
                        <p className="mb-7">{movie.description}</p>
                        <div className="grid grid-cols-2 gap-x-5 gap-y-3 mb-4">
                            <div className="mb-4">
                                {/* <h3>Release Year</h3> */}
                                <div className="flex gap-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-gray-400" viewBox="0 0 448 512">
                                        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                        <path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"/>
                                    </svg>
                                    <span>{movie.year}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                {/* <h3>Country</h3> */}
                                <div className="flex gap-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-gray-400" viewBox="0 0 384 512">
                                        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg>
                                    <span>{movie.country}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                {/* <h3>Category</h3> */}
                                <div className="flex gap-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-gray-400" viewBox="0 0 576 512">
                                        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                    </svg>
                                    <span>{movie.category.name}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                {/* <h3>Duration</h3> */}
                                <div className="flex gap-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-gray-400" viewBox="0 0 512 512">
                                        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                                    </svg>
                                    <span>{hours}h {minutes}min</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="px-5 py-2 items-center rounded hover:bg-[#FF5F2A] border-2 border-white hover:border-[#FF5F2A] duration-150 transition flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 512 512">
                                {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                            </svg>
                            <span>Add To Favorite</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}