import React from 'react'

const Award = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 p-5">
            <img src="media/images/largestBroker.svg" alt="" />
          </div>
          <div className="col-6 p-5 mt-5  ">
            <h1>Largest stock Broker in india</h1>
            <p className='mb-5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>F/O</li>
                  <li>Currency Derivatives</li>
                  <li>Commodity Derivatives</li>
                </ul>
              </div>
              <div className="col-6"><ul>
                <li>Stocks</li>
                <li>IPO </li>
                <li>Bond</li>
              </ul></div>
            </div>
            <img src="media/images/pressLogos.png" alt="" style={{width:"80%"}} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Award