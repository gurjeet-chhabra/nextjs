import React from 'react'
import Image from 'next/image'

const Section = () => {
  return (
    <div className='justify-center items-center pl-5'>
        <div className='pl-12'>
    <div className='rounded-[12px] w-[135px] h-[118px]
     bg-[#F3F9FF] items-center justify-center'>
         <h4 className='text-[#074786] font-inter w-[50] h-[48px] ml-[40px] pt-[15px] left-[1142px] text-[32px] '>9.8</h4>
     <p className='text-[#074786] text-[14px] top-[407px] ml-[30px] mt-[15px] left-[1127px] w-[79px] h-[20px] '>Exceptional</p>
     <div className='flex justify-center items-center mt-[8px]'>
      <Image src='/star.png' alt='star' width={20} height={7}/>
      <Image src='/star.png' alt='star' width={20} height={7}/>
      <Image src='/star.png' alt='star' width={20} height={7}/>
      <Image src='/star.png' alt='star' width={20} height={7}/>
      <Image src='/star.png' alt='star' width={20} height={7}/>
     </div>
    </div>
    </div>
    <div className='pt-10'>
    <button className='w-[232px] h-[48px] top-[537px] left-[1051px] rounded-[12px] bg-[#1B88F4] text-white'>View</button>
    </div>
    </div>
  )
}

export default Section