import React from 'react'

const Hero = () => {
  return (
    <div className='containter p-5'>
            <div className='row text-center'>
                <img src="media/homeHero.png" alt="Hero Image" className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='m-auto btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0,auto"}}>Sign up for free</button>
            </div>
    </div>
  )
}

export default Hero;