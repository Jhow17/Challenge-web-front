// exportaçao padrao nomeada precisa de chaves
import { BrowserRouter } from "react-router-dom";
// exportaçao padrao nao nomeada nao precisa de chaves
import  AppRoutes  from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {


  return (
    <>
    {/* vai fornecer o contexto pro router funcionar */}
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </>

  )
}

export default App
