import React from 'react';
import './Events.css' ; 
import Fundraiser from './FundraiserCard.jsx' ; 

export default function Events(){
  return( 
    <>
      <div className='eventContainer'>
        <div className='RowOne'> 
          <div className="chip">Events</div>
          <h1 className="header">Programs and Events</h1>
        </div>
        <div className='RowTwo'> 
          <Fundraiser/>  
          <Fundraiser/>  
          <Fundraiser/>  
        </div>
      </div>
    </>
  )
}
