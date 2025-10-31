import React from 'react';
import Gato_Banner from '../assets/Gato_Banner.png';

export default function Banner() {


    return (
        <section 
            className="relative w-full h-[500px] bg-[#81B29A] overflow-hidden flex items-center justify-between p-8 md:p-12"
            style={{ fontFamily: 'sans-serif' }}
        >

            <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-full">
                <h1 className="text-[#1E1E1E] text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    No compres amor, <br/>
                    <span className="text-[#f7c980]">adópta</span>.<br/>
                    <span className="text-[#1E1E1E]">Tu corazón y su <br/> vida te lo agradecerán</span>
                </h1>
            </div>

            <div className="absolute right-1/4 transform bottom-0 h-[80%] w-auto flex items-end justify-center z-10">
                <img 
                    src={Gato_Banner} 
                    alt="Gato Banner" 
                    className="h-full w-auto object-contain scale-x-[-1]"
                />
            </div>

            <div className="absolute right-5 bottom-80 z-10">
                <button 
                    type="button"
                    className="flex items-center justify-center
                        whitespace-nowrap
                        px-10 py-4 text-2xl font-semibold rounded-md
                        bg-[#f7c980] text-gray-800 
                        hover:bg-[#f5bb60] 
                        shadow-lg transition duration-300 ease-in-out
                        transform hover:scale-105
                    "
                >
                    <a href="/Adoptamigos">
                        Encuentra tu compañero
                    </a>
                </button>
            </div>
        </section>
    );
}