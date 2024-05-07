import { SimplePokemon } from '../interfaces/simple-pokemos'
import { PokemonCard } from './PokemonCard'
interface Props{
    pokemons:SimplePokemon[]
}
export const PokemonGrid = ({ pokemons }:Props) => {
  return (

    pokemons?.map((pokemon) => {
      return (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      )
    })

  )
}
