import React from "react";
import Navbar from "../layouts/navbar";
import SideMenu from "../layouts/SideMenu";

export default function Dashboard() {

    return (
        <>
            <Navbar />

            <div className="text-white flex">

                <SideMenu activeLink={1} />
                
                <div className="py-12 flex-1 px-10">
                    <h1 className="mb-8 text-4xl font-semibold">Dashboard</h1>
                    <div className="grid grid-cols-2 gap-5 *:rounded-md *:bg-gray-800 max-w-xl *:py-5 *:px-7 mb-16">
                        <div>
                            <h4 className="font-normal block mb-4 text-3xl">142</h4>
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-[#FF5F2A]" viewBox="0 0 640 512">
                                    {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/>
                                </svg>
                                <h3 class="text-lg">Users</h3>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-normal block mb-4 text-3xl">15</h4>
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-[#FF5F2A]" viewBox="0 0 512 512">
                                    {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                    <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM48 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L64 96c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM160 128l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L192 96c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0z"/>
                                </svg>
                                <h3 class="text-lg">Movies</h3>
                            </div>
                        </div>
                    </div>
                    <div class="mx-auto">
                        <h2 className="text-center font-semibold text-xl mb-7">Recently Added</h2>
                        <div className="grid grid-cols-3 gap-4">

                            <a href="#" class="relative grid max-w-lg flex-col items-end justify-center overflow-hidden rounded-lg bg-white min-h-48 group">
                                <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center grayscale-50 group-hover:grayscale-0 transition-all group-hover:scale-125" style={{backgroundImage: "url('/imgs/spidey.webp')"}}>
                                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-black opacity-75 group-hover:opacity-25 transition-all"></div>
                                </div>
                                <div class="relative text-center p-6 px-6 py-14 md:px-12">
                                    <h2 class="mb-6 text-3xl font-medium text-white group-hover:opacity-0">
                                        Spider-Man 2
                                    </h2>
                                </div>
                            </a>
                            <a href="#" class="relative grid max-w-lg flex-col items-end justify-center overflow-hidden rounded-lg bg-white min-h-48 group">
                                <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center grayscale-50 group-hover:grayscale-0 transition-all group-hover:scale-125" style={{backgroundImage: "url('/imgs/spidey.webp')"}}>
                                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-black opacity-75 group-hover:opacity-25 transition-all"></div>
                                </div>
                                <div class="relative text-center p-6 px-6 py-14 md:px-12">
                                    <h2 class="mb-6 text-3xl font-medium text-white group-hover:opacity-0">
                                        Spider-Man 2
                                    </h2>
                                </div>
                            </a>
                            <a href="#" class="relative grid max-w-lg flex-col items-end justify-center overflow-hidden rounded-lg bg-white min-h-48 group">
                                <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center grayscale-50 group-hover:grayscale-0 transition-all group-hover:scale-125" style={{backgroundImage: "url('/imgs/spidey.webp')"}}>
                                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-black opacity-75 group-hover:opacity-25 transition-all"></div>
                                </div>
                                <div class="relative text-center p-6 px-6 py-14 md:px-12">
                                    <h2 class="mb-6 text-3xl font-medium text-white group-hover:opacity-0">
                                        Spider-Man 2
                                    </h2>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}