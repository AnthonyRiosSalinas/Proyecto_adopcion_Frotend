import {Link, NavLink} from "react-router-dom";
import { User } from 'lucide-react';
import logo from '../assets/logo.png'

export default function Navbar(){
    return(
    // Todo el Navbar //
        <nav className="sticky top-0 z-50 bg-[#ffff] p-0 shadow-lg flex justify-between items-center lg:px-10">
    
    {/*Logo enlazado a la pagina principal*/}        
            <Link to="/" className="flex items-center">
                <img 
                    src={logo} alt="NOMADD Logo" className="h-20 w-auto"
                />
            </Link>

    {/* Botones de navegacion */}
            <div className="hidden lg:flex items-center space-x-8"> 
            
    {/* Enlace a la pagina principal */}        
                <NavLink 
                    to="/"
                    className={({ isActive }) => `text-xl text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105${
                        isActive ? 'font-semibold text-gray-900' : ''}`}>
                    Principal
                </NavLink>

    {/* Enlace a la pagina de Adoptamigos */}                    
                <NavLink 
                    to="/Adoptamigos"
                        className={({ isActive }) => `text-xl text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105${
                        isActive ? 'font-semibold text-gray-900' : ''}`}>
                    Adoptamigos
                </NavLink>

    {/* Enlace a la pagina de Nosotros */}
                <NavLink 
                    to="/Nosotros"
                        className={({ isActive }) => `text-xl text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105${
                        isActive ? 'font-semibold text-gray-900' : ''}`}>
                    Nosotros
                </NavLink>

    {/* Enlace a la pagina de Apadrina */}                        
                <NavLink 
                    to="/Apadrina"
                        className={({ isActive }) => `text-xl text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105${
                        isActive ? 'font-semibold text-gray-900' : ''}`}>
                    Apadrina
                </NavLink>

    {/* Enlace a la pagina de Dona */}                        
                <NavLink 
                    to="/Dona"
                        className={({ isActive }) => `text-xl text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105${
                        isActive ? 'font-semibold text-gray-900' : ''}`}>
                    Dona
                </NavLink>

    {/* Enlace para crear una cuenta */}                        
                <NavLink 
                    to="/User"
                        className={({ isActive }) => `text-xl text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105${
                        isActive ? 'font-semibold text-gray-900' : ''}`}>
                    <User className="h-8 w-8" />
                </NavLink>

            </div>
        </nav>
    )    
}