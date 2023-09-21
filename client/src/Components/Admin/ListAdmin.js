import React from 'react';
import Header from '../ReuseComponents/Header.js';
import '../../Styles/Admin.css';
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'; 

function ListAdmin() {
  return (
    <div className="admin-container">
      <Header />
      <div className="admin-content">
        <div className="welcome">
          <h1>Busqueda de pedidos</h1>
        </div>
        <div className="filter">
          <label htmlFor="filtros">Filtrar pedido por: </label>
          <select id="filtros" name="filtros">
            <option value="Numero de identificador">Numero de identificador</option>
            <option value="Nombre">Nombre</option>
            <option value="Fecha">Fecha de entrega</option>
            <option value="Pendientes">Pendientes</option>
            <option value="En proceso">En proceso</option>
            <option value="Finalizados">Finalizados</option>
          </select>
          <input type="text" className='searchinput'></input>
          <button className='search'>Buscar</button>
        </div>

    <table>
        <thead>
            <tr>
                <th>Código</th>
                <th>Monto Total</th>
                <th>Fecha de Entrega</th>
                <th>Nombre del Cliente</th>
                <th>Estado </th>
                
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>001</td>
                <td>$100.00</td>
                <td>2023-09-20</td>
                <td>Juan Pérez</td>
                <td>Pendiente </td>
                <td class="buttons" >
                  <button className="green-button">&#10003;</button>
                  <button className="red-button">&#10007;</button>
                </td>
            </tr>
            <tr>
                <td>002</td>
                <td>$75.50</td>
                <td>2023-09-22</td>
                <td>Maria González</td>
                <td>Pendiente</td>
                <td class="buttons" >
                  <button className="green-button">&#10003;</button>
                  <button className="red-button">&#10007;</button>
                </td>
            </tr>
            <tr>
                <td>003</td>
                <td>$200.25</td>
                <td>2023-09-25</td>
                <td>Luis Rodríguez</td>
                <td>Finalizado</td>
                <td class="buttons" >
                  <button className="green-button">&#10003;</button>
                  <button className="red-button">&#10007;</button>
                </td>
            </tr>
            <tr>
                <td>004</td>
                <td>$50.00</td>
                <td>2023-09-18</td>
                <td>Ana López</td>
                <td>Pendiente</td>
                <td class="buttons" >
                  <button className="green-button">&#10003;</button>
                  <button className="red-button">&#10007;</button>
                </td>
            </tr>
            <tr>
                <td>005</td>
                <td>$120.75</td>
                <td>2023-09-23</td>
                <td>Pablo Martínez</td>
                <td>En Proceso</td>
                <td class="buttons" >
                  <button className="green-button">&#10003;</button>
                  <button className="red-button">&#10007;</button>
                </td>
            </tr>
            
        </tbody>
    </table>
      </div>
    </div>
  );
}

export default ListAdmin;
