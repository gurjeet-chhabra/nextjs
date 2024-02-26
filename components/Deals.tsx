import Image from 'next/image'
import React from 'react'

const Deals = () => {
  return (
    <div className='w-[333px] h-[425px] rounded-[12px]justify-center items-center bg-[#FFFFFF]'>
      <Image src="/f.png" alt='image' width={141} height={103} className='mt-[10px] mb-[40px] ml-[70px]'/>
      <div className='flex justify-start gap-2 items-center ml-[20px] mb-[10px]'>
      <div className='w-[69px] h-[28px] rounded-[8px] bg-[#F2F4F7] flex justify-center items-center'>
        <p className='text-[#074786] text-[13px] w-[53px] h-[20px]'>20% Off</p>
      </div>
      <div className='w-[107px] h-[28px] rounded-[8px] bg-[#F2F4F7] flex justify-center items-center'>
        <p className='text-[#074786] text-[13px] w-[91px] h-[20px]'>Limited time</p>
      </div>
      </div>
      <p className='w-[107px] h-[24px] text-[#626E79] font-semibold text-[16px] ml-[70px] mb-[10px]'>Webbuilder 1</p>
      <p className='text-[#626E79] w-[284px] h-[48px] text-[16px] ml-[10px] mb-[10px]'>Computer Modern clasic with wix support</p>
      <div className='flex items-baseline justify-start gap-2 ml-[10px] mb-[20px]'>
        <p className='text-[20px] text-[#5C6874] w-[71px] h-[28px]'>$39.96</p>
        <p className='text-[14px] text-[#9FA9B3] w-[48px] h-[20px]'>$49.96</p>
        <p className='text-[#EF4C5D] text-[13px] w-[63px] h-[20px]'>(20% Off)</p>
      </div>
      <button className='bg-[#1B88F4] rounded-[12px] w-[292px] h-[48px] flex justify-center items-center'>
        <p className='text-[#FFFFFF] text-[16px] w-[77px] h-[24px]'>View Deal</p>
      </button>
    </div>
  )
}

export default Deals