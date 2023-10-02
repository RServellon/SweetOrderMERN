import React, {useState} from 'react';
import Header from '../ReuseComponents/Header.js';
import '../../Styles/Admin.css';
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'; 

function ErrorMain() {

    return (
      <div className="error-container">
        <Header />
        <div className="error-content">
          <div className="welcome">
            <h1>Bienvenido</h1>
          </div>
          <div className="options">
            <h2 className='letraadmin'>Sección de Administrador</h2>
            <h3 className='letraadmin'>Ingrese sus credenciales</h3>
            <div className='bottons'>
            
            <Link to="/"> <button className="error-button">Regresar</button></Link>
            <Routes>
            <Route path="/" element={ <login /> } />
            </Routes>
            
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
  export default ErrorMain;
  