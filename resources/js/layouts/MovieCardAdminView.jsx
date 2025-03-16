import { Inertia } from "@inertiajs/inertia"
import { Link } from "@inertiajs/inertia-react"
import React, {useState} from "react"

export default function MovieCardAdminView({movie}) {
    let [showModal, setShowModal] = useState(false);

    function handleClick() {

        setShowModal(false);

        Inertia.delete('/movies/' + movie.id);
    }

    return (

        <>
            {showModal && (
                <div
                    className="fixed z-[50] grid h-screen w-screen top-0 left-0 place-items-center bg-[#00000040] backdrop-blur-[2px]"
                >
                    <div
                        className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-gray-700 shadow-sm"
                    >
                        <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-400">
                            Confirm Delete
                        </div>
                        <div className="relative border-t border-slate-200 py-4 leading-normal text-gray-200 font-light">
                            <p className="mb-3">Are you sure you want to delete this movie?</p>
                            <b>{movie.title}</b>
                        </div>
                        <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
                            <button onClick={() => setShowModal(false)} className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-200 hover:text-white" type="button">
                                Cancel
                            </button>
                            <button onClick={handleClick} className="rounded-md bg-red-500 hover:bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg ml-2" type="button">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="relative grid max-w-lg flex-col items-center justify-center overflow-hidden rounded-lg bg-white min-h-48 group movie-card-view">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center grayscale-50 group-hover:grayscale-0 transition-all group-hover:scale-125" style={{backgroundImage: `url('/storage/uploads/${movie.thumbnail}')`}}>
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-black opacity-75 group-hover:opacity-25 transition-all"></div>
                </div>
                <div className="relative text-center p-6 px-6 py-14 md:px-12">
                    <h2 className="text-xl font-medium text-white group-hover:opacity-0">
                        {movie.title}
                    </h2>
                    <div className="gap-3 justify-center flex absolute top-0 items-center left-0 w-full h-full buttons">
                        <Link href={"movies/" + movie.id + '/edit'} className="rounded-full w-10 h-10 flex justify-center items-center bg-gray-900 text-[#FF5F2A] border-2 border-[#FF5F2A]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white" viewBox="0 0 512 512">
                                {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                            </svg>
                        </Link>
                        <button type="button" onClick={() => setShowModal(true)} className="rounded-full w-10 h-10 flex justify-center items-center bg-gray-900 text-[#FF5F2A] border-2 border-[#FF5F2A]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white" viewBox="0 0 448 512">
                                {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}