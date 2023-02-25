import React from "react";
import {NavLink} from "react-router-dom";



import "./styles.css";

export default function Post ({ post }) {
   return (
      <div className="post-container" >
        <div>
       <img className="post-imagem" src= {post.image} />
      </div>

      <div>
      <p className="post-date">{post.date}</p>

      <h2 className="post-title">{post.title}</h2>

       <p className="post-description "> {post.description} </p>
       
    

       <NavLink to="#">
<form className="send-message" onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Enviar Mensagem</button>
</form>
</NavLink>
     </div>

</div>
    );
} 
