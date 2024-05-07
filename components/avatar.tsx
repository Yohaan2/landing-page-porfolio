import Image from 'next/image'
import React from 'react'
import MotionTransition from './transition-component'

const Avatar = () => {
  return (
    <MotionTransition position='bottom' className='bottom-0 right-0 hidden md:inline-block md:absolute'>
      <Image 
        src='/avatar-1.png'
        width={400}
        height={400}
        className='w-full h-full'
        alt='avatar'
      />
      
    </MotionTransition>
  )
}

export default Avatar
