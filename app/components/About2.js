import React from 'react'
import Image from 'next/image'

const About2 = () => {
  return (
    <section className='w-full h-full overflow-hidden mx-6'>
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-5xl font-bold text-center md:text-8xl'>Dream big. <br />
    Connect fast.</h1>
    <div className='mr-10 my-10'>
    <Image src={'/iphone background.jpg'} width={1000} height={200} alt='' className='w-full h-full max-md:h-[60vh] max-md:mr-10 mx-8' />
    </div>
    <div className='max-md:flex max-md:flex-col h-full md:flex justify-between gap-x-10 my-10'>
        <div className='md:w-[30vw]'><p className='text-gray-200 font-bold gap-4 items-center'>Pro connectivity adds a whole new dimension of versatility to iPad Pro. <b className='text-white'> Drive high-resolution external displays </b>up to 6K and connect to storage devices with Thunderbolt. And stay connected wherever you are with blazing-fast Wi-Fi 6E and 5G capabilities.8</p></div>
        <div className='max-md:my-10 text-center'><p><b className='text-gray-200 text-xl text-left'>Up to </b><br />
<b className='text-3xl text-white '>40 Gbps</b> <br />
<b className='text-xl text-gray-200'>data transfer speeds</b> <br />
<b className='text-3xl py-8'>Wi-Fi 6E</b> <br />
<b className='text-3xl font-bold'>5g</b></p></div>
    </div>
    <button className='flex items-center border border-black rounded-lg p-2 bg-gray-300 justify-center mb-10'>
    <span className='mx-2 font-bold'><a href="#home">Stay connected like a pro</a></span>
    <span><Image src={'/plus.svg'} width={30} height={20}/></span>
    </button>
    </div>

    </section>
  )
}

export default About2