import React, { useEffect } from "react";
import { useState } from "react"
import { Inertia } from '@inertiajs/inertia';
import { Link } from "@inertiajs/inertia-react";

export default function Login({errors}) {

    let [data, setData] = useState({email: '', password: ''})
    let [formErrors, setFormErrors] = useState({});

    function handleChange(e) {
        let {value, name} = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        let checkErrors = {}

        if (data.email.search(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/) < 0) {
            checkErrors.email = 'Please enter a valid email address'
        }
        if (data.password.length < 8) {
            checkErrors.password = 'Password must be at least 8 characters'
        }

        setFormErrors(checkErrors);
        
        if (Object.keys(checkErrors).length === 0) {
            Inertia.post('/login', data);
        }
    }

    useEffect(() => {
        if (errors) {
            setData({email: data.email, password: ''})
        }
    }, [errors]);

    return (
        <>
            <div className="mx-auto h-screen relative flex justify-center items-center bg-[url('/public/imgs/bg.jpg')] bg-cover bg-center">
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-75"></div>
                <form onSubmit={handleSubmit} className="space-y-4 w-full relative z-10 max-w-lg bg-[#4a5565DD] text-white rounded-lg py-7 px-9 shadow-md">
                    <h1 className="text-2xl font-bold mb-8 text-center text-[#FF5F2A]">Access Your Account</h1>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-200">Email</label>
                        <input type="text" id="email" name="email" onChange={handleChange} value={data.email} placeholder="example@gmail.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-500  focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                        {formErrors.email && <small className="text-red-400">{formErrors.email}</small>}
                        {errors && <small className="text-red-400">{errors}</small>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-200">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange} value={data.password} placeholder="Enter a strong password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-500  shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                        {formErrors.password && <small className="text-red-400">{formErrors.password}</small>}
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button type="submit" className="w-full max-w-32 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm cursor-pointer font-medium text-white bg-[#FC684D] hover:bg-[#FF5F2A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FC684D]">Login</button>
                        <Link href="/register" className="text-sm font-medium">Create an account?</Link>
                    </div>
                </form>
            </div>
        </>
    )
}