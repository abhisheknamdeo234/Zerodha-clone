import React from 'react'

const Hero = () => {
  return (
    <section className='container-fluid p-5' id="supportHero">
      <div className="p-3  " id="supportWrapper">
        <h4 className='fs-2  '>
          Support Portal
        </h4> 
        <a href="" style={{textDecoration:"underline",textUnderlineOffset:"8px"}}>Track Tickets</a>
      </div>
      <div className="row p-5 mx-5">
        <div className="col-6 ">
          <h1 className="fs-4 mb-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder='Eg: how do i activate F&O, why is my order getting rejected... ' className="mb-3"/><br />

          
          <a href="" className="fs-5 mx-2" style={{textDecoration:"underline",textUnderlineOffset:"8px"}}>Track account opening </a>
          <a href="" className="fs-5 mx-2" style={{textDecoration:"underline",textUnderlineOffset:"8px"}}>Track segment activation</a> 
          <a href="" className="fs-5 mx-2" style={{textDecoration:"underline",textUnderlineOffset:"8px"}}>Intraday margins </a>
          <a href="" className="fs-5 mx-2" style={{textDecoration:"underline",textUnderlineOffset:"8px"}}>Kite user manual</a>
          
        </div>
        <div className="col-1">

        </div>
        <div className="col-5">
          <h1 className="fs-3">
            Featured
          </h1>
          <ol>
            <li><a href="" style={{textDecoration:"underline",textUnderlineOffset:"8px"}}>Exclusion of F&O contracts on 8 securities from August 29, 2025</a><br /></li>
            <li><a href="" style={{textDecoration:"underline",textUnderlineOffset:"8px"}}>Revision in expiry day of Index and Stock derivatives contracts</a> <br /> </li>
          </ol>
          
          
        </div>
        
      </div>

      
      </section>
  )
}

export default Hero