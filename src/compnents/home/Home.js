import React from 'react'
import BiggestCard from '../biggestCard/BiggestCard'
import Fav from '../fav/Fav'
import HeroSection from '../heroSection/HeroSection'
import Lotteres from '../lotteres/Lotteres'
import { PalyH5, PlaySection, PlaySectionContainer, Question, WhatsappStyle } from './Style'
export default function Home() {
  return (
      <div className='home'>
          <div className='row'>
              <div className='col-lg-2 d-lg-block d-sm-none d-sx-none p-5'>
                  <Question>Questions?</Question>
                  <p>
                    contact us by:
                  </p>
                  <h5>
                      Skype:
                  </h5>
                  <span>
                      sales@mekashron.com
                  </span>
                  <br/>
                  <span>
                      or
                  </span>
                    <WhatsappStyle>
                      Whatsapp:
                  </WhatsappStyle>
                   <span>
                      +972559461380
                  </span>

            </div>
              <div className='col-lg-8'>
                  <HeroSection />
                  <div className='row'>
                           <div className='col-lg-4'>
                        <Fav/> 
                      </div>
                         <div className='col-lg-4'>
                        <Fav/> 
                      </div>
                         <div className='col-lg-4'>
                        <Fav/> 
                      </div>
                  </div>
                  
                  <div className='row mt-5'>
                      <h4 className='mb-4'>BIGGEST UPCOMING LOTTERY DRAWS</h4>
                      <div className='col-lg-4'>
                          <BiggestCard/> 
                      </div>
                        <div className='col-lg-4'>
                          <BiggestCard/> 
                      </div>
                        <div className='col-lg-4'>
                          <BiggestCard/> 
                      </div>
                  </div>
                   <PlaySection>
                      <PalyH5>PLAY UPCOMING LOTTERIES ONLINE</PalyH5>
                      <PlaySectionContainer>
                          <Lotteres/> 
                      <Lotteres /> 
                       <Lotteres/> 
                        <Lotteres/> 
                      <Lotteres /> 
                          <Lotteres /> 
                             <Lotteres/> 
                      <Lotteres /> 
                          <Lotteres /> 
                           <Lotteres/> 
                      </PlaySectionContainer>
                    
                  </PlaySection>
                 
            </div>
          </div>
    </div>
  )
}
