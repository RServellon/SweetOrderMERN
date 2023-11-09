import React, {useState} from 'react';
import Header from '../ReuseComponents/Header.js';
import '../../Styles/Admin.css';
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'; 

function ErrorMain() {

    return (
      <div className="admin-container">
        <Header />
        <div className="admin-content">
          <div className="welcome">
            <h1>Credenciales Incorrectas</h1>
          </div>
          <div className="options">
            <div className='bottons'>            
            <Link to="/admin"> <button className="admin-button">Regresar</button></Link>
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
  