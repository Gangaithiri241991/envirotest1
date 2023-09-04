import React from 'react'
import img from "./images.png"
import {NavLink} from "react-router-dom"
import PopoverPopupState from './PopoverPopupState'


export default function Navbar(){
    return(
        <header class="header1">
        <a href="#" class="logo"><img src={img} width="50%" height="50%"/></a>
        <nav class="navbar1">
        <NavLink to="/">Home</NavLink>
            <NavLink to="/about">ABOUTUS</NavLink>
            <NavLink to="/news">NEWS</NavLink>
            <NavLink to ="/modal">PRODUCTS</NavLink>
            <a href="#Client">CLIENT</a>
            <a href="#home">TECHNOLOGY</a>
            <a href="#about Us">SERVICES</a>
            <PopoverPopupState/>
            <a href="#products">CONTACTUS</a>
           




        </nav>
    </header>
    )
}