import { Mail, Instagram, Facebook, Github } from "lucide-react";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
{/*Contenedor del footer*/},    
    <footer className="bg-white border-t border-gray-200 px-8 py-5 flex flex-col md:flex-row justify-between items-center md:items-start inset-shadow-sm inset-shadow-gray-300/50">
      
{/*Contenedor del logo*/}      
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src={Logo}
          alt="Logo"
          className="h-16 w-auto"
        />
      </div>

{/*Enlaces y contactos*/}
      <div className="flex flex-col md:flex-row gap-12 text-gray-800 font-semibold">
        
{/*Terminos y condiciones*/}        
        <div className="flex flex-col justify-center space-y-2 text-center md:text-left md:mt-6">
          <a href="/terminos" className="hover:text-black">
            Términos y Condiciones
          </a>
          <a href="/privacidad" className="hover:text-black">
            Política de Privacidad
          </a>
        </div>

{/*Contactos*/}
        <div className="flex flex-col text-center md:text-left">
          <p className="mb-1">Contáctanos</p>

          <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
            <Mail className="h-5 w-5" />
            <a href="mailto:info@nimadd.com" className="hover:text-black">
              info@nimadd.com
            </a>
          </div>

          <div className="flex justify-center md:justify-start space-x-3">
            <a href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 hover:text-black" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 hover:text-black" />
            </a>
            <a href="#" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}