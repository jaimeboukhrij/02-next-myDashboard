import Image from 'next/image'
import Link from 'next/link'
import { SimplePokemon } from '../interfaces/simple-pokemos'
import { IoHeartOutline } from 'react-icons/io5'
interface Props{
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }:Props) => {
  const { id, name } = pokemon
  return (
    <div className='mx-auto right-0 mt-2 w-60' key={id}>
      <div className='bg-white rounded overflow-hidden shadow-lg'>
        <div className='text-center p-6 bg-gray-800 border-b flex flex-col items-center justify-between h-[188px]'>
          <Image
            className='w-[65px] h-[65px]'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={70}
            height={70}
            alt='name'
            priority={false}
          />
          <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>{name}</p>
          <div className='my-4'>
            <Link
              href={`/dashboard/pokemon/${id}`}
              className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
            >
              Mostrar mas informacion
            </Link>
          </div>
        </div>

        <div className='border-b'>
          <Link href='/account/campaigns' className='flex justify-center'>
            <div className='px-4 py-2 hover:bg-gray-100 flex justify-center  w-full'>
              <div className='text-red-600'>
                <IoHeartOutline />
              </div>
              <div className='pl-3'>
                <p className='text-sm font-medium text-gray-800 leading-none'>
                  No es favorito
                </p>
              </div>
            </div>
          </Link>

        </div>

      </div>
    </div>
  )
}
