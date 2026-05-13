import React from 'react'
import '../../../public/style.css'

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row ms-5 p-5 " id='herobanner'>
        <div className="col-6 p-5">
          <h1>Search for an answer or browse help topicsto create a ticket</h1>
          <input className='my-5' type="text"  placeholder='Eg: how do i activate F&O'/><br />
          <a className='me-5' href="">Track accpont opening</a>
          <a className='me-5' href="">Track segment activation</a>
          <a className='me-5' href="">Intraday margins</a>
          <a className='me-5' href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1>Feature</h1>
          <ol>
            <li><a href="">Current Takeovers and Delisting - january 2024</a></li>
            <li><a href="">Latest Intraday leverage - MIS & CO</a></li>
          </ol>
          
          
        </div>
      </div>
    </section>
  )
}

export default Hero
