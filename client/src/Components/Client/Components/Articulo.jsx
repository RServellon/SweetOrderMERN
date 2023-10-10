import React, { useEffect } from 'react'
import Bear from '../../../Images/gum.png'
import Candy from '../../../Images/candy.png'

import { Routes } from 'react-router-dom';
import { Link, Route, useNavigate } from 'react-router-dom';
import PackEspecifico from './PackEspecifico';

//TODO if available === false, agregar imagen de agotado y que no se pueda seleccionar
const Articulo = ({ packs }) => {
    const navigate = useNavigate();

    // Manejar el clic en el enlace y enviar el objeto como estado
    // const handleOnClick = () => {
    //     navigate(packs._id, { state: { packs } });
    // }

    useEffect(() => {
        console.log(packs);
    }, []);

    return (
        <div className="bg-white w-52 sm:w-64 md:w-80 lg:w-52 xl:w-72 rounded-2xl shadow-md p-4 mt-2 mx-auto text-center hover-effect">
            <Link to={`/cliente/pedido/${packs._id}`}>
                {/* Imagen */}
                <img
                    src={Bear}
                    alt="Nombre del producto"
                    className="w-60 h-40 md:w-72 md:h-56 lg:w-60 lg:h-40 rounded-lg mx-auto hover:under"
                />

                {/* Nombre */}
                <h2 className="text-xl mt-1 font-sans  text-black">{packs.name}</h2>

                {/* Precio */}
                <p className="text-black text-lg font-sans">₡ {packs.price}</p>
            </Link>
        </div>
    );
}

export default Articulo