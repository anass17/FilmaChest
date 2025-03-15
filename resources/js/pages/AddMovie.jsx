import React, { useState } from "react";
import Navbar from "../layouts/navbar";
import SideMenu from "../layouts/SideMenu";
import { Inertia } from "@inertiajs/inertia";

export default function AddMovie({errors}) {

    let [data, setData] = useState({title: '', description: '', category: '', year: '', country: '', duration: '', thumbnail: null});

    function handleChange(e) {
        let {value, name} = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
    
            reader.onload = function(e) {
                const fileURL = e.target.result;

                const imagePreview = document.getElementById('thumbnail-label');
                imagePreview.style.backgroundImage = `url('${fileURL}')`;
                imagePreview.style.height = '170px';
                imagePreview.textContent = '';
            };
    
            reader.readAsDataURL(file);
        }

        setData({
          ...data,
          thumbnail: file,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);

        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('year', data.year);
        formData.append('country', data.country);
        formData.append('duration', data.duration);
        formData.append('thumbnail', data.thumbnail);

        Inertia.post('/movies', formData);
    }


    return (
        <>
            <Navbar />

            <div className="text-white flex">

                <SideMenu activeLink={2} />
                
                <div className="py-12 flex-1 px-10">
                    <h1 className="mb-8 text-4xl font-semibold text-center">Add New Movie</h1>
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
                                <label htmlFor="thumbnail" id="thumbnail-label" className="bg-center bg-cover text-sm font-medium h-28 flex justify-center items-center gap-3 rounded border border-gray-500 bg-gray-700 focus:ring-[#FC684D] focus:border-[#FC684D] cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 512 512">
                                        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
                                    </svg>
                                    <span>Upload Thumbnail</span>
                                </label>
                                <input type="file" id="thumbnail" name="thumbnail" onChange={handleImageChange} className="hidden" />
                                <img id="imagePreview" src="" />
                                {errors?.thumbnail && <small className="text-red-400">{errors.thumbnail}</small>}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <button type="submit" className="w-full max-w-40 py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm cursor-pointer font-medium text-white bg-[#FC684D] hover:bg-[#FF5F2A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FC684D]">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}