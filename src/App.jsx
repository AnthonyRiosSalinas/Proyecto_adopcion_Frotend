import {Routes, Route} from 'react-router-dom'
import Navbar from './Componentes/Navbar'
import Inicio from './Paginas/Inicio'
import Adoptamigos from './Paginas/Adoptamigos'
import Nosotros from './Paginas/Nosotros'
import Apadrina from './Paginas/Apadrina'
import Dona from './Paginas/Dona'
import Fondo from './assets/Fondo_Adopcion.png'

function App() {
  return (
    <div className="font-Poppins min-h-screen" 
    style={{
        backgroundColor: '#FFFFFF', 
        backgroundImage: `url(${Fondo})`,
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover',
    }}
>
      <Navbar/>
        <main className="pt-0">
          <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="Adoptamigos" element={<Adoptamigos/>} />
              <Route path="Nosotros" element={<Nosotros/>} />
              <Route path="Apadrina" element={<Apadrina/>} />
              <Route path="Dona" element={<Dona/>} />
          </Routes> 
        </main>
    </div>
  )
}

export default App
