import Carrusel from '@/components/carrusel'
import ContainerPage from '@/components/container'
import CounterServices from '@/components/counter-services'
import TimeLine from '@/components/time-line'
import TransitionPage from '@/components/transitionPage'

const AboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <div className='flex justify-center flex-col items-center'>
        <h1 className='text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-6'>
          Toda mi{' '}
          <span className='font-bold text-secondary'>Trayectoria Profesional</span>
        </h1>
        <CounterServices />
        <Carrusel />
        <TimeLine />
        </div>
      </ContainerPage>
    </>
  )
}

export default AboutMe