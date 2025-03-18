import React, { useEffect } from "react";
import { useState } from "react"
import { Inertia } from '@inertiajs/inertia';
import { Link } from "@inertiajs/inertia-react";

export default function Register({errors}) {

    let [data, setData] = useState({first_name: '', last_name: '', email: '', password: '', password_confirmation: ''})
    let [formErrors, setFormErrors] = useState(errors)

    function handleChange(e) {
        let {value, name} = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    useEffect(() => {
        setFormErrors(errors);
    }, [errors])

    function handleSubmit(e) {
        e.preventDefault();

        let checkErrors = {}

        if (data.first_name.length < 2) {
            checkErrors.first_name = 'First Name is too short'
        }
        if (data.last_name.length < 2) {
            checkErrors.last_name = 'Last Name is too short'
        }
        if (data.email.search(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/) < 0) {
            checkErrors.email = 'Please enter a valid email address'
        }
        if (data.password.length < 8) {
            checkErrors.password = 'Password must be at least 8 characters'
        }
        if (data.password_confirmation != data.password) {
            checkErrors.password_confirmation = 'The passwords do not match.'
        }

        setFormErrors(checkErrors);

        if (Object.keys(checkErrors).length === 0) {
            Inertia.post('/register', data);
        }

    }

    return (
        <>
            <div className="mx-auto h-screen relative flex justify-center items-center bg-[url('/public/imgs/bg.jpg')] bg-cover bg-center px-3">
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60"></div>
                <form onSubmit={handleSubmit} className="space-y-4 w-full relative z-10 max-w-lg bg-[#4a5565DD] text-white rounded-lg py-7 px-5 md:px-9 shadow-md">
                    <h1 className="text-2xl font-bold mb-8 text-center text-[#FF5F2A]">Register</h1>
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label htmlFor="first_name" className="block text-sm font-medium text-slate-200">First Name</label>
                            <input type="text" id="first_name" name="first_name" placeholder="Karim" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-500 bg-[#62748e80] placeholder:text-slate-400 rounded-md shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                            {formErrors.first_name && <small className="text-red-400">{formErrors.first_name}</small>}
                        </div>
                        <div className="flex-1">
                            <label htmlFor="last_name" className="block text-sm font-medium text-slate-200">Last Name</label>
                            <input type="text" id="last_name" name="last_name" placeholder="Youssofi" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded-md border-slate-500 bg-[#62748e80] placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                            {formErrors.last_name && <small className="text-red-400">{formErrors.last_name}</small>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-200">Email</label>
                        <input type="text" id="email" name="email" placeholder="email@example.com" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm border-slate-500 bg-[#62748e80] placeholder:text-slate-400  focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                        {formErrors.email && <small className="text-red-400">{formErrors.email}</small>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-200">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter a strong email" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded-md border-slate-500 bg-[#62748e80] placeholder:text-slate-400  shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                        {formErrors.password && <small className="text-red-400">{formErrors.password}</small>}
                    </div>
                    <div>
                        <label htmlFor="password_confirmation" className="block text-sm font-medium text-slate-200">Password Confirmation</label>
                        <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Re-enter password" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border bg-[#62748e80] placeholder:text-slate-400 border-slate-500 rounded-md shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                        {formErrors.password_confirmation && <small className="text-red-400">{formErrors.password_confirmation}</small>}
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button type="submit" className="w-full max-w-32 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm cursor-pointer font-medium text-white bg-[#FC684D] hover:bg-[#FF5F2A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FC684D]">Register</button>
                        <Link href="/login" className="text-sm font-semibold">You have an account?</Link>
                    </div>
                </form>
            </div>
        </>
    )
}