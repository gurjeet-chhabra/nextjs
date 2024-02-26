'use client';
import React from 'react'
import Card from './Card'
import Head from './Head'
import Tools from './Tools'
import ToolsS from './ToolsS'
import Deals from './Deals'

export const Lay = () => {
  return (
    <div className='w-[1592px] h-[2347px] bg-[#FBFCFD]'>
      <Head/>
      <div className='w-[1024px] h-[1.33px] bg-[#E1E4E6] ml-[250px] mt-[0px]'></div>
      <Tools/>
      <div className='w-[1024px] h-[1.33px] bg-[#E1E4E6] ml-[250px]'></div>
    <div className='w-[1592px] h-[2347px] top-[89px] left-[11px] pl-64 pr-64 pt-6'>
      <ToolsS/>
      <Card/>
      <h3 className='dh mt-[50px] mb-[30px]'>Related deals you might like for</h3>
      <div className='flex justify-center items-center'>
      <Deals/>
    <Deals/>
    <Deals/>
      </div>
      <div className='flex items-center justify-between mt-[80px] mb-[10px]'>
      <p className='text-[#5C6874] w-[398px] h-[88px] text-[32px]'>Sign up and get exclusive special deals</p>
      <div className='flex'>
      <div className='w-[348px] h-[52px] bg-[#ffffff] '>
      </div>
      <div className='bg-[#1B88F4] flex justify-center border items-center w-[97px] h-[52px] text-[#FFFFFF]
       text-[14px]'>Sign Up</div>
       </div>
      </div>
    </div>
    </div>
  )
}
