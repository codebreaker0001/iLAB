
import React, { useEffect, useState } from 'react'
// import Polygon from '../components/polygon/polygon'

import './home.css'
import { NavLink } from 'react-router-dom'
import LabReport from '../component/labReport/LabReport'
import { data } from '../data'
function Home() {


    return (
        <>
        <LabReport data={data} />
        </>
        
    )    
}

export default Home