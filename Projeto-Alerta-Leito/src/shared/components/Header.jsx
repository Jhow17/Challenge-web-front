import React from 'react';
import { useAuth } from './Auth';
import { CiMenuBurger } from "react-icons/ci";

const Header = ({ onToggleSidebar }) => {

  const { user } = useAuth();


  if (!user) {
    return null; 
  }

  
  const profileImageStyle = {
    width: '38px',   
    height: '38px',  
    objectFit: 'cover' 
  };

  return (
    <header className="header bg-success text-white py-3 d-flex justify-content-between align-items-center px-3">
      
   
      <button className="btn btn-light d-md-none p-1" onClick={onToggleSidebar}>
        <CiMenuBurger size={25} />
      </button>


      <div className="bg-white rounded-pill px-2 py-1 d-flex align-items-center gap-2">
        <img 
      
          className='rounded-circle' 
          style={profileImageStyle}
          src={user.photoURL} 
          alt="Perfil" 
        />
        
        <span className='text-dark fw-bold d-none d-md-block'>{user.displayName}</span>
      </div>
    </header>
  );
};
export default Header;