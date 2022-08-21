import React from 'react'
import Images from '../../Assets/Index'
import Button from '../button/Button'
import { ImageStyle, LotteresStyle, TimeLotteres } from './Style'

export default function Lotteres() {
  return (
      <LotteresStyle>
          <ImageStyle>
                <img src={Images.logo} />
          </ImageStyle>
<p>Mega Millions</p>
                  <h6> $94 000 000
          </h6> 
             <TimeLotteres>
                       <i class="far fa-clock"></i>
              <span>
                  1:22:01
              </span>
          </TimeLotteres>
            <Button /> 
    </LotteresStyle>
  )
}
