import React from 'react'

const Education = () => {
  return (
    <div className='containter mt-5 mx-5'>
        <div className="row">
            <div className="col-6">
                <img src='media/education.svg' style={{width:"70%"}}/>
            </div>
            <div className="col-6">
                <h1 className='mb-3 fs-1'>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world<br/> covering everything from the basics to advanced trading.</p>
                 <a href="" className='mx-5'>Varsity  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                 <p className='mt-5'>TradingQ&A, the most active trading and investment community in<br/> India for all your market related queries.</p>
                 <a href="" className='mx-5'>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            
            
        </div>
    </div>
  )
}

export default Education