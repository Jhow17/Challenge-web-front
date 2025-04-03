// Vai ser o responsavel por dar um export pra tudo
import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import Button from '../shared/components/Button';
import "bootstrap/dist/css/bootstrap.min.css";

const AppRoutes = () => {
  return (
    <Routes>
        {/* Se nao encotrar esse endereço ele ou qual quer ouutro que nao tenha vai pro redirect que vai mandar o usuario para pagina inicial */}
        <Route path="/pagina-inicial" element={<Button Label={"Add Noficação"}/>}/>
        {/* Faz o redirect */}
        <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
    </Routes>

  )
}

export default AppRoutes;