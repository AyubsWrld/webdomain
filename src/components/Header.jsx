import React from 'react'  ; 
import Prayers from './Prayers.jsx'  ; 
import './Header.css' ; 

export default function Header(){
  return(
    <>
      <div className="Header-Container">
        <div className="Prayers-Container">
          <Prayers/>
          <Prayers/>
          <Prayers/>
          <Prayers/>
          <Prayers/>
        </div>
      </div>
    </>
  )
} ;
