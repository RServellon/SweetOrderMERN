import React, { useState, useEffect } from 'react'
import Bear from '../../../Images/gum.png'
import '../../../Styles/RealizarPedido.css'
import { addToCart, getCart } from '../../../services/Cart'; // Importa las funciones del carrito
import axios from 'axios';
import Buffer from 'buffer';
/**
 * 
 * @param {pack} paqueteEspecifico 
 * @returns la vista de cada paquete, para agregar al carrito uno por uno
 */
const PackEspecíficoInformacion = ({ pack }) => {
    // Estado para controlar el estado de zoom de la imagen
    const [isZoomed, setIsZoomed] = useState(false);

    //Contador para cantidad de elementos
    const [contador, setcontador] = useState(0)

    const handleCounter = (action) => {
        contador === 0 && action === 'decrement' ? setcontador(0) : action === 'decrement' ? setcontador(contador - 1) : setcontador(contador + 1)
    }

    const handleAddCarrito = (id, cantidad) => {
        const productId = 1;
        const quantity = 2;
        const price = 10.99;

        addToCart(id, cantidad);

        const cart = getCart();
       // console.log(cart);
    }




    //Prueba imagenes
    const [image, setImage] = useState(null);
    const [name, setName] = useState('Hola');
    const [detail, setDetail] = useState('zxzzz');
    const [available, setAvailable] = useState(false);
    const [price, setPrice] = useState(10000);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const base64Image = e.target.result;
            setImage(base64Image);
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Asegúrate de que `image` contenga los datos de la imagen cargada en formato base64

        const packageData = {
            name: 'Nombre', // Cambia estos valores según sea necesario
            detail: 'Detalle',
            available: true,
            price: 1000,
            image: image, // Asegúrate de que `image` contenga los datos de la imagen
        };

        try {
            await axios.post('http://localhost:5000/api/packs', packageData);
            // Resto del manejo de respuesta
        } catch (error) {
            // Manejo de errores
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/packs');
                // Procesa la respuesta exitosa aquí
                //console.log('Data from the server:', response.data);
            } catch (error) {
                // Manejo de errores
                alert('Something went wrong: ' + error);
            }
        };

        fetchData();
    }, []);





    return (
        <div className='bg-gray-100 md:flex' id='div-grande'>
            <div className='flex flex-col items-center md:w-[50%] md:mt-8' id='div-image'>
                {/* Aplica la clase CSS dinámica para la imagen */}
                <img
                    className='w-[95%] h-[20rem] rounded-2xl 
                  sm:w-[90%] sm:h-[27rem] md:w-[85%] md:h-[25rem] lg:h-[24rem]
                  xl:h-[22rem] xl:w-[70%] 2xl:h-[21rem] 2xl:w-[60%]'
                    src={pack.image}
                    alt='Imagen del paquete'
                />

            </div>
            <div className='ml-2 mt-9 flex flex-col md:w-[50%] md:mt-6 ' id='div-Info'>
                <h1 className='text-5xl font-bold tracking-wider'>{pack.name}</h1>
                <h2 className='mt-5 '>₡ {pack.price} CRC</h2>
                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className='mt-5 text-sm'>Cantidad</p>
                <div className='flex mt-2 bg-white w-36 h-12 justify-center items-center rounded-lg gap-8 border border-solid border-black'>
                    <p className='cursor-pointer select-none' onClick={() => handleCounter('decrement')}>-</p>
                    {/* [TIPO TEL!!!] */}
                    <input
                        type="texl"
                        value={contador}
                        pattern="[0-9]*"
                        className="w-8 text-center bg-transparent border-none outline-none"
                        inputMode="numeric"
                        onChange={(e) => setcontador(Number(e.target.value))}
                    />
                    <p className='cursor-pointer select-none' onClick={() => handleCounter('add')}>+</p>
                </div>
                <div className='flex justify-center lg:justify-start'>
                    <button className='mt-5 bg-red-400 text-white w-[99%] 
                    h-12 rounded-lg 
                    hover:border hover:border-solid hover:border-red-700
                    lg:w-[40%] '
                        onClick={() => handleAddCarrito(pack._id, contador)}>Agregar al carrito</button>
                </div>

                {/* <form onSubmit={handleSubmit}>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <button type="submit">Submit</button>
                </form> */}

              
                
            </div>
        </div>
    );
}

export default PackEspecíficoInformacion