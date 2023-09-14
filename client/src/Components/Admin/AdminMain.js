import React from 'react';
import Header from '../ReuseComponents/Header.js';
import '../../Styles/Admin.css';
import ListAdmin from './ListAdmin.js';
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'; 

function AdminMain() {
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
            <input className='admin_input'  type="text" placeholder="Nº cedula" />
          </div>
          <div className="input-container">
            <h3>Contraseña</h3>
            <input className='admin_input'  type="password" placeholder="xxxx" />
          </div>
          <div className='bottons'>
          <Link to="/listadmin"> <button  className="admin-button">Ingresar</button></Link>
          
          <Link to="/"> <button className="admin-button">Regresar</button></Link>
          <Routes>
          <Route path="/" element={ <login /> } />
          <Route path="/listadmin" element={ <ListAdmin /> } />
          </Routes>
           
          
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AdminMain;
