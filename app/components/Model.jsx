"use client"
import React, { useRef } from 'react'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

const Model = () => {



    useGSAP(() => {
        gsap.to('#heading', {
            y: 0,
            opacity: 10,
            delay: 2
        })
        gsap.to('.iphone', {
            y: 0,
            opacity: 10,
            delay: 2,
            
        })
    }, [])
    return (
        <section className='common-padding overflow-hidden bg-gray-900'>
            <div className='screen-max-width'>
                <h1 id='heading' className='text-center text-3xl font-bold translate-y-10 opacity-0 text-gray-200'>
                    Take a closer look.
                </h1>
                <div className='flex flex-col items-center mt-5'>
                    <div className='w-full h-full md:h-full  relative bg-gray-600 flex-col justify-around  items-center my-4'>
                        <video src={'/iphone 2ved.mp4'} typeof="vedio" loop autoPlay muted playsInline={true} className='w-full h-full '></video>

                    </div>
                    <h1 className='iphone text-gray-200 text-3xl opacity-0 translate-y-10 font-bold mt-5 '>iPhone 16 pro</h1>
                    <div className='w-full h-full md:h-full  relative bg-gray-600 flex-col justify-around  items-center my-4'>
                        <video src={'/iphone 1ved.mp4'} typeof="vedio" loop autoPlay muted playsInline={true} className='w-full h-full '></video>
                    </div>
                    <h1 className='iphone text-gray-200 text-3xl opacity-0 translate-y-10 font-bold mt-5 '>iPhone 15 pro</h1>
                </div>
            </div>
        </section>
    )
}

export default Model
