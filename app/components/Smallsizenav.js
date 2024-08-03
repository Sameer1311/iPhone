"use client"
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Smallsizenav = () => {
useGSAP(()=>{
  gsap.to("#dropdown",{
   animationDelay:2,
    ease:'power3.inOut'
  })
},[])
  return (
    <footer className='md:hidden relative w-full'>
        <div className='flex flex-col justify-start items-start' id='dropdown'>
            <details className='ml-7 p-2  border-t-2 border-b-2 w-full text-xs animation my-4'>
                <summary className='mx-2'>Shop and Learn</summary>
                <ul className='text-gray-200   my-2 mx-4'>
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
            </details>
            <details className='ml-7 p-2  border-t-2 border-b-2 w-full text-xs animation'>
                <summary className='mx-2'>Apple wallet</summary>
                <ul className='text-gray-200 my-2  mx-4'>
            <li className='colgap'>Wallet</li>
            </ul>
            </details>
            <details className='ml-7 p-2  border-t-2 border-b-2 w-full text-xs animation my-4'>
                <summary className='mx-2'>Entertainment</summary>
                <ul className='text-gray-200   my-2 mx-4'>
            <li className='colgap'>Manage Your Apple ID</li>
            <li className='colgap'>Apple Store Account</li>
            <li className='colgap'>iCloud.com</li>
            </ul>
            </details>
            <details className='ml-7 p-2  border-t-2 border-b-2 w-full text-xs animation my-2'>
                <summary className='mx-2'>Entertainment</summary>
                <ul className='text-gray-200   my-2 mx-4'>
            <li className='colgap'>Apple One</li>
            <li className='colgap'>Apple TV+</li>
            <li className='colgap'>Apple Music</li>
            <li className='colgap'>Apple Arcade</li>
            <li className='colgap'>Apple Podcasts</li>
            <li className='colgap'>Apple Books</li>
            <li className='colgap'>Apple Store</li>
        </ul>
            </details>
            <details className='ml-7 p-2  border-t-2 border-b-2 w-full text-xs animation my-2'>
                <summary className='mx-2'>Apple Store</summary>
                <ul className='text-gray-200   my-2 mx-4'>
            <li className='colgap'>Find a Store</li>
            <li className='colgap'>Genius Bar</li>
            <li className='colgap'>Today at Apple</li>
            <li className='colgap'>Group Reservations</li>
            <li className='colgap'>Apple Camp</li>
            <li className='colgap'>Apple Trade in</li>
            <li className='colgap'>Ways to Buy </li>
            <li className='colgap'>Recycling Programme </li>
            <li className='colgap'>Order Status </li>
            <li className='colgap'>Shopping Help </li>
        </ul>
            </details>
            <details className='ml-7 p-2  border-t-2 border-b-2 w-full text-xs animation my-2'>
                <summary className='mx-2'>For Business</summary>
                <ul className='text-gray-200   my-2 mx-4'>
            <li className='colgap'>Apple and Business</li>
            <li className='colgap'>Shop for Business</li>
            </ul>
            </details>
            <details className='ml-7 p-2  border-t-2 border-b-2 w-full text-xs animation my-2'>
                <summary className='mx-2'>For Education</summary>
                <ul className='text-gray-200   my-2 mx-4'>
            <li className='colgap'>Apple and Educatoin</li>
            <li className='colgap'>Shop for Education</li>
            <li className='colgap'>Shop for University</li>
            </ul>
            </details>
            <details className='ml-7 p-2  border-t-2 border-b-2 w-full text-xs animation my-2'>
                <summary className='mx-2'>For Healthcare</summary>
                <ul className='text-gray-200   my-2 mx-4'>
            <li className='colgap'>Apple in Healthcare</li>
            <li className='colgap'>Mac in Healthcare</li>
            <li className='colgap'>Health on Apple Watch</li>
            </ul>
            </details>
            <details className='ml-7 p-2  border-t-2 border-b-2 w-full text-xs animation my-4'>
                <summary className='mx-2'>Apple Values</summary>
                <ul className='text-gray-200   my-2 mx-4'>
            <li className='colgap'>Accessibility</li>
            <li className='colgap'>Education</li>
            <li className='colgap'>Environment</li>
            <li className='colgap'>Privacy</li>
            <li className='colgap'>Supply chain</li>
        </ul>
            </details>
            <details className='ml-7 p-2  border-t-2 border-b-2 w-full text-xs animation my-4'>
                <summary className='mx-2'>About Apple</summary>
                <ul className='text-gray-200   my-2 mx-4'>
            <li className='colgap'>Newsroom</li>
            <li className='colgap'>Apple Leadership</li>
            <li className='colgap'>Carrer Opportunities</li>
            <li className='colgap'>Investors</li>
            <li className='colgap'>Ethics & Compliance</li>
            <li className='colgap'>Events</li>
            <li className='colgap'>Contact Apple</li>
        </ul>
            </details>
        </div>
    </footer>
  )
}

export default Smallsizenav