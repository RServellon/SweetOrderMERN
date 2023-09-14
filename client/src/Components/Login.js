import React from 'react';
import "../Styles/Login.css"
import Logo from '../Images/Logo.png';
import ClienteMain from './Client/ClientMain.js';
import AdminMain from './Admin/AdminMain.js';
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'; 
function Login() {
  return (
    <div className="login_page">
      <div className="left_section">
      <img alt='Logo' className='company_logo'
             src={Logo} />
             
      </div>
      <div className="right_section">
        <div className="background"></div>
        <div className="button_container">
          <Routes>
          <Route path="cliente" element={ <ClienteMain /> } />
          <Route path="admin" element={ <AdminMain /> } />
          </Routes>
           <Link to="admin"> <button className="login_button">Administrador</button></Link>
           <Link to="cliente">  <button className="login_button">Cliente</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
