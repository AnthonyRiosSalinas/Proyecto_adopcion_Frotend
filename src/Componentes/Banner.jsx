import React from 'react';
import Gato_Banner from '../assets/Gato_Banner.png';
import '../index.css';

export default function Banner() {

    return (

    //Contenedor del banner//   
        <section 
            className="relative w-full h-[500px] bg-[#81B29A] overflow-hidden flex items-center justify-between p-8 md:p-12 shadow-xl"
            style={{ fontFamily: 'sans-serif' }}
        >
    {/*Texto del banner*/}        
            <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-full">
                <h1 className="text-[#1E1E1E] text-4xl lg:text-6xl font-bold leading-tight mb-4 font-Poppins">
                    No compres amor, <br/>
                    <span className="text-[#f7c980]">adoptalo</span>.<br/>
                    <span className="text-[#1E1E1E]">Tu corazón y su <br/> vida te lo agradecerán</span>
                </h1>
            </div>

    {/*Imagen del banner*/}
            <div className="absolute right-90 transform bottom-0 h-[85%] w-auto flex items-end justify-center z-15 drop-shadow-[-70px_40px_35px_rgba(10,40,0,0.40)] ">
                <img 
                    src={Gato_Banner} 
                    alt="Gato Banner" 
                    className="h-full w-auto object-contain scale-x-[-1]"
                />
            </div>

    {/*Boton del banner*/}    
            <div className="absolute right-5 bottom-90 z-10">
                <button 
                    type="button"
                    className="flex items-center justify-center
                        whitespace-nowrap
                        px-10 py-5 text-2xl font-semibold rounded-md
                        bg-[#f7c980] text-gray-800 
                        hover:bg-[#f5bb60] 
                        shadow-lg transition duration-500 ease-in-out
                        transform hover:scale-105
                        font-Poppins
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