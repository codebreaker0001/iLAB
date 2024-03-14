
"use client"
import { Link, NavLink } from 'react-router-dom';
// import Link from 'next/link'
import './header.css'


// import { a }from '../temp.js'

// console.log(a);

// import MetmaskConnect from './metamaskConnection/metamask'




// const ethers = require("ethers")

// import ethers from 'ethers'


var wallet;
var signer;

export default function Headers(){
    return(
      

    <div class="main" >
    <div class = "main-1">
      <div class="ether-flow">
      <img src="/" alt="i LAB" />
      </div>
      <div class="main-1-1">
        <li> <NavLink to="/" className="nav-link">Home</NavLink></li>
        <li> <NavLink to="/coverpage" className="nav-link">Coverpage</NavLink></li>
        <li><NavLink to="/labreport" className="nav-link">Lab Report</NavLink></li>
        <li><NavLink to="/bodychart" className="nav-link">Body Chart</NavLink></li>
        <li><NavLink to="/interpreter" className="nav-link">Smart Interpreter</NavLink></li>
      </div>
      <div>
        {/* <button class="button" style={{color:"black"}} ></button> */}
        <button class="button" style={{color:"black"}}  > Enter ID </button>
      </div>
    </div>

    

    </div>
    
    )
}