import React, { useEffect } from "react";
import { useState } from "react"
import { Inertia } from '@inertiajs/inertia';
import { Link } from "@inertiajs/inertia-react";

export default function Login({errors}) {

    let [data, setData] = useState({email: '', password: ''})
    let [formErrors, setFormErrors] = useState({});
    let [showPassword, setShowPassword] = useState(false);

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
            <div className="mx-auto h-screen relative flex justify-center items-center px-3 bg-[url('/public/imgs/bg.jpg')] bg-cover bg-center">
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-75"></div>
                <form onSubmit={handleSubmit} className="space-y-4 w-full relative z-10 max-w-lg bg-[#4a5565DD] text-white rounded-lg py-7 px-5 md:px-9 shadow-md">
                    <h1 className="text-2xl font-bold mb-8 text-center text-[#FF5F2A]">Access Your Account</h1>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-200">Email</label>
                        <input type="text" id="email" name="email" onChange={handleChange} value={data.email} placeholder="example@gmail.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-500  focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                        {formErrors.email && <small className="text-red-400">{formErrors.email}</small>}
                        {errors && <small className="text-red-400">{errors}</small>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-200">Password</label>
                        <div className="relative">
                            {
                                showPassword ?
                                (
                                    <button type="button" className="absolute top-2 right-3" onClick={() => setShowPassword(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-slate-200" viewBox="0 0 576 512">
                                            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                                        </svg>
                                    </button>
                                ) :
                                (
                                    <button type="button" className="absolute top-2 right-3" onClick={() => setShowPassword(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-slate-200" viewBox="0 0 640 512">
                                            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
                                        </svg>
                                    </button>
                                )
                            }
                            
                            
                            <input type={showPassword ? 'text' : 'password'} id="password" name="password" onChange={handleChange} value={data.password} placeholder="Enter a strong password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-500  shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                        </div>
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