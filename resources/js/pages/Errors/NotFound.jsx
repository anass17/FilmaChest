import React from "react";
import Navbar from "../../layouts/Navbar";

export default function NotFound() {

    return (
        <>
            <Navbar />

            <div className="text-center text-white py-20 px-4">
                <h1 className="mb-5 text-2xl font-semibold">Ressource Not Found</h1>
                <p className="text-slate-400">The page or movie you are looking for was not found</p>
            </div>
        </>
    )

}