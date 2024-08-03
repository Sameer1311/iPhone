"use client"
import React from 'react'
import Navbar2 from './Navbar2'

const Footer = () => {
  return (
    <footer className=' w-full h-full footercolor'>
    <div className='flex flex-col items-center'>
    <div className='text-start md:w-4/5 text-xs font-extralight my-8 flex flex-col gap-y-5 max-md:text-center '>
    <p className='text-xs'>*Listed pricing is Maximum Retail Price (inclusive of all taxes).</p>
    <p>‡No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.</p>
    <p>Representative example: Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.</p>
    <p>**Apple education pricing is available to current and newly accepted university students, parents buying for university students, and teachers and staff at all levels. For more information, visit <a href="https://www.apple.com/in-edu/store" className='underline font-bold'>apple.com/in-edu/store.</a></p>
    <p>◊Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser. Offer is subject to availability. Subject to terms and conditions <a href="https://www.apple.com/in-edu/shop/browse/home/back_to_school/terms_conditions" className='underline font-bold'>herein.</a></p>
    <details>
        <summary className='font-bold text-2xl text-center'>More</summary>
        <ul className='list-decimal my-3 flex flex-col gap-y-5'>
        <li>Accessories are sold separately.</li>
        <li>The 13″ iPad Pro is 5.1 mm and the 11″ iPad Pro is 5.3 mm.</li>
        <li>Testing conducted by Apple in March and April 2024 using pre-production iPad Pro 13″ (M4) units with 10‑core CPU and 16GB of RAM, as well as production iPad Pro 12.9″ (6th generation) units with 8‑core CPU and 16GB of RAM. Pre-release Octane X 2024.1 (a4) 4-09-2024 for iPad tested using a scene with 7,80,000 meshes and 27 million unique primitives, utilising hardware-accelerated ray tracing on M4‑based systems and software-based ray tracing on all other units. Performance tests are conducted using specific iPad units and reflect the approximate performance of iPad Pro.</li>
        <li>Testing conducted by Apple in March and April 2024 using pre-production iPad Pro 13” (M4) units with 10‑core CPU and 16GB of RAM, as well as production iPad Pro 12.9” (6th generation) units with 8‑core CPU and 16GB of RAM. Tested with Affinity Photo 2 v2.4.0.2301 using the built‑in benchmark version 21000. Performance tests are conducted using specific iPad units and reflect the approximate performance of iPad Pro.</li>
        <li>Testing conducted by Apple in March and April 2024 using pre-production iPad Pro 11″ (M4) and iPad Pro 13″ (M4) units. Testing consisted of full battery discharge while performing each of the following tasks: video playback and Internet browsing using Wi‑Fi or cellular data network (cellular models subscribed to LTE and 5G carrier networks). Video content was a repeated 2‑hour 23‑minute movie purchased from the iTunes Store. Internet over Wi‑Fi and cellular data network tests were conducted using dedicated web servers, browsing snapshot versions of 20 popular web pages. All settings were default except: Wi‑Fi was associated with a network (except for Internet browsing over cellular data network); the Wi‑Fi feature Ask to Join Networks and Auto-Brightness were turned off; Brightness was set to 50%; and WPA2 encryption was enabled. Battery life depends on device settings, usage, network and many other factors. Battery tests are conducted using specific iPad units; actual results may vary.</li>
        <li>iPad Pro models with 256GB or 512GB storage feature the Apple M4 chip with 9‑core CPU. iPad Pro models with 1TB or 2TB storage feature the Apple M4 chip with 10‑core CPU.</li>
        <li>Coming later this year and requires Final Cut Pro for iPad 2.</li>
        <li>Not all carriers support eSIM. See your carrier for more details. For models A3007 and A3006, contact China Unicom for more details.</li>
        <li>Wi‑Fi 6E is available in countries and regions where supported. Data plan is required. 5G is available in selected markets and through selected carriers. Speeds vary based on site conditions and carrier. For details on 5G support, contact your carrier and see <a href="https://www.apple.com/in/ipad/cellular/" className='underline font-bold'>apple.com/in/ipad/cellular.</a></li>
    </ul>
    </details>
    <hr className='border  border-white '/>
    </div>
    <Navbar2/>
    </div>
    </footer>
  )
}

export default Footer