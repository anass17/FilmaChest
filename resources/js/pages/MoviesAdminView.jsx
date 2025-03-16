import React from "react";
import Navbar from "../layouts/navbar";
import Pagination from "../layouts/Pagination";
import SideMenu from "../layouts/SideMenu";
import MovieCardAdminView from "../layouts/MovieCardAdminView";

export default function MoviesAdminView({movies}) {

    return (
        <>
            <Navbar />
            
            <div className="text-white flex">
            
                <SideMenu activeLink={3} />
                
                <div className="py-12 flex-1 px-10">
                    <h1 className="mb-8 text-3xl font-semibold text-center">Manage Movies</h1>

                    <div id="Search-input" className="w-full max-w-sm min-w-[200px] mb-8 mx-auto">
                            <div className="relative flex items-center">
                            
                                <input
                                    className="bg-gray-900 w-full placeholder:text-slate-300 text-white text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow"
                                    placeholder="Search for ..." 
                                />
                                
                                <button
                                className="rounded-md bg-[#FC684D] font-semibold tracking-wide py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                                type="button"
                                >
                                Search
                                </button> 
                            </div>
                        </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                        {
                            movies.map((item, index) => {
                                return(
                                    <MovieCardAdminView key={index} movie={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}