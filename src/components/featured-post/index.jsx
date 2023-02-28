import React from "react";
import {Link} from "react-router-dom";
import AuthorBadge from "../author-badge";
import AuthorBadge2 from "../author-badge2";

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

       <p className="featured-post-description"> Pintor com 12 anos de experiência em Portugal, pinturas em paredes, muros e tetos. Qualidade garantida, serviços com excelência comprovada em apartamentos e vivendas. </p>
      
       <p className="featured-post-category">Pintor</p>
     

       <AuthorBadge />

   </div>
</div>
<div className="featured-post-container" >
   <div>
    <img className="featured-post-imagem" src= "https://ireland.apollo.olxcdn.com/v1/files/4grbxycvljhj2-PT/image;s=644x461" alt="" />
      </div>

      <div>
      <h2 className="featured-post-title"> Luís Pedro Carpinteiro </h2>

       <p className="featured-post-description">Aplicação de chão flutuante e vinílico. Somos uma equipa com anos de experiência de aplicação de chão. Procura realmente profissionais na área? Orçamento grátis. </p>
      
       <p className="featured-post-category">Carpinteiro</p>
     

       <AuthorBadge2 />

   </div>
</div>
</main>
   


    );
} 