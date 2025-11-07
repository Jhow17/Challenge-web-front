import React from 'react';
import { useAuth } from '../shared/components/Auth';
import { Navigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const SingIn = () => {
    const { user, handleGoogleLogin} = useAuth();
    if (user) {
        return <Navigate to="/DashBoard" />;
    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
       
        <div className="bg-white shadow-xl rounded-lg p-10 max-w-sm w-full flex flex-col items-center">

            <h1 className="text-3xl font-bold text-gray-800 mb-2">Alerta Leitos</h1>
            
            <p className="text-gray-600 mb-8">Por favor, faça o login:</p>
            
          
            <button 
                className='bg-white border border-gray-300 rounded-lg shadow-sm px-6 py-3
                           text-lg flex items-center justify-center gap-3 w-full
                           hover:bg-gray-50 transition duration-150 ease-in-out' 
                onClick={handleGoogleLogin}
            >

                <FcGoogle size={24} /> 
      
                <span className="font-medium text-gray-700">Entrar com Google</span>
            </button>

        </div>

    </div>
  )
}

export default SingIn;