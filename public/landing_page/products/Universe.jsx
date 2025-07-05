import React from 'react'

const Universe = () => {
  return (
   <div className='container mt-5 '>
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>


        <div className="col-4 p-3" >
         <img src="media/zerodhaFundhouse.png"/>
         <p className=' text-small text-muted'>Our asset management venture
          that is creating simple and transparent index
          funds to help you save for your goals.
        </p>
        </div>
        <div className="col-4 p-3" >
          <img src="media/sensibullLogo.svg"/>
      
         <p className=' text-small text-muted'>Options trading platform that lets you
                      create strategies, analyze positions, and examine
                      data points like open interest, FII/DII, and more.
        </p>

        </div>
        <div className="col-4 p-3" >
          <img src="media/tijori.svg"/>
         <p className=' text-small text-muted'>Investment research platform
                      that offers detailed insights on stocks,
                      sectors, supply chains, and more.</p>
        </div>

        <div className="col-4 p-3 mt-5" >
         <img src="media/zerodhaFundhouse.png"/>
         <p className=' text-small text-muted'>Our asset management venture
          that is creating simple and transparent index
          funds to help you save for your goals.
        </p>
        </div>
        <div className="col-4 p-3 mt-5" >
          <img src="media/sensibullLogo.svg"/>
      
         <p className=' text-small text-muted'>Options trading platform that lets you
                      create strategies, analyze positions, and examine
                      data points like open interest, FII/DII, and more.
        </p>

        </div>
        <div className="col-4 p-3 mt-5" >
          <img src="media/tijori.svg"/>
         <p className=' text-small text-muted'>Investment research platform
                      that offers detailed insights on stocks,
                      sectors, supply chains, and more.</p>
        </div>
        <button className='m-auto btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0,auto"}}>Sign up for free</button>
      </div>
    </div>
  )
}

export default Universe