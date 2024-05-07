import ContainerPage from '@/components/container'
import PortfolioBox from '@/components/portfolio-box'
import TransitionPage from '@/components/transitionPage'
import { dataPortfolio } from '@/data'
import React from 'react'

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />

      <div className='flex flex-col justify-centerh-full'>
        <h1 className='text-2xl leading-tight text-center md:text-4xl md:mb-5'>
          Mis ultimos{' '}
            <span className='text-secondary font-bold'>proyectos realizados</span>
        </h1>
        <div className='relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4'>
          {dataPortfolio.map((data) => (
            <PortfolioBox
              key={data.id}
              data={data}
            />
          ))}
        </div>
      </div>
    </ContainerPage>
  )
}

export default PortfolioPage
