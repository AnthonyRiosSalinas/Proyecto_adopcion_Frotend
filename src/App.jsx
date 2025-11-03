import {Routes, Route} from 'react-router-dom'
import Navbar from './Componentes/Navbar'
import Inicio from './Paginas/Inicio'
import Adoptamigos from './Paginas/Adoptamigos'
import Nosotros from './Paginas/Nosotros'
import Apadrina from './Paginas/Apadrina'
import Dona from './Paginas/Dona'
import Fondo from './assets/Fondo_Adopcion.png'
import Footer from './Componentes/Footer'
import Cartas_principal from './Componentes/Cartas_principal'

function App() {
  return (
    <div className="font-Poppins min-h-screen flex flex-col" 
    style={{
        backgroundColor: '#FFFFFF', 
        backgroundImage: `url(${Fondo})`,
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'top center', 
        backgroundSize: 'cover',
        //backgroundAttachment: 'fixed',
    }}
>
      <Navbar/>
        <main className="pt-0 ">
          <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="Adoptamigos" element={<Adoptamigos/>} />
              <Route path="Nosotros" element={<Nosotros/>} />
              <Route path="Apadrina" element={<Apadrina/>} />
              <Route path="Dona" element={<Dona/>} />
          </Routes> 
        </main>

        <Footer/>
    </div>
  )
}

export default App
