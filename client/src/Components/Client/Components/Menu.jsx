import React, { useState } from 'react';
import '../../../Styles/RealizarPedido.css'
import Logo from "../../../Images/Logo.png"
import Sesion from "../../../Images/iniciar_sesion.png"
import Cart from "../../../Images/shopping_cart.png"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="bg-gray-100">
      <div className="mx-auto py-4 grid grid-cols-4 justify-normal items-center">
        {/* Logo */}
        <div className=''>
          <img src={Logo} alt="Logo" className="h-36" />
        </div>

        {/* Menú en pantalla grande */}
        <div className="col-span-3 hidden md:grid grid-cols-3 text-center space-x-4">
          {/* Rectángulo superior */}
          <div className="col-span-2 relative p-4">
            <div className='relative inset-x-0 top-0 h-16'>
              <h2 className="text-3xl font-semibold ">Distribuidora de golosinas Villa Hermosa</h2>
            </div>

            <div className='flex mt-2'>
              <div className='basis-1/3'><p className="hover:underline cursor-pointer">Home</p></div>
              <div className='basis-1/3'> <p className="hover:underline cursor-pointer">Ubicación</p></div>
              <div className='basis-1/3'><p className="hover:underline cursor-pointer">Contacto</p></div>
            </div>
          </div>

          {/* Íconos de inicio de sesión y carrito */}
          <div className="justify-end py-3">
            <div className='flex gap-7 justify-end mr-6'>
              <BsPerson className='h-10 w-10 hover:cursor-pointer' />
              <AiOutlineShoppingCart className='h-10 w-10 hover:cursor-pointer' />
            </div>
          </div>
        </div>

        {/* Menú de hamburguesa en pantalla pequeña */}
        <div className="md:hidden col-span-3 flex justify-end">
          {/* Botón de menú de hamburguesa */}
          <button
            className="text-gray-600 hover:text-gray-800 mr-4"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menú en pantalla pequeña (condicionalmente visible) */}
          {showMobileMenu && (
            <div className="fixed top-0 left-0 w-full h-full bg-white rounded-lg shadow-md transition-transform duration-300 transform translate-x-0">
              <div className="mx-auto py-4 grid grid-cols-4 justify-normal items-center">

               <div>
                <img src={Logo} alt="Logo" className="h-36" />
               </div> 

               <div>

               </div>

               <div>
               <AiOutlineClose onClick={toggleMobileMenu}/>

               </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}

export default App;
