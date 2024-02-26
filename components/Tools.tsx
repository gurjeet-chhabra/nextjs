import React from 'react'
import Image from 'next/image'

const Tools = () => {
  return (
    <div className='flex items-center justify-between w-[1024px] ml-[250px]'>
      <div className='flex justify-center items-center gap-7 h-[40px]'>
       <Image src='/ch.png' width={20} height={20} alt='check' className='opacity-60'/>
        <p className='tools'> Last Updated-February 22, 2020</p>
        <Image src='/i.png' width={20} height={20} alt='i' className='opacity-80'/>
        <p className='tools'>Advertising Disclosure</p>
    </div>
    <div className='mr-[20px]'>
      <p className='tools'>Top Relevant</p>
    </div>
    </div>
    
  )
}

export default Tools