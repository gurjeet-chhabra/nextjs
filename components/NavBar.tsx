import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
  <div className='w-[1592px] h-[64px] nav flex items-center justify-center gap-32'>
    <div className='w-[258px] h-[37px] navd'>
      <Image src="/sr.png" width={34} height={34} alt='search' className='opacity-60'/>
    </div>
    <p className='p'>Categories</p>
    <p className='p'> Website Builders</p>
    <p className='p'>Today's deals</p>
  </div>
  )
}

export default NavBar