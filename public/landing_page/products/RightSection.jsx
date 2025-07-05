import React from 'react'

const RightSection = ({imageURL,productName,productDiscription,tryDemo,learnMore,googlePlay,appStore}) => {
  return (
    <div className='container mt-8 '>
      <div className="row p-5">
        <div className="col-5 p-3 mt-5">
           <h1>{productName}</h1>
          <p>{productDiscription}</p>
          <div className='fs-5'>
          <a href={learnMore} >Learn more  →</a>
          </div>
        </div>
        <div className="col-7 " >
         <img src={imageURL}  style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  )
}

export default RightSection