import React from 'react';
import Banner from '../Componentes/Banner.jsx';
import Card from '../Componentes/Cartas_principal.jsx';
import Carrusel from '../Componentes/Carrusel.jsx';
import Mascotas from '../assets/Mascotas.png';
import Gato_inicio from '../assets/Gato_inicio.png';
import Perro_inicio from '../assets/Perro_inicio.png';

export default function Inicio(){
    return (
        <div className="min-h-screen ">
            <Banner />
            <div className="w-full mx-auto py-12 md:py-24 relative">
                
                <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                        Cada mirada cuenta
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
                        En NIMADD creemos que cada mirada cuenta. Aquí encontrarás a perros y gatos rescatados que buscan una segunda oportunidad. Explora sus historias, conoce sus personalidades y descubre si alguno podría convertirse en tu compañero ideal.
                    </p>

                    <div className="flex justify-center mb-16">
                        <img 
                            src={Mascotas} 
                            alt="Fila de Mascotas" 
                            className="max-w-full h-auto"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-50 text-left pt-10">
                        
                        <div className="p-6">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                Sin fines de Lucro
                            </h3>
                            <p className="text-gray-700 leading-relaxed max-w-sm">
                                En NIMADD trabajamos por amor a los animales. <br/>
                                Apoyamos a refugios y conectamos a adoptantes sin buscar ganancias, solo hogares llenos de cariño.
                            </p>
                        </div>

                        <div className="p-6">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                No somos un albergue eutanásico
                            </h3>
                            <p className="text-gray-700 leading-relaxed max-w-sm">
                                En NIMADD promovemos la vida y la adopción responsable. <br/>
                                No apoyamos la eutanasia: cada animal merece amor, respeto y una nueva oportunidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img 
                    src={Perro_inicio} 
                    alt="Cachorro asomándose por la izquierda"
                    className="absolute z-20 w-48 lg:w-100 -top-20 lg:-top-27 left-50 transform -translate-x-1/2" 
                />
                <img 
                    src={Gato_inicio} 
                    alt="Gato asomándose por la derecha"
                    className="absolute z-20 w-48 lg:w-64 -top-20 lg:-top-29 right-50 transform translate-x-1/2" 
                />
            </div>

            <Carrusel />

            <h1 className="text-3xl font-bold text-center mt-8 pt-10">Contribuye con nuestra misión</h1>
            <Card/>
        </div>
    )
}