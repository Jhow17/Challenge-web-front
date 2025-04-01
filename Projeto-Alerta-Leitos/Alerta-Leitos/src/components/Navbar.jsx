import React from 'react'
// componete que usamos para alternar as paginas
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/'> Home</Link>
        <Link to='/notificacoes'> Home</Link>
    </nav>
  )
}

export default Navbar