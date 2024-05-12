import React from 'react'
import { IoHeartOutline } from 'react-icons/io5'

export const NoPokemonsFav = () => {
  return (
    <div className='h-[50vh] flex flex-col items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500' />
      <span>No hay pokemons favoritos</span>
    </div>
  )
}
