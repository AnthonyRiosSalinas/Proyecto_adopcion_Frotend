import {Link, NavLink} from "react-router-dom";
import logo from '../assets/logo.png'

export default function Navbar(){
    return(
        <nav className="bg-gray-300 p-4 shadow-md flex justify-between items-center ">
            <Link to="/" className="flex items-center">
   
                <img 
                    src={logo} alt="NOMADD Logo" className="h-20 w-auto"
                />
            </Link>


            <div className="flex space-x-15"> 
        
                <NavLink 
                    to="/"
                    className={({ isActive }) => `text-xl text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out ${
                        isActive ? 'font-semibold text-gray-900' : ''
                    }`
                }
            >
                    Principal
                </NavLink>

                <NavLink 
                    to="/Adoptamigos"
                        className={({ isActive }) => `text-xl text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out ${
                        isActive ? 'font-semibold text-gray-900' : ''
                    }`
                }
            >
                    Adoptamigos
                </NavLink>

                <NavLink 
                    to="/Nosotros"
                        className={({ isActive }) => `text-xl text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out ${
                        isActive ? 'font-semibold text-gray-900' : ''
                    }`
                }
                >
                    Nosotros
                </NavLink>

                <NavLink 
                    to="/Apadrina"
                        className={({ isActive }) => `text-xl text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out ${
                        isActive ? 'font-semibold text-gray-900' : ''
                    }`
                }
                >
                    Apadrina
                </NavLink>

                <NavLink 
                    to="/Dona"
                        className={({ isActive }) => `text-xl text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out ${
                        isActive ? 'font-semibold text-gray-900' : ''
                    }`
                }
                >
                    Dona
                </NavLink>

            </div>
        </nav>
    )    
}