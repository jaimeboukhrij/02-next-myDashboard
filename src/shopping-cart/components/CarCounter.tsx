'use client'
import { useAppSelector } from '@/store'
import { addOne, substractOne, initCounter } from '@/store/counter/counterSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

interface Props{
  value?:number
}
export interface CounterAPIResponse {
  method: string;
  count: number;
}
const getCounterData = async () => {
  const data = await fetch('../api/counter').then(res => res.json()).catch(e => console.log(e))
  return data as CounterAPIResponse
}

export const CarCounter = ({ value = 0 }:Props) => {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useDispatch()
  useEffect(() => {
    getCounterData().then(({ count }) => dispatch(initCounter(count))).catch(e => console.log(e))
  }, [dispatch])
  return (
    <>
      <span className='text-9xl'>{count}</span>
      <div className='flex'>
        <button
          onClick={() => dispatch(substractOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          -1
        </button>
        <button
          onClick={() => dispatch(addOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          +1
        </button>
      </div>
    </>
  )
}
