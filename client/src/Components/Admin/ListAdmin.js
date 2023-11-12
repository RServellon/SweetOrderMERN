import React, {useState, useEffect} from 'react';
import Header from '../ReuseComponents/Header.js';
import '../../Styles/Admin.css';
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Error from '../Error/Error.js';

function ListAdmin() {
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
      if (paramm !== '' && filtro === 'nombre'){
        const response = await fetch(`http://localhost:5000/api/ordersCliente/${paramm}`, {
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

      if (filtro === 'pendiente' || filtro === 'en proceso' || filtro === 'finalizado'){
        const response = await fetch(`http://localhost:5000/api/ordersEstado/${filtro}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        }
        });
        if (response.ok) {
          // éxito
          const cliente = await response.json();
          if(Array.isArray(cliente)){
            setOrders(cliente);
          }else{
            const data = []
            data.push(cliente)
            setOrders(data);
            console.log('Respuesta del servidor:', data);
          }

        } else {
        // error
        
        } 
      }

      if (filtro === 'todos'){
        handleOrders();
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
          <h1>Búsqueda de pedidos</h1>
        </div>
        <div className="filter">
          <label htmlFor="filtros">Filtrar pedido por: </label>
          <select id="filtros" name="filtros" onChange={(e) => setFiltro(e.target.value)}>
            <option value="codigo">Código</option>
            <option value="nombre">Nombre del Cliente</option>
            <option value="necha">Fecha de entrega</option>
            <option value="pendiente">Pendientes</option>
            <option value="en proceso">En proceso</option>
            <option value="finalizado">Finalizados</option>
            <option value="todos">Todos</option>
          </select>
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
