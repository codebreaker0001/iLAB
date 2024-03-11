import React from 'react'

import { Outlet } from 'react-router-dom'
import Headers from './component/header/header'
import Footer from './component/footer/footer'
// import './App.css'
// import Polygon from './components/polygon/polygon'


export function Layout() {
    return (
        <>
            <Headers/>
            <Outlet/>
            {/* <Polygon/> */}
            <Footer/>
            
        </>
    )
}