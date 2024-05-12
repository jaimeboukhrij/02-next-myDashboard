import { FavoritePokemons } from '@/pokemons'

export const metadata = {
  title: 'Favorite pokemons',
  description: ''
}

export default async function FavouritePokemonPage () {
  return (
    <div className='flex flex-col gap-5'>
      <p className='w-full text-center py-3 text-3xl'>
        Mis Pokemons Favoritos
      </p>
      <div className='flex flex-row flex-wrap justify-evenly gap-2'>
        <FavoritePokemons />
      </div>
    </div>
  )
}
