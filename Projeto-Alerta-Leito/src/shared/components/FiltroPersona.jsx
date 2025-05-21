import React from 'react'
import { GiVacuumCleaner } from "react-icons/gi";
import { GoTools } from "react-icons/go";

const FiltroPersona = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-lg shadow'>
      
      <div className='flex justify-content-around space-x-3 md:space-x-4'>
        <button
          className='
            flex items-center justify-center space-x-2 
            bg-sky-500 hover:bg-sky-600 
            text-white 
            font-semibold 
            py-2 px-8
            rounded
            shadow-md 
            transition duration-150 ease-in-out
            transform hover:scale-105 
            focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75
            w-full md:w-1/3  // Ocupa toda a largura em telas pequenas, auto em médias e grandes
          '
        >
          <GiVacuumCleaner size={40} /> 
          <span>Limpeza</span>
        </button>

        <button
          className='
            flex items-center justify-center space-x-2 
            bg-purple-500 hover:bg-purple-600 
            text-white 
            font-semibold 
            py-2 px-4 
            rounded
            shadow-md 
            transition duration-150 ease-in-out
            transform hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75
            w-full md:w-1/3 // Ocupa toda a largura em telas pequenas, auto em médias e grandes
          '
        >
          <GoTools size={40} /> 
          <span>Manutenção</span>
        </button>
      </div>
    </div>
  )
}

export default FiltroPersona