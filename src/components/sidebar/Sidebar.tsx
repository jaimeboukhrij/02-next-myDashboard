import Image from 'next/image'
import { FaReact } from 'react-icons/fa'
import { SiderbarMenuItem } from './SiderbarMenuItem'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeart } from 'react-icons/io5'

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={30} />,
    title: 'Dashboard',
    subTitle: 'Visualización'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={30} />,
    title: 'Counter',
    subTitle: 'Contador Client Side'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={30} />,
    title: 'Pokemons',
    subTitle: 'Generacion Estática'
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeart size={30} />,
    title: 'Favorites',
    subTitle: 'Global State'
  }
]

export const Sidebar = () => {
  return (
    <div
      id='menu'
      style={{ width: '400px' }}
      className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 h-screen'
    >
      <div id='logo' className='my-4 px-6 flex gap-2'>
        <span className='flex items-center'><FaReact /></span>
        <h1 className='text-lg md:text-lg font-bold text-white'>
          NextJs DashBoard
        </h1>
      </div>

      <div id='profile' className='px-6 py-6'>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              width={50}
              height={50}
              className='rounded-full w-8 h-8'
              src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80' alt=''
            />
          </span>
          <span className='text-sm md:text-base font-bold'>
            Jaime Boukhrij
          </span>
        </a>
      </div>
      <div id='nav' className='w-full px-6'>
        {
            menuItems.map(item => {
              return (
                <SiderbarMenuItem
                  key={item.path} {...item}
                />
              )
            })
        }

      </div>

    </div>
  )
}
