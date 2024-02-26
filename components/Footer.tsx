import React from 'react'

const Footer = () => {
  return (
    <div className='w-[1592px] h-[452px] left-[11px] bg-[#212731] flex justify-evenly'>
        <p className='footer mt-[80px]'>CATEGORIES
            <ul className='li'>
                <li className='pt-2'>Web Builder</li>
                <li className='pt-2'> Hosting</li>
                <li className='pt-2'>Data Center</li>
                <li className='pt-2'> Robotic-Automation</li>
            </ul>
        </p>
        <p className='footer mt-[80px]'>CONTACT
        <ul className='li'>
                <li className='pt-2'>Contact</li>
                <li className='pt-2'> Privacy Policy</li>
                <li className='pt-2'>Terms Of Service</li>
                <li className='pt-2'> Categories</li>
                <li className='pt-2'>About</li>
            </ul>
        </p>
        <p className='pu mt-[150px]'>United States</p>
    </div>
  )
}

export default Footer