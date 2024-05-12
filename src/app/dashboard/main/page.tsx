import { WidgetsGrid } from '@/components'

export const metadata = {
  title: 'Admin Dashboard ',
  description: 'SEO title'
}

export default function MainPage () {
  return (
    <div className='text-black py-5 flex flex-col items-center gap-3'>
      <h1 className='text-3xl'>DashBoard</h1>
      <span className='text-xl'>Informacion general</span>
      <WidgetsGrid />
    </div>
  )
}
