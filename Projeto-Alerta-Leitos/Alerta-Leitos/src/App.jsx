import './App.css'
// reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

// navegando pelos links
import Navbar from './components/navbar'

function App() {

  return (
    <>
    <h1>React Router</h1>
    {/* Onde tiver esse router vai receber o conteudo do router vai ser inserido so ele que muda na transmissao de paginas */}
    <Outlet/>

    </>
  )
}

export default App
