import React, { useEffect } from 'react'
import Bear from '../../../Images/gum.png'
const ArticulosCarrito = ({ packs }) => {

    useEffect(() => {
        console.log(packs);
    }, [])


    return (
        <div>
            <div className="flex flex-col mt-10">
                <div className="flex justify-between items-center mb-2 mx-1">
                    <p className="font-bold text-4xl">Tu carrito</p>
                    <p className="self-end text-right">Seguir comprando</p>
                </div>


                <div className='flex justify-between items-center mb-2 mx-1 mt-5 text-sm'>
                    <p>Producto</p>
                    <p>Total</p>

                </div>


                <hr className='mx-1' />


                {/* Contenido del carrito */}
                {packs.map((pack) => (
                    <div className='mt-4 flex justify-between items-center'>
                        <div className='w-1/3'>
                            <img src={Bear} alt="Nombre del producto" className="w-[90%] h-40 rounded-2xl" />
                        </div>
                        <div>
                            <p>Hola</p>
                        </div>
                        <div>
                            Total
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default ArticulosCarrito