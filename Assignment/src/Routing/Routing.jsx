import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Service from './Service/Service'
import Error404 from './Error404'
import "../index.css"
import Bike from './Service/Bike'
import Car from './Service/Car'

export default function Routing() {
  return (
    <>
    <div className='Container'>
        <BrowserRouter>
        <Header/>
        <div className='flex_container'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Service'>
                <Route index element={<Service/>} />
                <Route path='Bike' element={<Bike/>}/>
                <Route path='Car' element={<Car/>}/>
            </Route>
            <Route path='*' element={<Error404/>} />
        </Routes>
        </div>
        </BrowserRouter>
    </div>
    </>
  )
}