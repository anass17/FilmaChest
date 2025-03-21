import React from "react";

export default function Pagination({count = 3}) {
    return (
        <div className="*:w-8 *:h-8 *:text-[17px] *:rounded-sm *:flex *:justify-center *:items-center flex gap-3 mt-10 justify-center">
            <button type="button" href="#" className="bg-[#FC684D]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-3.5 w-3.5">
                    {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                </svg>
            </button>
            {
                Array(count).fill(0).map((_, index) => <button type="button" href="#" key={index + 1}>{index + 1}</button>)
            }
            <button type="button" href="#" className="bg-[#FC684D]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-3.5 w-3.5">
                    {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                </svg>
            </button>
        </div>
    )
}