import React from 'react'
import Hubspot from "../assets/HubspotLogo.png"
import Google from "../assets/GoogleLogo.png"
import Microsoft from "../assets/MicrosoftLogo.png"
import Walmart from "../assets/WalmartLogo.png"
import FedEx from "../assets/FedExLogo.png"
import "./aboutus.css"

function Aboutus() {
  return (
    <div  style={{background: "#ff12"}}>
        <div className='aboutus-container m-2'>
            <h2 className='aboutus-heading'>what Does People Say's About Us ?</h2>
            <p className='aboutus-description'>These are things that People who have used our features and works says.</p>
        </div>
        <div className='our_parteners'>
            <h2>Our partners</h2>
            <section className='logo-container'>
                <img src={Hubspot} alt="" />
                <img src={Google} alt="" />
                <img src={Microsoft} alt="" />
                <img src={Walmart} alt="" />
                <img src={FedEx} alt="" />
            </section>
        </div>
    </div>
  )
}

export default Aboutus