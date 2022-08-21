import React from 'react'
import Images from '../../Assets/Index';
import Button from '../button/Button';
import { BiggestCardStyle, CardFooterStyle, Image, Time } from './Style';

export default function BiggestCard() {
  return (
      <BiggestCardStyle  >
          <div className='d-flex p-3 align-items-center gap-3'>
              <Image>
                  <img src={Images.logo} />
                  </Image>
              <div>
                  <p>Mega Millions</p>
                  
                  <h6> $94 000 000
                  </h6> 
                  
              </div>
             

          </div>
          < CardFooterStyle>
              <Button /> 
              <Time>
                       <i class="far fa-clock"></i>
              <span>
                  1:22:01
              </span>
              </Time>
              
         
          </ CardFooterStyle>
          
    </BiggestCardStyle >
  )
}
