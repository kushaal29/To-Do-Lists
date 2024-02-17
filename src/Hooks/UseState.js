import React, {  useEffect, useState } from 'react'
import './states.css'
const UseState = () => {

    const [numbers, setNumbers]= useState(0)
useEffect(()=>{
   document.title=`hi (${numbers})`
})



    // document.title=`Hello ${numbers}`
  return (
    <>
   
    <div className="center_div">
        <p>{numbers} </p>
        <div className="button2" onClick={()=>setNumbers(numbers+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            INCREASE
        </div>

        <div className="button2" onClick={()=>(numbers>0 ? setNumbers(numbers-1) : setNumbers(0))}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            DECREASE
        </div>
    </div>
    
    
    </>
  )
}

export default UseState
