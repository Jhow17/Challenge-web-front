import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// configurando router
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './routes/Home.jsx';
import Noticacoes from './routes/Notificacoes.jsx';

// array com as paginas
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: 'notificacoes',
//     element: <Noticacoes/>
//   },
// ])

const router = createBrowserRouter([
      {
        path: '/',
        element: <App/>,
        // isso vai fazer o reaproveitamento de estrutura
        children:[
            {
              path: '/',
              element: <Home/>
            },
            {
              path: 'notificacoes',
              element: <Noticacoes/>
            },
          ] 
      },
    ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* com isso a aplicaçao fica siente das paginas */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
