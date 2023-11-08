import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login.js';
import ClienteMain from './Components/Client/ClientMain.js';
import AdminMain from './Components/Admin/AdminMain.js';
import ListAdmin from './Components/Admin/ListAdmin.js';
import ErrorMain from './Components/Error/Error.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RealizarPedido from './Components/Client/RealizarPedido.js';
import PackEspecifico from './Components/Client/Components/PackEspecifico.jsx';
import Carrito from './Components/Client/Components/Carrito.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cliente" element={<ClienteMain />} />
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/listadmin" element={<ListAdmin />} />
        <Route path='/cliente/pedido' element={<RealizarPedido/>} />
        <Route path='/cliente/pedido/:id' element={<PackEspecifico/>} />
        <Route path='/cliente/pedido/carrito' element={<Carrito/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
        <Route path="/error" element={<ErrorMain/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
