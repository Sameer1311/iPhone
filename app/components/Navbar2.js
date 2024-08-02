import React from 'react'

const Navbar2 = () => {
  return (
    <nav>
        <div className='grid grid-cols-5 max-md:grid-cols-3 colgap'>
    <div className='flex flex-col gap-y-5'>
        <h3 className='font-bold text-black'>Shop</h3>
        <ul className='text-sm text-gray-200 text-balance font-bold'>
        <li className='hover:underline cursor-pointer my-3'>Store</li>
        <li className='hover:underline cursor-pointer my-3'>Mac</li>
        <li className='hover:underline cursor-pointer my-3'>iPad</li>
        <li className='hover:underline cursor-pointer my-3'>iPhone</li>
        <li className='hover:underline cursor-pointer my-3'>Watch</li>
        <li className='hover:underline cursor-pointer my-3'>AirPods</li>
        <li className='hover:underline cursor-pointer my-3'>TV & Home</li>
        <li className='hover:underline cursor-pointer my-3'>AirTag</li>
        <li className='hover:underline cursor-pointer my-3'>Accessories</li>
        <li className='hover:underline cursor-pointer my-3'>Gift Cards</li>
        </ul>
        <h3 className='text-black font-bold'>Apple wallet</h3>
        <ul className='text-sm text-gray-200 text-balance font-bold'>
            <li className='hover:underline cursor-pointer my-3'>Walet</li>
        </ul>
    </div>
    <div className='flex flex-col gap-y-3'>
        <h3 className='font-bold text-center text-black'>Account</h3>
        <ul  className='text-sm text-gray-200 text-balance font-bold'>
            <li className='hover:underline cursor-pointer my-3'>Manage Your Apple ID</li>
            <li className='hover:underline cursor-pointer my-3'>Apple Store Account</li>
            <li className='hover:underline cursor-pointer my-3'>iCloud.com</li>
        </ul>
        <h3 className='font-bold  text-black'>Entertainment</h3>
        <ul className='text-sm text-gray-200 text-balance font-bold'>
        <li className='hover:underline cursor-pointer my-3'>Apple one</li>
        <li className='hover:underline cursor-pointer my-3'>Apple TV+</li>
        <li className='hover:underline cursor-pointer my-3'>Apple Music</li>
        <li className='hover:underline cursor-pointer my-3'>Apple Acrade</li>
        <li className='hover:underline cursor-pointer my-3'>Apple Podcast</li>
        <li className='hover:underline cursor-pointer my-3'>Apple Books</li>
        <li className='hover:underline cursor-pointer my-3'>Apple store</li>
        </ul>
    </div>
    <div>
        <h3 className='font-bold text-center text-black'>Apple store</h3>
        <ul className='text-sm text-gray-200 text-balance font-bold'>
            <li className='hover:underline cursor-pointer my-4'>Find a Store</li>
            <li className='hover:underline cursor-pointer my-3'>Genius Bar</li>
            <li className='hover:underline cursor-pointer my-3'>Today at Apple</li>
            <li className='hover:underline cursor-pointer my-3'>Group Reservation</li>
            <li className='hover:underline cursor-pointer my-3'>Apple camp</li>
            <li className='hover:underline cursor-pointer my-3'>Apple Trade in</li>
            <li className='hover:underline cursor-pointer my-3'>Ways to buy</li>
            <li className='hover:underline cursor-pointer my-3'>Recycling Programme</li>
            <li className='hover:underline cursor-pointer my-3'>Order Status</li>
            <li className='hover:underline cursor-pointer my-3'>Shopping Help</li>
        </ul>
    </div>
        </div>
    </nav>
  )
}

export default Navbar2