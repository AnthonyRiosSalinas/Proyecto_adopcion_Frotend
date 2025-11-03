import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import LunaImg from '../assets/luna.jpg';
import MaxImg from '../assets/max.jpg';
import BellaImg from '../assets/bella.jpg';
import RockyImg from '../assets/rocky.jpg';

const Carrusel = () => {
{/*Estados del componente*/}
    const [isFading, setIsFading] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

{/*Lista de animales*/}    
    const slides = [

        {
            id: 1,
            name: "Luna",
            edad: "2",
            raza: "Bulldog Francés",
            sexo: "Femenino",
            tags: ["Tranquila", "Cariñosa", "Amigable"],
            description: "Luna fue rescatada cuando era una cachorra, tiene 2 años es raza bulldog Francés . Desde entonces, ha demostrado ser cariñosa, alegre y muy sociable",
            additionalInfo: "Está vacunada, esterilizada.",
            thought: "Solo necesito un abrazo y un lugar al que llamar hogar.",
            image: LunaImg,
            bgColor: 'bg-orange-100',
        },
        {
            id: 2,
            name: "Max",
            edad: "1",
            raza: "Dalmata",
            sexo: "Masculino",
            tags: ["Energético", "Juguetón", "Leal"],
            description: "Max es un perro lleno de energía que adora jugar en el parque. Siempre está listo para una aventura y se lleva muy bien con los niños.",
            additionalInfo: "Vacunado completo y con chip de identificación.",
            thought: "¡Dame una pelota y seremos mejores amigos!",
            image: MaxImg,
            bgColor: 'bg-green-100',
        },
        {
            id: 3,
            name: "Bella",
            edad: "3",
            raza: "Shih Tzu",
            sexo: "Femenino",
            tags: ["Dócil", "Inteligente", "Protectora"],
            description: "Bella es una perrita muy inteligente que aprende rápido. Es tranquila pero siempre alerta, perfecta para familias con niños pequeños.",
            additionalInfo: "Esterilizada y con todas sus vacunas al día.",
            thought: "Un buen cepillado es todo lo que pido.",
            image: BellaImg,
            bgColor: 'bg-pink-100',
        },
        {
            id: 4,
            name: "Rocky",
            edad: "4",
            raza: "Siberiano",
            sexo: "Masculino",
            tags: ["Fuerte", "Cariñoso", "Tranquilo"],
            description: "Rocky es un gato de tamaño promedio pero con un corazón aún más grande. Es muy tranquilo y le encanta recibir cariño.",
            additionalInfo: "Necesita un hogar con espacio.",
            thought: "Si me dás atun, seré tuyo para siempre.",
            image: RockyImg,
            bgColor: 'bg-blue-100',
        }
    ];

{/*Cambia de slide con un egfecto de fade*/}    
    const handleSlideChange = (newIndex) => {
        setIsFading(true); 
        setTimeout(() => {
            setCurrentSlide(newIndex);
            setIsFading(false);
        }, 300); 
    };

{/*Siguiente slide*/}
    const nextSlide = () => {
        const newIndex = (currentSlide + 1) % slides.length;
        handleSlideChange(newIndex);
    };

{/*Slide anterior*/}    
    const prevSlide = () => {
        const newIndex = (currentSlide - 1 + slides.length) % slides.length;
        handleSlideChange(newIndex);
    };

{/*Ir a un slide cuando le das click a una de las mascotas*/}    
    const goToSlide = (index) => {
        handleSlideChange(index);
    };

{/*Muestra el slide actual*/}
    const currentAnimal = slides[currentSlide];

{/*Colores de las etiquetas*/}    
    const tagColors = {
        Tranquila: 'bg-orange-200 text-orange-800',
        Cariñosa: 'bg-yellow-200 text-yellow-800',
        Amigable: 'bg-purple-200 text-purple-800',
        Energético: 'bg-green-200 text-green-800',
        Juguetón: 'bg-blue-200 text-blue-800',
        Leal: 'bg-indigo-200 text-indigo-800',
        Dócil: 'bg-pink-200 text-pink-800',
        Inteligente: 'bg-red-200 text-red-800',
        Protectora: 'bg-teal-200 text-teal-800',
        Fuerte: 'bg-cyan-200 text-cyan-800',
        default: 'bg-gray-200 text-gray-800',
    };

    return (
{/*Contenedor del carrusel*/},
        <div className="w-full mx-auto py-8"> 
            
{/*Titulo*/}            
            <div className="text-center mb-12">
                 <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">Nuestros Engreídos</h1>
            </div>
{/*Contenedor del slide*/}
            <div className={`relative ${currentAnimal.bgColor} rounded-2xl shadow-xl overflow-hidden min-h-[550px] flex items-center justify-center p-8 transition-colors duration-500`}>
                
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8 relative z-10">
                    
{/*Contenedor de la mascota*/}                    
                    <div className={`w-full md:w-1/2 flex flex-col items-center relative transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                        
{/*Pensamiento de la mascota*/}                        
                        <div className="absolute top-0 right-0 md:left-1/4 z-30 w-48 bg-white p-4 rounded-lg rounded-bl-none text-sm text-gray-800 font-semibold shadow-md transform -translate-x-1/2 -translate-y-1/2">
                            {currentAnimal.thought}
                        </div>

{/*Imagen de la mascota*/}
                        <div className="relative w-[300px] h-[350px] rounded-2xl shadow-xl overflow-hidden bg-white">
                            <img 
                                src={currentAnimal.image} 
                                alt={currentAnimal.name}
                                className={`w-full h-full object-cover ${currentAnimal.name === 'Luna' ? 'transform scale-x-[-1]' : ''}`}
                            />
                        </div>
                    </div>

{/*Informacion del animal*/}
                    <div className="w-full md:w-1/2 text-gray-800 p-4">

{/*Nombre de la mascota*/}                        
                        <h2 className="text-5xl font-extrabold mb-2">{currentAnimal.name}</h2>
{/*Detalles*/}                        
                        <p className="text-sm text-gray-600 mb-4">
                            Edad: {currentAnimal.edad} Raza: {currentAnimal.raza} Sexo: {currentAnimal.sexo}
                        </p>
                        
{/*Etiquetas*/}                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {currentAnimal.tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className={`px-4 py-2 rounded-full text-sm font-semibold ${tagColors[tag] || tagColors.default}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

{/*Informacion adicional*/}
                        <p className="text-lg leading-relaxed mb-4">
                            {currentAnimal.description}
                        </p>
                        <p className="text-lg font-semibold mb-6"> 
                            {currentAnimal.additionalInfo}
                        </p>
                        
{/*Botones de navegacion*/}                        
                        <div className="flex items-center justify-center md:justify-start gap-2 z-20">
                            
{/*Boton anterior*/}
                            <button onClick={prevSlide} className="text-gray-700 hover:text-black transition-colors p-3 rounded-full bg-white shadow-lg">
                                <FaArrowLeft size={20} />
                            </button>

{/*Mascotas en miniatura*/}
                            {slides.map((slide, index) => (
                                <div 
                                    key={slide.id}
                                    onClick={() => goToSlide(index)}
                                    className={`relative w-20 h-20 rounded-full overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                                        index === currentSlide 
                                            ? 'border-blue-500 scale-100 shadow-xl ring-4 ring-blue-500/50' 
                                            : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'
                                    }`}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}

{/*siguiente boton*/}
                            <button onClick={nextSlide} className="text-gray-700 hover:text-black transition-colors p-3 rounded-full bg-white shadow-lg">
                                <FaArrowRight size={20} />
                            </button>

                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Carrusel;