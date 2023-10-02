import React from 'react'
import '../../Styles/RealizarPedido.css'
import Menu from'./Components/Menu'

function RealizarPedido() {
  return (
    <div className='w-screen'>
      <div class="w-full bg-red-400 h-12 flex items-center justify-center">
        <p class="text-white">Encuentranos en la sucursal de Alajuela!</p>
      </div>
      <Menu/>
    </div>
  )
}

export default RealizarPedido