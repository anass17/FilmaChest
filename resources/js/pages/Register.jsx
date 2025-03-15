import React from "react";
import { useState } from "react"
import { Inertia } from '@inertiajs/inertia';
import { Link } from "@inertiajs/inertia-react";

export default function Register({errors}) {

    let [data, setData] = useState({first_name: '', last_name: '', email: '', password: '', password_confirmation: ''})

    function handleChange(e) {
        let {value, name} = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        Inertia.post('/register', data);
    }

    return (
        <>
            <div className="mx-auto h-screen relative flex justify-center items-center bg-[url('/public/imgs/bg.jpg')] bg-cover bg-center">
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-75"></div>
                <form onSubmit={handleSubmit} className="space-y-4 w-full relative z-10 max-w-lg bg-[#4a5565DD] text-white rounded-lg py-7 px-9 shadow-md">
                    <h1 className="text-2xl font-bold mb-8 text-center text-[#FF5F2A]">Register</h1>
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label htmlFor="first_name" className="block text-sm font-medium">First Name</label>
                            <input type="text" id="first_name" name="first_name" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                            {errors?.first_name && <small className="text-red-400">{errors.first_name}</small>}
                        </div>
                        <div className="flex-1">
                            <label htmlFor="last_name" className="block text-sm font-medium">Last Name</label>
                            <input type="text" id="last_name" name="last_name" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-500 shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                            {errors?.last_name && <small className="text-red-400">{errors.last_name}</small>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input type="text" id="email" name="email" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-500  focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                        {errors?.email && <small className="text-red-400">{errors.email}</small>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-500  shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                        {errors?.password && <small className="text-red-400">{errors.password}</small>}
                    </div>
                    <div>
                        <label htmlFor="password_confirmation" className="block text-sm font-medium">Password Confirmation</label>
                        <input type="password" id="password_confirmation" name="password_confirmation" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border bg-gray-500  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                        {errors?.password_confirmation && <small className="text-red-400">{errors.password_confirmation}</small>}
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button type="submit" className="w-full max-w-40 py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm cursor-pointer font-medium text-white bg-[#FC684D] hover:bg-[#FF5F2A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FC684D]">Register</button>
                        <Link href="/login">You have an account?</Link>
                    </div>
                </form>
            </div>
        </>
    )
}