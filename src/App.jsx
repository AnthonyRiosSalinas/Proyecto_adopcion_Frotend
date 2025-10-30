import {Routes, Route} from 'react-router-dom'
import Navbar from './Componentes/Navbar'
import Inicio from './Paginas/Inicio'
import Adoptamigos from './Paginas/Adoptamigos'
import Nosotros from './Paginas/Nosotros'
import Apadrina from './Paginas/Apadrina'
import Dona from './Paginas/Dona'

function App() {
  return (
    <>
      <Navbar/>
        <main>
          <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="Adoptamigos" element={<Adoptamigos/>} />
              <Route path="Nosotros" element={<Nosotros/>} />
              <Route path="Apadrina" element={<Apadrina/>} />
              <Route path="Dona" element={<Dona/>} />
          </Routes> 
        </main>
    </>
  )
}

export default App
