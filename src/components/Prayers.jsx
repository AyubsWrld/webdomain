import React from 'react'  ; 
import Fajr from '../assets/fajr.svg' ; 
import './Prayers.css' ; 

export default function Prayers(){
  return(
    <>
      <div className="Prayer-Card">
        <div className="Prayer-Details">
          <img src={Fajr}  alt="fajr" className="Prayer-Icon"/> 
          <div className ="Prayer-Name">
            Fajr
          </div>
        </div>

        <div className="Timing">
            5:30AM
        </div>
      </div>
    </>
  )
} ;

