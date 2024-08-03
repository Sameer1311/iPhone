"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import VedioCare from "./VedioCare"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)
const Highlite = () => {
  const Scrollref=useRef()

  
  useGSAP(()=>{
    gsap.to('#title',{
      y:-50,
      opacity:1,
      delay:2
    })
    gsap.to('.event',{
      opacity:1,
      delay:2,
      y:0,
      duration:1,
      stagger:0.25
    })
  },[])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding  bg-zinc ">
      <div className="screen-max-width">
        <div className="w-full md:flex justify-between items-end text-center">
          <h1 id="title" className="text-center widthset text-3xl text-gray-100 font-bold trans-y-10 opacity-0" ref={Scrollref}>Get the Highlights . </h1>
          <div  className="w-full flex items-center justify-center max-md:mt-5 gap-x-2 text-sm">
            <p id="link" className="event text-blue hover:underline flex items-center gap-x-1 transleate-y-10 opacity-0">Wath the film <Image src={'/watch2.png'} width={20} height={10} alt="watch"/></p>
            <p id="link" className="event text-blue hover:underline flex items-center gap-x-1 translate-y-10 opacity-0">Watch the event <Image src={'/watch2.png'} width={20} height={10} alt="watch"/> </p>
          </div>
        </div>
        <VedioCare/>
      </div>
    </section>
  )
}

export default Highlite
