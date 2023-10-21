import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigator = useNavigate();
    function HistoryBack() {
        navigator(-1)
    }
  return (
    <>
    <div className='d-flex flex-column text-center'>
    <h1 className='text-center'>Home</h1>
    <Button className='btn btn-info' onClick={()=>HistoryBack()}>Back</Button>
    </div>
    </>
  )
}