import React from "react";
import {NavLink} from "react-router-dom"

import "./styles.css";



export default function Navbar () {
   return (
       <nav className="navbar">
        <div>
         <NavLink className="logo" to= "/">
        <h3>All Services</h3>
        </NavLink>
        </div>
         
         
        <ul className="list"> 
            <li className="item">
           <NavLink  to="/">Home</NavLink>
           </li>
           <li className="item" >
            <NavLink  to="/suporte">Suporte</NavLink>
            </li>
            <li className="item" >
            <NavLink  to="/advertise ">Anuncie aqui</NavLink>
            </li>
            <li className="item" >
            <NavLink  to="/login">Login</NavLink>
            </li>
            </ul>    
         
        </nav>


    )
}

