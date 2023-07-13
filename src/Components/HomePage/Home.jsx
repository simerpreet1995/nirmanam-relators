import React from 'react'
import Banner1 from "../../images/homepage/hero-section/landing-page--05.jpg"
import Slidder from '../Slidder/Slidder'
import About from '../About/About'
import Cards from '../Cards/Cards'
import styled from 'styled-components';
import CardContainer from '../CardContainer/CardContainer'
import MidBanner from '../Mid-banner/MidBanner'
import Footer from '../Footer/Footer'


const ServiceWrapper = styled.div`
  background-color: #f5f6f7;

`

function Home() {
  return (
    <>
    <Slidder/>

      <About/>


      <ServiceWrapper className='padding'>
    <div className="container">
      <div className="col-12">
      <h3 class="main-heading mb-4">OUR SERVICES</h3>
      </div>
      <div className="row justify-content-center align-items-center" style={{gap: "1.5rem"}}>
      <CardContainer/>
      </div>
    </div>
    </ServiceWrapper>


    <MidBanner/>    


    </>
  )
}

export default Home
