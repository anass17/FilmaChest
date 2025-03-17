import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import SideMenu from "../layouts/SideMenu";
import { Inertia } from "@inertiajs/inertia";

export default function AddMovie({errors, user}) {

    let [update, setUpdate] = useState(Object.keys(errors).length !== 0 ? true : false);

    let [data, setData] = useState({first_name: user.first_name, last_name: user.last_name, password: ''});

    function handleChange(e) {
        let {name, value} = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    function handleClick(e) {
        e.preventDefault();
        setUpdate(true);
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.visit('/profile/update', {
            method: 'PUT', 
            data: data
        });
    }

    return (
        <>
            <Navbar />

            <div className="text-white flex">
                
                <div className="py-12 flex-1 px-10">
                    <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
                        <h1 className="mb-12 text-4xl font-semibold">Profile</h1>
                        <div className="flex gap-3">
                            <div className="mb-4 flex-1">
                                <label htmlFor="first_name" className="block text-sm font-medium text-slate-200">First Name</label>
                                <input type="text" id="first_name" name="first_name" value={data.first_name} onChange={handleChange} placeholder="Add First Name" className={update == true ? "mt-1 block w-full px-3 py-2 border placeholder:text-slate-400 text-slate-200 border-gray-500 rounded bg-gray-700 shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" : 'outline-none mt-1 pl-2 text-slate-400'} disabled={update == false ? 'disabled' : ''} />
                                {errors?.first_name && <small className="text-red-400 block">{errors.first_name}</small>}
                            </div>
                            <div className="mb-4 flex-1">
                                <label htmlFor="last_name" className="block text-sm font-medium text-slate-200">Last Name</label>
                                <input type="text" id="last_name" name="last_name" value={data.last_name} onChange={handleChange} placeholder="Add Last Name" className={update == true ? "mt-1 block w-full px-3 py-2 border placeholder:text-slate-400 text-slate-200 border-gray-500 rounded bg-gray-700 shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" : 'outline-none mt-1 pl-2 text-slate-400'} disabled={update == false ? 'disabled' : ''} />
                                {errors?.last_name && <small className="text-red-400 block">{errors.last_name}</small>}
                            </div>
                        </div>
                        <div className="mb-4 flex-1">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-200">Email</label>
                            <input type="text" id="email" name="email" value={user.email} placeholder="Add Email" className='outline-none mt-1 pl-2 text-slate-400' disabled/>
                        </div>
                        <div className="mb-4 flex-1">
                            <label htmlFor="password" className="block text-sm font-medium text-slate-200">Password</label>
                            <input type="text" id="password" name="password" onChange={handleChange} value={data.password} placeholder="*****" className={update == true ? "mt-1 block w-full px-3 py-2 border placeholder:text-slate-400 text-slate-200 border-gray-500 rounded bg-gray-700 shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" : 'outline-none mt-1 pl-2 text-slate-400'} disabled={update == false ? 'disabled' : ''} />
                            {errors?.password && <small className="text-red-400 block">{errors.password}</small>}
                        </div>
                        {
                            update == false ? (
                                <div className="flex justify-between items-center mt-6">
                                    <button type="button" onClick={handleClick} className="w-full max-w-40 py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm cursor-pointer font-medium text-white bg-slate-600 hover:bg-slate-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FC684D]">Edit</button>
                                </div>
                            ) : (
                                <div className="flex justify-between items-center mt-6">
                                    <button type="submit" className="w-full max-w-40 py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm cursor-pointer font-medium text-white bg-[#FC684D] hover:bg-[#FF5F2A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FC684D]">Save</button>
                                </div>
                            )
                        }
                        
                    </form>
                </div>
            </div>
        </>
    )
}