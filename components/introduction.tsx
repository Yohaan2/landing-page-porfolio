'use client'
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkBg/40'>
      <div className='z-20 grid items-center h-full p-40 py-20 md:py-20 md:grid-cols-2'>
        <Image 
          src='/foto-perfil.jpg' 
          priority 
          width={400} 
          height={400} 
          alt='Profile pic'
          className='rounded-full'
          />

          <div className='flex flex-col justify-center max-w-md'>
            <h1 className='mg-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>
              <TypeAnimation
                sequence={[
                  'Hola! Soy Yohan Garcia!',
                  2000,
                  'Desarrollador Full Stack',
                  1000,
                  'Encantado de conocerte!',
                  1000
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                className='font-bold text-secondary'
              >

              </TypeAnimation>
            </h1>
            <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>
              Soy Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste inventore delectus dolor repellat facilis pariatur ullam consectetur sint dolore. Sunt accusantium amet earum voluptatibus necessitatibus? Excepturi amet mollitia illo!
            </p>
            <div className='flex items-center justify-center gap-3 md:justify-start md:gap-10'>
              <Link 
                href='/projects'
                className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-lg hover:shadow-white/50'
              >
                Ver Proyectos
              </Link>
              <Link 
                href='/contact'
                className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-lg hover:shadow-secondary/50 text-secondary border-secondary'
              >
                Contacta conmigo
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Introduction
