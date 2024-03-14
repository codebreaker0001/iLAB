import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './component/header/header'
import Footer from './component/footer/footer'

export function Layout() {
    return (
        <>
            <Headers/>
            <Outlet/>
            <Footer/>
        </>
    )
}