import React from 'react'
import Image from 'next/image'
import Section from './Section'

const Card = () => {
  return (
    <div>
    <div className='w-[1024px] h-[255px] top-[347px] left-[284px] rounded-[12px] bg-[#ffffff] flex'>
        <div className='bg-[#FF7724] choice flex justify-center items-center gap-2'>
           <Image src='/cup.png' alt='cup' width={20} height={20} className=' opacity-80 '/>
         Best Choice</div>
        <div className='flex justify-center items-center p-3 gap-3'>
        <Image  src='/f.png' alt='image' width={220} height={130} className='top-[422px] left=[326px]' />
        <div>
        <p className='card'><h4 className='font-semibold font-weight-[700]'>WixPro 72-Inch Responsive Website Builder</h4>- Comprehensive Digital Platform Creation Tool,
       Streamlined Design Interface for Professional Websites and Online Stores {`(Black/Blue)`}</p>
       <p className='font-semibold font-weight-[700] text-[#4B5665]'>Main highlights</p>
       <p className='cardt pl-8 text-[#4B5665]'>${`[What You Get]:`} Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides</p>
      <p className='font-inter text-[#1B88F4] font-[16px] pt-5'>Show more</p>
       </div>
        <Section/>
        </div>
    </div>
    <div className='w-[1024px] h-[255px] top-[347px] left-[284px] rounded-[12px] bg-[#ffffff] fle'>
    <div className='bg-[#FF7724] choice flex justify-center items-center gap-3'>
       <Image src='/cup.png' alt='cup' width={20} height={20} className=' opacity-80 '/>
     Best Choice</div>
    <div className='flex justify-center items-center p-3 gap-3'>
    <Image  src='/f.png' alt='image' width={220} height={130} className='top-[422px] left=[326px]' />
    <div>
    <p className='card'><h4 className='font-semibold font-weight-[700]'>SiteCraft 68-Inch Ultimate Web Design Studio-</h4> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
   <p className='font-semibold font-weight-[700] text-[#4B5665]'>Main highlights</p>
   <p className='cardt pl-8 text-[#4B5665]'>${`[What You Get]:`}Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations</p>
  <p className='font-inter text-[#1B88F4] font-[16px] pt-5'>Show more</p>
   </div>
    <Section/>
    </div>
</div>
<div className='w-[1024px] h-[255px] top-[347px] left-[284px] rounded-[12px] bg-[#ffffff] fle'>
    <div className='bg-[#FF7724] choice flex justify-center items-center gap-3'>
       <Image src='/cup.png' alt='cup' width={20} height={20} className=' opacity-80 '/>
     Best Choice</div>
    <div className='flex justify-center items-center p-3 gap-3'>
    <Image  src='/f.png' alt='image' width={220} height={130} className='top-[422px] left=[326px]' />
    <div>
    <p className='card'><h4 className='font-semibold font-weight-[700]'>WixPro 72-Inch Responsive Website Builder</h4> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
   <p className='font-semibold font-weight-[700] text-[#4B5665]'>Main highlights</p>
   <p className='cardt pl-8 text-[#4B5665]'>${`[What You Get]:`} Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides</p>
  <p className='font-inter text-[#1B88F4] font-[16px] pt-5'>Show more</p>
   </div>
    <Section/>
    </div>
</div>
<div className='w-[1024px] h-[436px] top-[1211px] left-[292px] rounded-[12px] bg-[#ffffff] fle'>
    <div className='bg-[#FF7724] choice flex justify-center items-center gap-3'>
       <Image src='/cup.png' alt='cup' width={20} height={20} className=' opacity-80 '/>
     Best Choice</div>
    <div className='flex justify-center items-center p-3 gap-3'>
    <Image  src='/f.png' alt='image' width={220} height={130} className='top-[422px] left=[326px]' />
    <div>
    <p className='card'><h4 className='font-semibold font-weight-[700]'>CDK Resposive Builder:</h4> An extensive library of widgets and apps, and detailed step-by-step guides</p>
   <p className='font-semibold font-weight-[700] text-[#4B5665]'>Main highlights</p>
   <p className='cardt pl-8 text-[#4B5665] p-3'><ul className='bg-[#FFF4ED] w-[505px] h-[116px] rounded-[12px] p-3'><li> 9.9 building responsive</li> 
   <li>8.9 Cool</li>
   <li>8.9 Docs</li></ul></p>
   <div className='card pt-16'> <p className=' font-semibold'> Why we love it</p>
   <div>
    <div className='flex mt-[12px]'><Image src='/box.png' alt='box' width={24} height={24} className=' opacity-65'/> <p> Documentation</p></div>
  <div className='flex mt-[12px]'> <Image src='/box.png' alt='box' width={24} height={24} className=' opacity-65'/> <p >Easy Use</p></div>
  <div className='flex mt-[12px]'>  <Image src='/box.png' alt='box' width={24} height={24} className=' opacity-65'/> <p >Out of Box</p></div>
   </div>
   </div>
  <p className='font-inter text-[#1B88F4] font-[16px] mt-[150px]'>Show more</p>
   </div>
    <Section/>
    </div>
</div>
</div>
  )
}

export default Card