import { PokemonGrid } from '@/pokemons'

export const metadata = {
  title: 'Favorite pokemons',
  description: ''
}

export default async function FavouritePokemonPage () {
  return (
    <div className='flex flex-wrap justify-between items-center'>
      <p>fav pokemons</p>
      <PokemonGrid pokemons={[]} />
    </div>
  )
}
