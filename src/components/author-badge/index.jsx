import React from "react";
import {NavLink} from "react-router-dom";

import "./styles.css";

export default function AuthorBadge () {
   return (
     <div className="author-badge-container">
        <img className="author-badge-image" src="https://img.freepik.com/fotos-gratis/homem-jovem-construtor-em-uniforme-de-construcao-e-capacete-de-seguranca-segurando-o-rolo-de-pintura-e-pincel-com-um-grande-sorriso-no-rosto-sobre-parede-azul-isolada_141793-15926.jpg" alt="" />

        <div className="badge-details">
            <h3>José Nogueira</h3>
            <p>Tel.: 923456345</p>
            
        </div>

     </div>
    );
} 