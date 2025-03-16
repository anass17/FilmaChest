import React from "react";
import Navbar from "../layouts/navbar";
import MovieCard from "../layouts/MovieCard";
import Pagination from "../layouts/Pagination";

export default function Movies({movies}) {

    return (
        <>
            <Navbar />
            
            <div className="text-white py-10">
                <div className="container-xl">
                    <h1 className="mb-8 text-center text-3xl font-semibold">List of Movies</h1>
                    <div className="flex justify-between mb-10">
                        <div id="Search-input" className="w-full max-w-sm min-w-[200px]">
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
                        <div>
                            <div className="flex gap-3 items-center">
                                <label>Category</label>
                                <div className="w-full max-w-sm min-w-[170px]">      
                                    <div className="relative">
                                        <select
                                            className="w-full *:text-gray-800 placeholder:text-slate-400 text-slate-300 text-sm border border-slate-400 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                                            <option value="">All</option>
                                            <option value="Action">Action</option>
                                            <option value="Fiction">Fiction</option>
                                            <option value="Horror">Horror</option>
                                        </select>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        {
                            movies.map((item, index) => {
                                return (
                                    <MovieCard key={index} movie={item} />
                                )
                            })
                        }
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    )
}