import React, { useEffect, useState } from 'react'
import Bear from '../../../Images/gum.png'
import WW from '../../../Images/gualter guait.jpg'
const ArticulosCarrito = ({ packs }) => {

    useEffect(() => {
        //recuperarCarrito();
        console.log(packs);
    }, [])


    const [cartList, setCartList] = useState([])

    const recuperarCarrito = () => {
        const newCartList = packs.map((pack) => {
            // Aquí creas un objeto para cada elemento en packs
            return {
                imagen: pack.articulo.data.imagen,
                id: pack.productId,
                precio: pack.articulo.data.price,
                cantidad: pack.quantity,
                contador: 0
            };
        });

        // Luego, agrega los objetos al carrito (cartList)
        setCartList(newCartList);
    };


    const handleIncrement = (id) => {
        // Incrementa el contador del objeto con el ID correspondiente
        const updatedCartList = cartList.map((item) => {
            if (item.id === id) {
                return { ...item, contador: item.contador + 1 };
            }
            return item;
        });

        // Actualiza el estado con el nuevo arreglo de cartList
        setCartList(updatedCartList);
    };

    const handleDecrement = (id) => {
        // Decrementa el contador del objeto con el ID correspondiente
        const updatedCartList = cartList.map((item) => {
            if (item.id === id && item.contador > 0) {
                return { ...item, contador: item.contador - 1 };
            }
            return item;
        });

        // Actualiza el estado con el nuevo arreglo de cartList
        setCartList(updatedCartList);
    };



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
                {packs.length > 0 ? (
                    packs.map((pack) => (
                        <div key={pack.id} className='mt-4 flex justify-between items-center'>
                            <div className='w-1/3'>
                                <img src={WW} alt="Nombre del producto" className="w-[90%] h-40 rounded-2xl" />
                            </div>
                            <div>
                                <p>{pack.name}</p>
                            </div>
                            <div>
                                Total
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-xl mt-4">Tu carrito está vacío.</p>
                )}

            </div>

        </div>
    )
}

export default ArticulosCarrito