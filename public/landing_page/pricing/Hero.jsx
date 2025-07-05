import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5'>
    
       <div className="row p-5  mt-5 border-bottom text-center">
        <h1>Charges</h1>
        <h3 className='text-muted mt-3 fs-4'>List of all charges and taxes</h3>
        </div>
        <div className="row p-5  mt-5">
        <div className="col-4 p-5">
          <img src="media/pricing0.svg" />
          <h1 className='fs-4 mt-5'>
              Free equity delivery
          </h1>
          <p className='text-muted mt-4 '>
              All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/intradayTrades.svg" />
          <h1 className='fs-4 mt-5'>
              Intraday and F&O trades
          </h1>
          <p className='text-muted mt-4'>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
          
        </div>
        <div className="col-4 p-5">
          <img src="media/pricing0.svg" />
          <h1 className='fs-4 mt-5'>
              Free direct MF
          </h1>
          <p className='text-muted mt-4'>
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>i
          
        </div>
      </div>
    </div>
  )
}

export default Hero