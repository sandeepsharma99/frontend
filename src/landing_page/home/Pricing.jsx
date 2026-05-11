import React from 'react'

const Pricing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className='mb-3'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="" style={{textDecoration:"None"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col-6 p-3 border">
              <h1 className='mb-3'>&#x20B9; 0</h1>
              <p>Free equity deliveryand <br /> direct mutual funds</p>
            </div>
            <div className="col-6 p-3 border">
              <h1 className='mb-3'>&#x20B9;0</h1>
              <p>Free account opening</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing