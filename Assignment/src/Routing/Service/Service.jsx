import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Service() {
  return (
    <>
    <h1 className='text-center'>Service</h1>
    <div className='d-flex flex-column text-center'>
        <NavLink to={"/Service/Bike"} style={{ textDecoration: "none", color: "black" }}>Bike</NavLink>
        <NavLink to={"/Service/Car"} style={{ textDecoration: "none", color: "black" }}>Car</NavLink>
    </div>
    <Outlet/>
    </>
  )
}