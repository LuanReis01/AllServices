import React from "react";
import {Link} from "react-router-dom";
import AuthorBadge from "../author-badge";


import "./styles.css";


export default function FeaturedPost ( { post }) {
 
  return (
   <main className="featured-post-main">
   <div className="featured-post-container" >
   <div>
    <img className="featured-post-imagem" src= "https://www.institutodaconstrucao.com.br/wp-content/uploads/2022/02/background_pintor_interno-e1644333101638.jpg" alt="" />
      </div>

      <div>
      <h2 className="featured-post-title"> José Nogueira Pintor </h2>

       <p className="featured-post-description"> Pintor com 12 anos de experiência em Portugal, pinturas em paredes, muros e tetos qualidade garantida nos serviços com excelência experiência comprovada em apartamentos e vivendas. </p>
      
       <p className="featured-post-category">Pintor</p>
     

       <AuthorBadge />

   </div>
</div>
<div className="featured-post-container" >
   <div>
    <img className="featured-post-imagem" src= "https://www.institutodaconstrucao.com.br/wp-content/uploads/2022/02/background_pintor_interno-e1644333101638.jpg" alt="" />
      </div>

      <div>
      <h2 className="featured-post-title"> José Nogueira Pintor </h2>

       <p className="featured-post-description"> Pintor com 12 anos de experiência em Portugal, pinturas em paredes, muros e tetos qualidade garantida nos serviços com excelência experiência comprovada em apartamentos e vivendas. </p>
      
       <p className="featured-post-category">Pintor</p>
     

       <AuthorBadge />

   </div>
</div>
</main>
   


    );
} 