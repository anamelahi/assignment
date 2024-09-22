import React from 'react'
import "./Page5.css"
import SwiperSection from '../SwiperSection/SwiperSection'

const Page5 = () => {
  return (
    <div className='page5'>
      <div className="head">
        <h1>Trusted by over 8M sellers around the world</h1>
        <p>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
      </div>
      <div className="testimonials">
        <SwiperSection />
      </div>
    </div>
  )
}

export default Page5