
'use client'
import { tecnologiasLogo } from '@/data'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const Carrusel = () => {

  const carruselTecnologias = [ ...tecnologiasLogo, ...tecnologiasLogo]
  
  return (
    <div className='container mt-5'>
      <h2 className='text-center text-3xl mb-3'>Stack <span className='font-bold text-secondary '>Profesional</span></h2>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 25,
                        repeat: Infinity,
                    }
                }}
            >
                  {carruselTecnologias.map((slide, index) => (
                      <div key={index} className="flex-shrink-0" style={{ width: `${100 / tecnologiasLogo.length}%` }}>
                          <Image className="flex flex-col items-center justify-center h-full text-6xl rounded-md" src={slide.src} width={120} height={120} alt='techs' />
                      </div>
                  ))}
            </motion.div>
        </div>













      {/* <div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>

        <div className='flex items-center justify-center md:justify-start animate-infinite-scroll gap-5'>

          {carruselTecnologias.map((item, index) => (
              <Image 
              key={index}
                src={item.src} 
                alt='techs'
                width={120}
                height={120}
                className='object-cover object-center rounded-lg'
              />
            ))}
        </div>
      </div> */}
    </div>
  )
}

export default Carrusel
