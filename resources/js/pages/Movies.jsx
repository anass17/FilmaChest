import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import MovieCard from "../layouts/MovieCard";
import { usePage } from '@inertiajs/inertia-react';

export default function Movies({movies, categories}) {
    const { auth } = usePage().props;

    let [moviesList, setMoviesList] = useState(movies);
    let [filters, setFilters] = useState({search: '', category: ''});

    useEffect(() => {
        fetch(`/api/movies?search=${filters.search}&category=${filters.category}`)
        .then(response => response.json())
        .then(data => setMoviesList(data.movies));
    }, [filters]);

    function filterMovies(e) {
        e.preventDefault();
        let {value, name} = e.target;

        setFilters({
            ...filters,
            [name]: value
        })
    }

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
                                    onKeyUp={filterMovies}
                                    name="search"
                                    className="bg-gray-900 w-full placeholder:text-slate-300 text-white text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow"
                                    placeholder="Search for ..." 
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-3 items-center">
                                <label>Category</label>
                                <div className="w-full max-w-sm min-w-[170px]">      
                                    <div className="relative">
                                        <select onChange={filterMovies}
                                            name="category"
                                            className="w-full *:text-gray-800 placeholder:text-slate-400 text-slate-300 text-sm border border-slate-400 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                                            <option value="">All</option>
                                            {
                                                categories.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item.id}>{item.name}</option>
                                                    )
                                                })
                                            }
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
                            moviesList.map((item, index) => {
                                return (
                                    <MovieCard key={index} movie={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}