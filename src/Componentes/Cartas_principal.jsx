import React from "react"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

export default function Cartas_principal() {
{/*Arreglo de las cartas*/}    
    const cards = [
        {
            title: "Adopta",
            text: "Lorem ipsum, etiam amet ut nibh sed lorem scelerisque sed.",
            img: img1,
            imgWidth: '9rem',
        },
        {
            title: "Dona",
            text: "Lorem ipsum etiam amet ut nibh sed lorem scelerisque sed.",
            img: img2,
            imgWidth: '9rem',

        },
        {
            title: "Apadrina",
            text: "Lorem ipsum etiam amet ut nibh sed lorem scelerisque sed.",
            img: img3,
            imgWidth: '9rem',

        }
    ]

    return (
{/*Contenedor de las cartas*/},        
        <div className="mx-auto max-w-6xl px-4 pb-20">
{/*conetenerdor responsive*/}            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center mt-12">
                
{/*Renderizado de las cartas */}                
                {cards.map((c) => (                        
                        <div key={c.title} className="relative overflow-visible 
                                                        bg-white border-2 
                                                        border-black-400 rounded-2xl 
                                                        shadow-lg p-8 w-full 
                                                        max-w-70 text-center 
                                                        flex flex-col 
                                                        items-center justify-center min-h-100 
                                                        transition duration-300 ease-in-out hover:scale-105 
                                                        cursor-pointer">
                        
{/*Titulo*/}                        
                        <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
                        
{/*Descripcion*/}                        
                        <p className="text-gray-600">{c.text}</p>

{/*Imagen de las cartas*/}                        
                        <img
                            src={c.img}
                            alt={c.title}
                            loading="lazy"
                            style={{
                                width: c.imgWidth ?? '9rem',
                                position: 'absolute',
                                right: (c.imgRight !== undefined) ? c.imgRight : '-1.5rem',
                                bottom: (c.imgBottom !== undefined) ? c.imgBottom : '-1.5rem',
                                zIndex: c.imgZ ?? 20,
                                pointerEvents: 'none',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}