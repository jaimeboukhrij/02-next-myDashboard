'use client'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import { IoCartOutline } from 'react-icons/io5'

export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count)
  return (
    <div className='mt-4 w-full flex flex-wrap flex-row px-2 justify-between'>
      <SimpleWidget
        title={count}
        label='Contador'
        href='/dashboard/counter'
        icon={<IoCartOutline size={70} className='text-blue-600' />}
        subTitle='Productos en el carrito'
      />

    </div>
  )
}
