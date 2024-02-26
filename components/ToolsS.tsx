import React from 'react'
import Image from 'next/image'

const ToolsS = () => {
  return (
    <>
    <div className='flex items-center justify-evenly h-[26px] w-[800px] p-[3px]'>
        <p className='tools'>Tools</p>
        <p className='tools'>AWS Builder</p>
        <p className='tools'> Start Build</p>
        <p className='tools'> Build Supplies</p>
    <p className='tools'> Tooling</p>
    <p className='tools'>BlueHosting</p>
    </div>
    <div className='flex justify-start items-center gap-6 pb-8 pt-6 w-[800px] pl-[70px] h-[26px]'>
    <p className='tools'> Home </p>
    <p className='tools'>{`>`}</p>
    <p className='tools'>Hosting for all </p>
    <p className='tools'>{`>`}</p>
    <p className='tools'> Hosting </p>
    <p className='tools'>{`>`}</p>
    <p className='tools'>Hosting6 </p>
    <p className='tools'>{`>`}</p>
    <p className='tools'>Hosting5</p>
    </div>
    </>
  )
}

export default ToolsS