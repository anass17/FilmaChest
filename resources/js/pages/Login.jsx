import React, { useEffect } from "react";
import { useState } from "react"
import { Inertia } from '@inertiajs/inertia';
import { Link } from "@inertiajs/inertia-react";

export default function Login({errors}) {

    let [data, setData] = useState({email: '', password: ''})

    function handleChange(e) {
        let {value, name} = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(data);

        
        Inertia.post('/login', data);
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
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input type="text" id="email" name="email" onChange={handleChange} value={data.email} placeholder="example@gmail.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-500  focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                        {errors && <small className="text-red-400">{errors}</small>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange} value={data.password} placeholder="Enter a strong password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-500  shadow-sm focus:outline-none focus:ring-[#FC684D] focus:border-[#FC684D] sm:text-sm" />
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button type="submit" className="w-full max-w-40 py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm cursor-pointer font-medium text-white bg-[#FC684D] hover:bg-[#FF5F2A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FC684D]">Login</button>
                        <Link href="/register">Create an account?</Link>
                    </div>
                </form>
            </div>
        </>
    )
}