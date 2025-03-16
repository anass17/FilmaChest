import React, { useState } from "react";
import Navbar from "../layouts/navbar";
import SideMenu from "../layouts/SideMenu";
import { Inertia } from "@inertiajs/inertia";

export default function AddMovie({errors, movie}) {

    let [data, setData] = useState({title: movie.title, description: movie.description, category: movie.category.id, year: movie.year, country: movie.country, duration: movie.duration});

    function handleChange(e) {
        let {value, name} = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        Inertia.put('/movies/' + movie.id, data);
    }


    return (
        <>
            <Navbar />

            <div className="text-white flex">

                <SideMenu activeLink={3} />
                
                <div className="py-12 flex-1 px-10">
                    <h1 className="mb-2 text-4xl font-semibold text-center">Edit An Existing Movie</h1>
                    <h2 className="text-lg font-semibold text-slate-500 mb-8 text-center">Movie: {movie.title}</h2>
                    <form  onSubmit={handleSubmit} className="mx-auto max-w-xl">
                        <div className="mb-3">
                            <label htmlFor="title" className="block text-sm font-medium">Title</label>
                            <input type="text" id="title" name="title" value={data.title} onChange={handleChange} placeholder="Add Movie Title" className="mt-1 block w-full px-3 py-2 border placeholder:text-slate-400 text-slate-200 border-gray-500 rounded bg-gray-700 shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                            {errors?.title && <small className="text-red-400">{errors.title}</small>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="block text-sm font-medium">Description</label>
                            <textarea type="text" id="description" name="description" value={data.description} onChange={handleChange} className="mt-1 h-32 resize-y block w-full px-3 py-2 placeholder:text-slate-400 text-slate-200 border border-gray-500 rounded shadow-sm bg-gray-700 focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" placeholder="Add a description ..."></textarea>
                            {errors?.description && <small className="text-red-400">{errors.description}</small>}
                        </div>
                        <div className="flex gap-3 mb-3">
                            <div className="flex-1">
                                <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
                                <div className="relative">
                                    <select
                                        name="category" id="category" value={data.category} onChange={handleChange} className="w-full bg-gray-700 placeholder:text-slate-300 text-slate-300 text-sm border border-gray-500 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] shadow-sm focus:shadow-md appearance-none cursor-pointer">
                                        <option value="">Select</option>
                                        <option value="1">Action</option>
                                        <option value="2">Fiction</option>
                                        <option value="3">Horror</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </div>
                                {errors?.category && <small className="text-red-400">{errors.category}</small>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="year" className="block text-sm font-medium">Release Year</label>
                                <input type="text" id="year" name="year" value={data.year} onChange={handleChange} placeholder="Format: 2025" className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded bg-gray-700  shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                                {errors?.year && <small className="text-red-400">{errors.year}</small>}
                            </div>
                        </div>
                        <div className="flex gap-3 mb-3">
                            <div className="flex-1">
                                <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
                                <div className="relative">
                                    <select
                                        name="country" id="country" onChange={handleChange} value={data.country} className="w-full bg-gray-700 placeholder:text-slate-300 text-slate-300 text-sm border border-gray-500 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] shadow-sm focus:shadow-md appearance-none cursor-pointer">
                                        <option value="">Select</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Canada">Canada</option>
                                        <option value="China">China</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Greece">Greece</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Korea">South Korea</option>
                                        <option value="Spain">Spain</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </div>
                                {errors?.country && <small className="text-red-400">{errors.country}</small>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="duration" className="block text-sm font-medium">Duration</label>
                                <input type="text" id="duration" name="duration" value={data.duration} onChange={handleChange} placeholder="Format: 3:40" className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded bg-gray-700  shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                                {errors?.duration && <small className="text-red-400">{errors.duration}</small>}
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="mb-3">
                                <div class="h-[200px] rounded bg-cover bg-center" style={{backgroundImage: `url('/storage/uploads/${movie.thumbnail}')`}}>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <button type="submit" className="w-full max-w-40 py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm cursor-pointer font-medium text-white bg-[#FC684D] hover:bg-[#FF5F2A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FC684D]">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}