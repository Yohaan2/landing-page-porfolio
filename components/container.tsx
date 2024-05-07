import React from 'react'

interface ContainerPageProps {
  children: React.ReactNode
}

const ContainerPage = ({ children }: ContainerPageProps) => {
  return (
    <div className='flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover'>
      <div className='z-20 w-full bg-darkBg/40'>
        <div className='w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6'>
          {children}
      </div>
      </div>
    </div>
  )
}

export default ContainerPage
