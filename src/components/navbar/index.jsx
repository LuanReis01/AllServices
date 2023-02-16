import React from "react";
import {Link} from "react-router-dom"

import "./styles.css";



export default function Navbar () {
   return (
       <nav className="navbar">
        <div>
         <Link className="logo" to= "/">
        <h3>All Services</h3>
        </Link>
        </div>

        <ul className="list"> 
            <li className="item">
           <Link  to="/">Home</Link>
           </li>
           <li className="item" >
            <Link  to="/suporte">Suporte</Link>
            </li>
            <li className="item" >
            <Link  to="/contact">Anuncie aqui</Link>
            </li>
            <li className="item" >
            <Link  to="/login">Login</Link>
            </li>
            </ul>    
         
        </nav>


    )
}

