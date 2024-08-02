"use client"
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
const About = () => {

  useGSAP(()=>{
    gsap.to('#heading',{
     scrollTrigger:'#heading',
     y:0,
     opacity:10,
     delay:4 
    })
   
  },[])
  return (
    <section className='common-padding'>
    <div className='md:w-[95vw] max-md:w-full h-full '>
    <div>
        <h1 id='heading' className='text-3xl text-gray-200 font-bold opacity-0 translate-y-10 mb-5'>Explore the full story.</h1>
    </div>
    <div className='w-full h-screen flex flex-col mt-10 justify-center items-center gap-y-5'>
    <h1 className='font-bold text-4xl mt-10'>Thrill. Sleeker.</h1>
    <p className='text-gray-200 text-center '>The all-new iPad Pro packs astonishing power into an unbelievably thin, light and portable design. Push the limits of what’s possible on iPad with a super-portable 11″ iPad Pro and an expansive 13″ iPad Pro that is <b className='text-white'>the thinnest product Apple has ever created.</b></p>
    <div className='flex h-full my-7'>
    <Image src={"/iPhone website.png"} width={300} height={700} className='rotate h-full'/>
    <h1 className='center text-center text-3xl font-bold'>5.1 mm <br /> <b className='text-xl text-gray-200'>thin and light design</b></h1>
    </div>
    </div>
    <div className='mt-28 md:mt-36 h-full max-md:w-full flex flex-col items-center justify-center'>
      <h1 className='text-center text-3xl font-bold md:text-6xl'>The world’s most advanced display.
</h1>
<div className='w-full h-full my-5 md:w-9/12 '>
<video src={'/large.mp4'} typeof="vedio" loop autoPlay muted playsInline={true} className='w-full h-full '></video>
<h4 className='text-center text-sm text-gray-200 my-5 hover:underline cursor-pointer'>Stream Constellation on Apple TV+ </h4>
<div className='w-full my-8'>
  <p className='mx-4 font-bold text-center text-xl text-gray-200'>The new Ultra Retina XDR display introduces groundbreaking tandem OLED technology. Extreme brightness, incredibly precise contrast and advanced technologies like ProMotion and True Tone give you a <b className='text-white'>jaw-dropping visual experience.</b> And you can use Reference Mode for colour-accurate workflows.</p>
</div>
<div className='flex justify-center items-center my-10'>
<div className='md:grid grid-cols-3 justify-center items-center gap-x-10 max-md:flex flex-col max-md:justify-start gap-y-6'>
    <div className='flex flex-col items-center justify-center'><span className='text-color text-3xl'>1,000 nits</span><p className='text-sm'>full-screen brightness</p></div>
    <div className='flex flex-col items-center justify-center'><span className='text-color text-3xl'>1,600 nits</span><p className='text-sm'>peak HDR brightness</p></div>
    <div className='flex flex-col items-center justify-center'><span className='text-color text-3xl'>20,00,000:1 </span><p className='text-sm'>contrast ratio</p></div>
    <div className='flex flex-col items-center justify-center'><span className='text-color text-3xl'>True Tone</span><p className='text-sm'>For comfortable viewing</p></div>
    <div className='flex flex-col items-center justify-center'><span className='text-color text-3xl'>ProMotion</span><p className='text-sm'>adaptive 10-120Hz refresh rate</p></div>
    <div className='flex flex-col items-center justify-center'><span className='text-blue text-3xl font-bold'>P3</span><p className='text-sm'>wide colour</p></div>
</div>
</div>
</div>
    </div>
    </div>
    </section>
  )
}

export default About