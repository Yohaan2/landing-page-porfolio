import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface PortfolioBoxProps {
  data: {
    title: string,
    description: string,
    image: string,
    link: string,
    urlGithub: string,
    urlDemo: string,
  }
}
const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { title, description, image, link, urlGithub, urlDemo } = data;
  return (
    <div className='p-4 border border-teal-50 rounded-xl'>
      <h1 className='mb-4 text-xl'>
      { title }
      </h1>
      <Image src={image} alt='Image Product' width={200} height={200} className='w-full md:w-[200px] rounded-2xl h-auto'/>
      <div className='flex justify-center gap-5 mt-5'>

        <Link
          href={urlGithub}
          target='_blank'
          className='p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 '
        >
          Github
        </Link>

        <Link
          href={urlDemo}
          target='_blank'
          className='p-2 transition duration-150 rounded-lg bg-secondary hover:bg-slate-500/80 '
        >
          Demo
        </Link>

      </div>
    </div>
  )
}

export default PortfolioBox
