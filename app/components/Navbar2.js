import React from 'react'
import Image from 'next/image'
import Smallsizenav from './Smallsizenav'

const Navbar2 = () => {
  return (
    <nav>
    <div className='flex justify-start w-screen ml-10 gap-x-3 items-center md:ml-72'>
    <Image src={'/appletitle.svg'} width={20} height={10} alt='final apple'/>
    <span className='text-gray-200 text-sm'>{'>  iPad'}</span>
    <span className='text-gray-200 text-sm'>{'>  iPad Pro'}</span>
    </div>
    <div className='w-full flex flex-col items-center justify-center my-10'>
        <div className='grid grid-cols-5  max-md:hidden w-2/3'>
    <div className='text-xs'>
        <h3 className='text-xs font-bold mt-3 text-white'>Shop and learn</h3>
        <ul className='text-gray-200'>
            <li className='colgap'>Store</li>
            <li className='colgap'>Mac</li>
            <li className='colgap'>iPad</li>
            <li className='colgap'>iPhone</li>
            <li className='colgap'>Watch</li>
            <li className='colgap'>AirPods</li>
            <li className='colgap'>TV & Home</li>
            <li className='colgap'>AirTag</li>
            <li className='colgap'>Accessories</li>
            <li className='colgap'>Gift Cards</li>
        </ul>
        <ul className='text-gray-200'>
        <h3 className='text-xs font-bold mt-3 text-white'>Apple Wallet</h3>
        <li className='colgap'>Wallet</li>
        </ul>
    </div>
    <div className='text-xs'>
        <h3 className='text-xs font-bold mt-3 text-white'>Account</h3>
        <ul className='text-gray-200'>
            <li className='colgap'>Manage Your Apple ID</li>
            <li className='colgap'>Apple Store Account</li>
            <li className='colgap'>iCloud.com</li>
        </ul>
        <h3 className='text-xs font-bold mt-3 text-white'>Entertainment</h3>
        <ul className='text-gray-200'>
            <li className='colgap'>Apple One</li>
            <li className='colgap'>Apple TV+</li>
            <li className='colgap'>Apple Music</li>
            <li className='colgap'>Apple Arcade</li>
            <li className='colgap'>Apple Podcasts</li>
            <li className='colgap'>Apple Books</li>
            <li className='colgap'>Apple Store</li>
        </ul>
        
    </div>
    <div className='text-xs'>
        <h3 className='text-xs font-bold mt-3 text-white'>Apple store</h3>
        <ul className='text-gray-200'>
            <li className='colgap'>Find a store</li>
            <li className='colgap'>Genius Bar</li>
            <li className='colgap'>Today at Apple</li>
            <li className='colgap'>Group Reservations</li>
            <li className='colgap'>Apple Camp</li>
            <li className='colgap'>Apple Trade in </li>
            <li className='colgap'>Ways to Buy</li>
            <li className='colgap'>Recycling Programs</li>
            <li className='colgap'>Order Status</li>
            <li className='colgap'>Shopping Help</li>
        </ul>
    </div>
    <div className='text-xs'>
    <h3 className='text-xs font-bold mt-3 text-white'>For Business</h3>
        <ul className='text-gray-200'>
            <li className='colgap'>Apple and Business</li>
            <li className='colgap'>Shop for Business</li>
        </ul>
        <h3 className='text-xs font-bold mt-3 text-white'>For Education</h3>
        <ul className='text-gray-200'>
            <li className='colgap'>Apple and Education</li>
            <li className='colgap'>Shop for Education</li>
            <li className='colgap'>Shop for University</li>
        </ul>
        <h3 className='text-xs font-bold mt-3 text-white'>For Healthcare</h3>
        <ul className='text-gray-200'>
            <li className='colgap'>Apple in Healthcare</li>
            <li className='colgap'>Mac in Healthcare</li>
            <li className='colgap'>Health on Apple Watch</li>
        </ul>
    </div>
    <div className='text-xs'>
    <h3 className='text-xs font-bold mt-3 text-white'>Apple values</h3>
        <ul className='text-gray-200'>
            <li className='colgap'>Accessibility</li>
            <li className='colgap'>Education</li>
            <li className='colgap'>Environment</li>
            <li className='colgap'>Privacy</li>
            <li className='colgap'>Supply chain</li>
        </ul>
        <h3 className='text-xs font-bold mt-3 text-white'>About Apple</h3>
        <ul className='text-gray-200'>
            <li className='colgap'>Newsroom</li>
            <li className='colgap'>Apple Leadership</li>
            <li className='colgap'>Career Opportunities</li>
            <li className='colgap'>Investors</li>
            <li className='colgap'>Ethics & Compliance</li>
            <li className='colgap'>Event</li>
            <li className='colgap'>Contact Apple</li>
        </ul>
    </div>
        </div>
        <Smallsizenav/>
<div className='flex justify-start items-center text-xs  text-gray-200 my-10 gap-x-3 max-md:text-center max-md:mx-3'>
    <p>More ways to shop : <b className='text-blue underline'>Find an Apple Store..</b>or <b className='text-blue underline'>other retailer..</b>near you . Or call 000800 040 1966.</p>
</div>
<div className='w-full flex  justify-center items-center max-md:hidden'>
<hr className='border w-2/3 mx-10 border-white  max-md:w-full'/>
</div>
<div className='flex items-center justify-evenly w-4/5 my-10 max-md:flex-col'>
<span className='text-xs text-left max-md:w-full mb-10'>India</span>
<p className='text-xs text-gray-200 max-md:w-full text-left max-md:my-2'>Copyright © 2024 Apple Inc. All rights reserved.</p>
<ul className='flex justify-between max-md:w-full max-md:text-xs mx-3'>
    <li className='hover:underline cursor-pointer'>Privacy Policy |</li>
    <li className='hover:underline cursor-pointer'>Terms of Use  |</li>
    <li className='hover:underline cursor-pointer'>Sales Policy  |</li>
    <li className='hover:underline cursor-pointer'>Legal  |</li>
    <li className='hover:underline cursor-pointer'>Site Map  |</li>
</ul>
</div>
        </div>
    </nav>
  )
}

export default Navbar2