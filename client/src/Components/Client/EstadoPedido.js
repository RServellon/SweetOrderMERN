import React, {useState, useEffect} from 'react';
import Header from '../ReuseComponents/Header.js';
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Error from '../Error/Error.js';
import Menu from '../ReuseComponents/Menu'
import { getAllPacks } from '../../services/axiosClientService'
import Articulo from './Components/Articulo'
import HeaderClientes from '../ReuseComponents/HeaderClientes'

function EstadoPedido() {
  const [orders, setOrders] = useState([]);
  const [paramm, setParamm] = useState(''); 
  const [filtro, setFiltro] = useState('codigo');
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
  const handleOrdersFiltro = async () => {
    try {
      
      if (paramm !== '' && filtro === 'codigo'){
        const response = await fetch(`http://localhost:5000/api/ordersCodigo/${paramm}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        }
        });
        if (response.ok) {
          // éxito
          const cliente = await response.json();
          const data = []
          data.push(cliente)
          setOrders(data);
          console.log('Respuesta del servidor:', data);
        
        } else {
        // error
        
        } 
      }

    } catch (error) {
      console.error('Error al realizar la solicitud al servidor:', error);
    }
  };
  return (
    
    <div className='w-screen bg-gray-100'>
      <HeaderClientes />
      <Menu />
      <div className="client-Pedido">
        <div className="welcome">
          <h1>Búsqueda de pedidos</h1>
        </div>
        <div className="filter">
          <label htmlFor="filtros">Ingrese el código de su pedido: </label>
          <input
              className='searchinput'
              type="text"
              id="filtro"
              value={paramm}
              onChange={(e) => setParamm(e.target.value)}
            />
          <button className='search' onClick={handleOrdersFiltro}>Buscar</button>
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
              </tr>
            ))}
            
        </tbody>
    </table>
      <div>
        <Link to="/cliente"> <button className="admin-button">Regresar</button></Link>
        
      </div>
      </div>
    </div>
  );
}

export default EstadoPedido;
