import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Car() {
  const navigator = useNavigate();
  function BackHandler(){
    navigator("/Service")
  }
  return (
    <>
    <div className='d-flex flex-column text-center'>\
    <img src="/src/assets/car.jpg" alt="" style={{height:"500px", width:"50%" , marginLeft:"350px"}} />
      <h1>Car</h1>
      <Button className='btn btn-info' onClick={()=>BackHandler()}> 
      Back
      </Button>
    </div>
    </>
  )
}