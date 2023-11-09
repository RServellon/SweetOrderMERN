import React, { useEffect, useState } from 'react'
import Bear from '../../../Images/gum.png'
import WW from '../../../Images/gualter guait.jpg'
import { BsFillTrashFill } from "react-icons/bs";

const ArticulosCarrito = ({ packs }) => {

    useEffect(() => {
        recuperarCarrito();
        console.log(packs);
    }, [packs])


    const [cartList, setCartList] = useState([])

    const recuperarCarrito = () => {
        const newCartList = packs.map((pack) => {
            // Aquí creas un objeto para cada elemento en packs
            return {
                imagen: pack.articulo.data.image,
                name: pack.articulo.data.name,
                id: pack.productId,
                precio: pack.articulo.data.price,
                cantidad: pack.quantity
            };
        });

        // Luego, agrega los objetos al carrito (cartList)
        setCartList(newCartList);
    };


    const handleIncrement = (id) => {
        // Incrementa el cantidad del objeto con el ID correspondiente
        const updatedCartList = cartList.map((item) => {
            if (item.id === id) {
                return { ...item, cantidad: item.cantidad + 1 };
            }
            return item;
        });

        // Actualiza el estado con el nuevo arreglo de cartList
        setCartList(updatedCartList);
    };

    const handleDecrement = (id) => {
        // Decrementa el cantidad del objeto con el ID correspondiente
        const updatedCartList = cartList.map((item) => {
            if (item.id === id && item.cant > 0) {
                return { ...item, cantidad: item.cantidad - 1 };
            }
            return item;
        });

        // Actualiza el estado con el nuevo arreglo de cartList
        setCartList(updatedCartList);
    };

    const realizarCompra = () => {
        console.log(cartList);
    }


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
                {cartList.length > 0 ? (
                    cartList.map((pack) => (
                        <div key={pack.id} className='mt-4 mb-5 sm:text-lg'>
                            <div className='flex-col'>
                                <div className='flex'>
                                    <div className='w-1/3 paddingDesktopCarrito '>
                                        <img src={pack.imagen} alt="Nombre del producto" className="sm:w-[70%] h-40 rounded-2xl" />
                                    </div>
                                    <div className='flex-col w-1/3  paddingDesktopCarrito  text-center self-center'>
                                        <p className='text-sm'>{pack.name}</p>
                                       
                                        <p className='text-sm'>Desc</p>
                                    </div>
                                    <div className='w-1/3 paddingDesktopCarrito self-center text-center'>
                                    <p className='text-sm'>C{pack.precio}</p>
                                    </div>
                                </div>
                                <div className='flex mt-3 relative mx-auto bg-white sm:w-72 w-36 h-12 justify-center items-center rounded-lg gap-8 border border-solid border-black'>
                                    <p className='cursor-pointer select-none' onClick={() => handleDecrement(pack.id)}>-</p>
                                    {/* [TIPO TEL!!!] */}
                                    {/* este tipo de objetos deberían ser una jsx,
                                     no un div */}
                                    <input
                                        type="texl"
                                        value={pack.cantidad}
                                        pattern="[0-9]*"
                                        className="w-8 text-center bg-transparent border-none outline-none"
                                        inputMode="numeric"
                                        disabled
                                    // onChange={}
                                    />
                                    <p className='cursor-pointer select-none' onClick={() => handleIncrement(pack.id)}>+</p>
                                    <BsFillTrashFill className='absolute left-40 sm:left-80'/>
                                </div>
                                

                            </div>
                            <hr className='my-5 border-t-2 border-black'  />
                        </div>
                        
                    ))
                ) : (
                    <p className="text-center text-xl mt-4">Tu carrito está vacío.</p>
                )}

            </div>

                <button onClick={realizarCompra}>Comprar</button>

        </div>
    )
}

export default ArticulosCarrito