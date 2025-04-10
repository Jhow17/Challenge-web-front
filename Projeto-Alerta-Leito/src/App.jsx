// exportaçao padrao nomeada precisa de chaves

// exportaçao padrao nao nomeada nao precisa de chaves

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ListaStatus from "./pages/ListaStatus";
import Notificacoes from "./pages/Notificacoes";
import Adm from "./pages/Adm";




function App() {


  return (
    <Router>

        {/* Área de conteúdo das páginas */}
        <div >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lista-status" element={<ListaStatus />} />
            <Route path="/notificacoes" element={<Notificacoes />} />
            <Route path="/adm" element={<Adm />} />
          </Routes>
        </div>

    </Router>

  )
}

export default App
