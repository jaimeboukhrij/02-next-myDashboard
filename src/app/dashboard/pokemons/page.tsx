import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons'

const getPokemon = async (limit = 20, offset = 0):Promise<SimplePokemon[]> => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  const dataJson:PokemonsResponse = await data.json()
  const pokemnos = dataJson.results.map(elem => ({
    id: elem.url.split('/').at(-2)!,
    name: elem.name
  }))
  return pokemnos
}

export default async function PokemonPage () {
  const pokemons = await getPokemon(151)
  return (
    <div className='flex flex-wrap justify-between items-center'>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
