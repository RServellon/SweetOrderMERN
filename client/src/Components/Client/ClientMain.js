import Header from '../ReuseComponents/Header.js';
import "../../Styles/Client.css";
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'; 
import RealizarPedido from './RealizarPedido.js';

function ClientMain() {
  return (
    <div className="admin-container">
    <Header />
    <div className="admin-content">
      <div className="welcome">
        <h1>Bienvenido</h1>
      </div>
      <div className="options">
        <h2 className='letraadmin'>Sección de Clientes</h2>
        <h3 className='letraadmin'>Seleccione una opción:</h3>
        
        
        <div className='bottons'>
        <Link to="pedido"><button  className="client-button">Realizar un pedido</button></Link>
        <button  className="client-button">Ver estado del pedido</button>
        <Link to="/"> <button className="client-button">Regresar</button></Link>
        <Routes>
        <Route path="/" element={ <login /> } />
        <Route path='pedido' element= {<RealizarPedido/>} />
        </Routes>
         
        
        </div>
        
      </div>
    </div>
  </div>
    
  );
}

export default ClientMain;
