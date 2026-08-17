
import React from 'react'
import Nevbar from './Nevbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Nevbar/>
    <Outlet />
    </>
  )
}

export default Layout