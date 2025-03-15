import React, { useEffect } from "react"
import { Link } from "@inertiajs/inertia-react";

export default function Navbar() {

    let userMenu;

    useEffect(function () {
        userMenu = document.getElementById('user-menu');
    })

    function windowCloseUserMenu(e) {
        if (!userMenu.contains(e.target)) {
            userMenu.classList.add('hidden');
            document.removeEventListener('click', windowCloseUserMenu)
        }
    }

    function toggleUserMenu(e) {
        e.stopPropagation();

        if (userMenu.classList.contains('hidden')) {
            userMenu.classList.remove('hidden');
            document.addEventListener('click', windowCloseUserMenu)
        } else {
            userMenu.classList.add('hidden');
            document.removeEventListener('click', windowCloseUserMenu)
        }
    }

    return (
        <header className="bg-[#4a5565]">
            <div className="flex justify-between container items-center py-3 max-w-[1250px] mx-auto text-white h-18">
                <Link href="/movies" className="font-semibold text-2xl"><span className="text-[#FF5F2A]">Filma</span>Chest</Link>
                <div className="w-full max-w-sm min-w-[200px]">
                    <div className="relative">
                        <input id="movies-search" className="peer w-full bg-transparent placeholder:text-gray-100 text-white text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"/>
                        <label htmlFor="movies-search" className="absolute cursor-text bg-[#4a5565] px-1 left-2.5 top-2.5 text-slate-300 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                            Search for ...
                        </label>
                        <div className="absolute right-1 top-1 p-1 rounded text-center text-sm text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <nav className="flex justify-center items-center gap-5">
                    <Link href="/movies">Movies</Link>
                    <button type="button" onClick={toggleUserMenu} class="cursor-pointer">User Name</button>
                    <div className="relative">
                        <button type="button" onClick={toggleUserMenu} id="user-profile-picture" className="cursor-pointer block w-11 h-11 bg-white rounded-full border-2 border-[#FF5F2A] overflow-hidden">
                            <img src="" className="w-full" />
                        </button>
                        <div id="user-menu" className="absolute -right-5 -bottom-5 translate-y-full min-w-48 hidden">
                            <div className="bg-[#4a5565] flex flex-col gap-3 w-full rounded-md py-4 px-5">
                                <Link href="/profile" className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" width="16" height="16" viewBox="0 0 448 512">
                                    {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                                    Profile
                                </Link>
                                <Link href="/activites" className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" width="16" height="16" viewBox="0 0 512 512">
                                    {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                    <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"/></svg>
                                    Activities
                                </Link>
                                <Link href="/logout" className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" width="16" height="16" viewBox="0 0 512 512">
                                    {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}