import Link from 'next/link'

interface Props{
  title: number,
  subTitle?: string,
  label?:string,
  icon?: React.ReactNode,
  href?: string
}

export const SimpleWidget = ({ title, href, icon, label, subTitle }:Props) => {
  return (
    <div className='bg-white shadow-xl p-3  rounded-2xl border-1 border-gray-50 m-2'>
      <div className='flex flex-col'>
        <div>
          <h2 className='font-bold text-gray-600 text-center'>{label}</h2>
        </div>
        <div className='my-3'>
          <div className='flex flex-row items-center justify-center space-x-1 '>
            <div id='icon'>
              {icon}
            </div>
            <div id='temp' className='text-center'>
              <h4 className='text-4xl'>{title}</h4>
            </div>
          </div>
        </div>
        <p className='text-xs text-gray-500'>{subTitle}</p>

        <div className='w-full flex justify-center items-center text-right border-t-2 border-gray-100 mt-2'>
          {
           href &&
             <Link href={href} className='text-indigo-600 text-xs font-medium mt-2'>Más</Link>
        }
        </div>

      </div>
    </div>
  )
}
