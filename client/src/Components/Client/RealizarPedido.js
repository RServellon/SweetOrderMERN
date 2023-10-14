import React, { useState, useEffect } from 'react'
import '../../Styles/RealizarPedido.css'
import Menu from '../ReuseComponents/Menu'
import { getAllPacks } from '../../services/axiosClientService'
import Articulo from './Components/Articulo'
import Bear from '../../Images/gum.png'
import Candy from '../../Images/candy.png'
import HeaderClientes from '../ReuseComponents/HeaderClientes'
function RealizarPedido() {

  const [packs, setpacks] = useState(null)

  const getAllPackages = async () => {
    try {
      const response = await getAllPacks();
      if (response.status === 200) {
        setpacks(response.data)
      }
    } catch (error) {
      alert('Something went wrong: ' + error)
    }
  }

  useEffect(() => {
    getAllPackages();
  }, [])

  return (
    <div className='w-screen bg-gray-100'>
      
      <HeaderClientes />
      <Menu />
      <div className='bg-gray-100 flex flex-wrap justify-center gap-4 px-6  lg:grid lg:gap-5 lg:grid-cols-4'>
        {
          //Map of all packages, that creates a new component for each one
          packs && packs.map((pack) => {
            return (
              <Articulo packs={pack} />
            )
          })
        }
      </div>

    </div>
  )
}

export default RealizarPedido