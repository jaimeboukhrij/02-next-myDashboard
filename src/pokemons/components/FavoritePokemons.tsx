'use client'
import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { NoPokemonsFav } from './NoPokemonsFav'
import { useState } from 'react'

export const FavoritePokemons = () => {
  const pokemons = useAppSelector(state => Object.values(state.pokemons))
  const [pokemonsFav] = useState(pokemons)
  return (
    pokemonsFav.length
      ? <PokemonGrid pokemons={pokemonsFav} />
      : <NoPokemonsFav />
  )
}
