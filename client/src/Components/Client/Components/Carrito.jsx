import React, { useEffect, useState } from 'react'
import Header from '../../ReuseComponents/HeaderClientes'
import Menu from '../../ReuseComponents/Menu';
import { addToCart, getCart } from '../../../services/Cart';
import '../../../Styles/RealizarPedido.css'
import {getPackById} from '../../../services/axiosClientService';

import ArticulosCarrito from './ArticulosCarrito';

const Carrito = () => {

    const [cart, setCart] = useState([]);
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        // Función asincrónica para obtener el carrito y detalles de los artículos
        const fetchData = async () => {
            try {
                // Obten el carrito desde alguna fuente (probablemente localStorage o sessionStorage)
                const cartData = getCart();

                // Mapea los elementos del carrito para obtener detalles de los artículos
                const articulosData = await Promise.all(
                    cartData.map(async (cartItem) => {
                        const articulo = await getPackById(cartItem.productId);
                        return {
                            ...cartItem,
                            articulo
                        };
                    })
                );

                // Actualiza el estado del carrito y los detalles de los artículos
                setCart(cartData);
                setArticulos(articulosData);
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
