import React, {useState} from 'react';
import Header from '../ReuseComponents/Header.js';
import '../../Styles/Admin.css';
import ListAdmin from './ListAdmin.js';
import Error from '../Error/Error.js';
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function AdminMain() {
  const [cedula, setCedula] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admins/${cedula}/${password}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        // éxito
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
        
        navigate('/listadmin');
      } else {
        // error
        navigate('/error')
      }
    } catch (error) {
      console.error('Error al realizar la solicitud al servidor:', error);
    }
  };

  return (
    <div className="admin-container">
      <Header />
      <div className="admin-content">
        <div className="welcome">
          <h1>Bienvenido</h1>
        </div>
        <div className="options">
          <h2 className='letraadmin'>Sección de Administrador</h2>
          <h3 className='letraadmin'>Ingrese sus credenciales</h3>
          <div className="input-container">
            <h3>Usuario</h3>
            <input
              className='admin_input'
              type="text"
              placeholder="Nº cedula"
              id="cedula"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
            />
          </div>
          <div className="input-container">
            <h3>Contraseña</h3>
            <input
              className='admin_input'
              type="password"
              placeholder="xxxx"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='bottons'>
          <Link to="/"> <button className="admin-button">Regresar</button></Link>
          <button className="admin-button" onClick={handleLogin}>Ingresar</button>
         
          <Routes>
          <Route path="/" element={ <login /> } />
          <Route path="/listadmin" element={ <ListAdmin /> } />
          <Route path="/error" element={ < Error /> } />
          </Routes>
           
          
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AdminMain;
