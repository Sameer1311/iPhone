import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header id='home' className='w-full py-10 sm:px-10 px-5 flex justify-between items-center overflow-hidden'>
        <nav className='flex w-full screen-max-width'>
        <Link href={'https://www.apple.com/'}><Image src={'/apple.svg'} width={20} height={20} alt='logo'/></Link>

        <div className='flex  flex-1 justify-center max-sm:hidden font-bold'>
            {['Phones','MacBookes' ,'Tablets','Support'].map((nav=>(
                <div key={nav} className='px-5 text-gray-400 hover:text-white transition-all cursor-pointer'>
                {nav}</div>
            )))}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
            <Image src={'/search.svg'} width={20} height={20} alt='search'/>
            <Image src={'/cart.png'} width={20} height={18} alt='Cart'/>
        </div>
        </nav>
    </header>
  )
}

export default Navbar