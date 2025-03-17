import React from "react";
import Navbar from "../../layouts/Navbar";

export default function Unauthorized() {

    return (
        <>
            <Navbar />

            <div className="text-center text-white py-20 px-4">
                <h1 className="mb-5 text-2xl font-semibold">Access Denied</h1>
                <p className="text-slate-400">You are not authorized to access this page</p>
            </div>
        </>
    )
    
}