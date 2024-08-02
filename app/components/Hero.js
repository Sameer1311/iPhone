"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState } from "react"
import Link from "next/link"



const Hero = () => {
const [vediosrc, setvediosrc] = useState(window.innerWidth <760 ? '/smallHero.mp4' : '/hero.mp4')

  useGSAP(()=>{
    gsap.to('#hero',{
      delay:2,
      opacity:1
    })
    gsap.to('#buy',{
      opacity:1,
      delay:2,
      y:-50
    })
  },[])
  return (
      <section className="w-full nav-height bg-black overflow-hidden">
        <div className="h-5/6 w-full flex-center flex-col">
            <p id="hero" className="hero-title">iPhone 15 Pro</p>
            <div className="md:w-10/12 w-9/12">
           <video src={vediosrc} typeof="vedio" autoPlay muted playsInline={true} className="pointer-events-none"></video>
            </div>
        </div>
        <div id="buy" className="flex flex-col items-center opacity-0 translate-y-20">
      <Link href={"https://www.apple.com/in/shop/buy-ipad/ipad-pro"} className="rounded-xl border bg-blue border-transparent hover:bg-transparent hover:border-blue hover:text-blue p-2 font-bold my-5">Buy</Link>
      <p className="font-bold text-center">From $199/month or $999</p>
        </div>
      </section>
  )
}

export default Hero