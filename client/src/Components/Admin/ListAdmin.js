import React, {useState, useEffect} from 'react';
import Header from '../ReuseComponents/Header.js';
import '../../Styles/Admin.css';
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Error from '../Error/Error.js';

function ListAdmin() {
  const [orders, setOrders] = useState([]);
  const handleOrders = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/orders`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        // éxito
        const data = await response.json();
        setOrders(data);
        console.log('Respuesta del servidor:', data);
        
      } else {
        // error
        
      }
    } catch (error) {
      console.error('Error al realizar la solicitud al servidor:', error);
    }
  };
  useEffect(() => {
    handleOrders();
  }, []);
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
        {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.codigo}</td>
                <td>₡{order.montoTotal.toFixed(2)}</td>
                <td>{new Date(order.fechaEntrega).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    })}
                </td>
                <td>{order.cliente}</td>
                <td>{order.estado}</td>
                <td className="buttons">
                  <button className="green-button">&#10003;</button>
                  <button className="red-button">&#10007;</button>
                </td>
              </tr>
            ))}
            
        </tbody>
    </table>
      <div>
        <Link to="/admin"> <button className="admin-button">Regresar</button></Link>
        
      </div>
      </div>
    </div>
  );
}

export default ListAdmin;
