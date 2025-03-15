import React from "react"

export default function MovieCard() {
    return (
        <a href="#">
            <div className="relative flex flex-col bg-gray-800 shadow-sm border border-gray-600 rounded-lg w-full overflow-hidden">
                <div className="relative h-56 mb-2.5 overflow-hidden text-white">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="card-image" />
                </div>
                <div className="p-4">
                    <div className="mb-4 rounded bg-[#fc684d] py-1 font-semibold tracking-wider px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                        ACTION
                    </div>
                    <h6 className="mb-2 text-white text-xl font-semibold">
                        Website Review Check
                    </h6>
                    <p className="text-gray-300 leading-normal font-light">
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                        and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                        Barcelona.
                    </p>
                </div>
            </div> 
        </a>
    )
}