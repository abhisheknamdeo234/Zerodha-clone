import React from 'react'
import Hero from "./Hero"
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe"


const ProductPage = () => {
  return (
    <>
    <Hero/>
    <LeftSection imageURL="media/kite.png"
     productName="kite" 
     productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
     tryDemo="" 
      learnMore="" 
     googlePlay="" 
     appStore=""/>

     <RightSection 
     imageURL="media/console.png"
     productName="Console" 
     productDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
     tryDemo="" 
      learnMore="" 
     googlePlay="" 
     appStore="" />
     
     <LeftSection imageURL="media/coin.png"
     productName="Coin" 
     productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
     tryDemo="" 
      learnMore="" 
     googlePlay="" 
     appStore=""/>
     <RightSection 
     imageURL="media/kiteconnect.png"
     productName="Kite Connect API" 
     productDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
     tryDemo="" 
      learnMore="" 
     googlePlay="" 
     appStore=""/>
     <LeftSection imageURL="media/varsity.png"
     productName="Varsity mobile" 
     productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
     tryDemo="" 
      learnMore="" 
     googlePlay="" 
     appStore=""/>

    <p className='text-center fs-3 mt-4 mb-5'>
      Want to know more about our technology stack? Check out the Zerodha.tech blog.
    </p>

    <Universe/>
    </>
  )
}

export default ProductPage