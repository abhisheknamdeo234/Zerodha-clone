import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-5 p-5'>
        <div className='row'>
            <div className="col-6  ">
        <img src="media/largestBroker.svg" />
            </div>
            <div className="col-6 p-5 ">
                <h2> 
                    Largest stock broker in India
                </h2>
                <p className='text-muted'>
                    2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by Trading and Investing in:  
                </p>
                <div className='row mt-5'>
                    <div className="col-6">
                         <ul>
                    <li>
                        <p>
                             Future and Options
                        </p>
                    </li>
                     <li>
                        <p>
                             Commodity derivatives
                        </p>
                    </li>
                     <li>
                        <p>
                            Currency derivatives 
                        </p>
                    </li>
                    

                </ul>
                    </div>
                    <div className="col-6">
                         <ul>
                    <li>
                        <p>
                             Stocks & IPOs
                        </p>
                    </li>
                     <li>
                        <p>
                             Direct mutual funds
                        </p>
                    </li>
                     <li>
                        <p>
                            Bonds and Govt. securities  
                        </p>
                    </li>
                    

                </ul>
                    </div>
                </div>
               <img src="media\pressLogos.png" style={{width:"95%"}}/>
            </div>

        </div>
    </div>
  )
}

export default Awards