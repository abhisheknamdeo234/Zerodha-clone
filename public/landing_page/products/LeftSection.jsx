import React from 'react'

const LeftSection = ({imageURL,productName,productDiscription,tryDemo,learnMore,googlePlay,appStore}) => {
  return (
    <div className='container mt-5 '>
      <div className="row p-5">
        <div className="col-8 p-3">
          <img src={imageURL}  />
        </div>
        <div className="col-4 mt-5">
          <h1>{productName}</h1>
          <p>{productDiscription}</p>
          <div className='fs-5'>
          <a href={tryDemo}>Try Demo  →</a>
          <a href={learnMore} style={{marginLeft:"50px"}}>Learn More  →</a>
          </div>
          <div className="mt-3 ">
          <a href={googlePlay}><img src="media/googlePlayBadge.svg"  /></a>
          <a href={appStore} style={{marginLeft:"15px"}}><img src="media/appStoreBadge.svg"  /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection