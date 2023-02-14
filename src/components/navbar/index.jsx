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

        <div>
           <Link className="nav-link" to="/">
                Home
            </Link>
            <Link className="nav-link" to="/suporte">
                Suporte
            </Link>
            <Link className="nav-link" to="/contact">
                Anuncie aqui
            </Link>
            <Link className="nav-link" to="/login">
                Login
            </Link>
    
        </div>    
         
        </nav>


    )
}

