import React, { useEffect, useState } from 'react'
import Header from '../../ReuseComponents/HeaderClientes'
import Menu from '../../ReuseComponents/Menu';
import { addToCart, getCart } from '../../../services/Cart';
import '../../../Styles/RealizarPedido.css'
import {getPackById} from '../../../services/axiosClientService';

import ArticulosCarrito from './ArticulosCarrito';


/**
 * 
 * Muestra header y carrito, se recupera del storage y se pasa al componente ArticulosCarrito.jsx
 */

const Carrito = () => {

    //const [cart, setCart] = useState([]);
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        // Función asincrónica para obtener el carrito y detalles de los artículos
        const fetchData = async () => {
            try {
                // Obten el carrito de localStorage
                const cartData = getCart();

                // Mapea los elementos del carrito para obtener detalles de los artículos
                const articulosData = await Promise.all(
                    cartData.map(async (cartItem) => {
                        //Recupera todo el objeto por medio del ID
                        const articulo = await getPackById(cartItem.productId);
                        return {
                            ...cartItem,
                            articulo
                        };
                    })
                );

                // Actualiza el estado del carrito y los detalles de los artículos
                //setCart(cartData);
                setArticulos(articulosData);
                console.log(articulosData);
                
            } catch (error) {
                console.error('Error al obtener datos del carrito:', error);
            }
        };

        fetchData(); // Llama a la función asincrónica
        
    }, []); // El [] asegura que esto solo se ejecute una vez al montar el componente

    // Rest
    return (
        <div className="bg-gray-100">
            <Header />
            <Menu />
            <ArticulosCarrito packs={articulos}/>
        </div>

    )
}

export default Carrito
