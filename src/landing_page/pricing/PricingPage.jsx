import React from 'react'
import Navbar from '../Navbar'
import Pricing from '../home/Pricing'
import Footer from '../Footer'

const PricingPage = () => {
  return (
    <>
      <main className="container py-5">
        <h1 className="text-center mb-5">Pricing</h1>
        <Pricing />
      </main>
      
    </>
  )
}

export default PricingPage
