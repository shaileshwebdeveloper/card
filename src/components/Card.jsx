import React from 'react'
import "./card.css"

export const Card = (props) => {
  return (
    <div className={`container ${props.bgColor}`}>
      <div className='topDiv'>
      <p className='date'>{props.date}</p>
      <p><img src={props.logo} alt="logo" /></p> 
      </div>
      <p className='case'>{props.title}</p>
      <p className='amazon'>{props.company}</p>
      <p className='amazon'>{props.pay}</p>
      <div className='low'>
      <p className='mode'>{props.mode}</p>
      <p><img src={props.arrow} alt="logo" /></p>
      </div> 
    </div>
 
  )
}
