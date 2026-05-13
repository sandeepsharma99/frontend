import React from 'react'

const Brokerage = () => {
  return (
    <div className="container">
        <div className="row mt-5 text-center border-top">
            <div className="col-8 p-4">
                <a href="" style={{textDecoration:"none"}}>
                    <h3 className='fs-5'>Brokerage calculator</h3>
                    <ul style={{textAlign:'left', lineHeight:'2.8', fontSize:"12px"}} className='text-muted mt-5 '>                        <li>call & Trade auto-squareoff:Additional charges of &#8377; GST per order</li>
                        <li>Digital contract Notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be changed &#8377; 20 per contract note. Courier charges apply.</li>
                        <li>For NRI (non-PIS), 0.5% or &#8377;100 per executed order for equity (whichever is lower)</li>
                        <li> FOR NRI (PIS), 0.5% or &#8377;200 per executed order for equity(whicheveris lower)</li>
                        <li>if the account is in debit balance , any order placed will be charged &#8377;40 per executed order instead of &#8377;20 executed order.</li>
                    </ul>   
                </a>
            </div>
            <div className="col-4 p-4">
                <a href="" style={{textDecoration:"none"}}>
                    <h3>list of charges</h3>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Brokerage