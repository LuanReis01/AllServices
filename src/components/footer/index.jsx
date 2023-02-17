import React from "react";
import {NavLink} from "react-router-dom"

import "./styles.css";



export default function Footer () {
return (
    <footer className="footer" >
        <ul className="social-list " >
            <li>
            <NavLink> Facebook</NavLink>
            </li>
            <li>
            <NavLink>  Instagram </NavLink>
            </li>
            <li>
            <NavLink> Linkedin </NavLink>
            </li>
        </ul>
        <p className="copy-right" > <span> AllServices </span> &copy; 2023 </p>
    </footer>
)



}

