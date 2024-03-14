import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../header/header'
import Footer from '../footer/footer'

export function Layout() {
    return (
        <>
            <Headers/>
            <Outlet/>
            <Footer/>
        </>
    )
}