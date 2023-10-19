import React, { useState } from 'react';
import '../../Styles/RealizarPedido.css'
import Logo from "../../Images/Logo.png"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import OpenBurgerMenu from '../Client/Components/OpenBurgerMenu';
import { Link } from 'react-router-dom';

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <div className={`bg-gray-100 ${showMobileMenu ? 'fixed inset-0 blur-sm pointer-events-none' : ''}`}>
        <div className="mx-auto py-4 grid grid-cols-4 justify-normal items-center">
          {/* Logo */}
          <div id='Logo' className='sm:block hidden'>
            <img src={Logo} alt="Logo" className="h-36 " />
          </div>

          {/* Menú en pantalla grande */}
          <div id='Titulo&Logos' className="col-span-3 hidden grid-cols-3 text-center space-x-4 sm:grid">
            {/* Rectángulo superior */}
            <div className="col-span-2 relative p-4">
              <div className='relative inset-x-0 top-0 h-16'>
                <h2 className="text-2xl lg:text-3xl font-semibold">Distribuidora de golosinas Villa Hermosa</h2>
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
                <Link to='/cliente/pedido/carrito'><AiOutlineShoppingCart className='h-10 w-10 hover:cursor-pointer text-black' />
                </Link>
                <span className='absolute top-28 right-4 flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-sm'>5</span>

              </div>
            </div>
          </div>

          {/* Menú de hamburguesa en pantalla pequeña */}
          <div id='burgerMenu' className="sm:hidden col-span-3 flex justify-items-start ">
            {/* Botón de menú de hamburguesa */}
            <button
              className="text-gray-600 hover:text-gray-800"
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


          </div>

          <div className="justify-end py-3 sm:hidden">
            <div className='flex gap-7 justify-end mr-6'>
              <BsPerson className='h-10 w-10 hover:cursor-pointer' />
              <Link to='/cliente/pedido/carrito'><AiOutlineShoppingCart className='h-10 w-10 hover:cursor-pointer text-black' />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Menú en pantalla pequeña (condicionalmente visible) */}
      {showMobileMenu && (
        <OpenBurgerMenu method={toggleMobileMenu} />
      )}
    </div>
  );
}

export default App;
