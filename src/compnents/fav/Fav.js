import React from 'react'
import Images from '../../Assets/Index'
import { FavStyle, Par } from './Style'

export default function Fav() {
  return (
      <FavStyle>
          <img src={Images.Icon} />
          <div>
              <div className='d-flex justify-content-between'>
                  <p>you pick</p>
                  <a href=''>Play Now » </a>
              </div>
              <Par>It’s easy! Pick from over 40 official lottery games you wish to play. Then select your winning numbers.</Par>
          </div>

    </FavStyle>
  )
}
