import React from 'react'
import "./Page7.css"
import integration from '../../data/integration'

const Page7 = () => {
  return (
    <div className='links-container'>
        
        <div className="lcontainer">
            <h2>Integrations</h2>
            {integration.map((link)=>(
                <a href="">{link.link}</a>
            ))}
        </div>
        <div className="lcontainer">
            <h2>Discover</h2>
            {integration.map((link)=>(
                <a href="">{link.link}</a>
            ))}
        </div>
        <div className="lcontainer">
            <h2>Start</h2>
            {integration.map((link)=>(
                <a href="">{link.link}</a>
            ))}
        </div>
        <div className="lcontainer">
            <h2>Diploy</h2>
            {integration.map((link)=>(
                <a href="">{link.link}</a>
            ))}
        </div>
    </div>
  )
}

export default Page7