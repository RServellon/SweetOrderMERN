import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

const OpenBurgerMenu = ({ method }) => {
    return (
        <div className="fixed top-0  w-72 h-full bg-red-300 -tracking-tighter text-2xl text-white
        flex justify-center items-center transition ease-in-out ">
            <ul>
                <li className='hover:text-slate-800 transition ease-in-out cursor-pointer hover:-translate-y-2 mb-3'>Home</li>
                <li className='hover:text-slate-800 transition ease-in-out  cursor-pointer hover:-translate-y-2 mb-3'>Ubicación</li>
                <li className='hover:text-slate-800 transition ease-in-out  cursor-pointer hover:-translate-y-2 mb-3'>Contacto</li>
                <li className='hover:text-slate-800 transition ease-in-out  cursor-pointer hover:-translate-y-2 mb-3'>About us</li>
            </ul>
            <div className='absolute top-9 right-7 cursor-pointer'>
                <AiOutlineClose onClick={method} />

            </div>
        </div>
    )
}

export default OpenBurgerMenu