'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { itemsNavbar } from '@/data'
import MotionTransition from './transition-component'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <MotionTransition className='fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10'
    position='right'>
      <nav>
        <div className='flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/35 background-blur-sm'>
          {itemsNavbar.map(item => {
            return (
              <div key={item.id}
              className={
                `px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${pathname === item.link ? 'bg-secondary' : ''}`
              }
              >
                <Link href={item.link}>{item.icon}</Link>
              </div>
            )
          })}
        </div>
      </nav>
    </MotionTransition>
  )
}

export default Navbar
