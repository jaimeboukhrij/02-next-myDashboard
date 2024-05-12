import { CarCounter } from '@/shopping-cart/components'

export const metadata = {
  title: 'Shopping Cart'
}

export default function CounterPage () {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <span>Productos en el carrito</span>
      <CarCounter value={10} />
    </div>
  )
}
