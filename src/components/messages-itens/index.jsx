import React from "react";
import { NavLink } from "react-router-dom";


import "./styles.css"

export default function MessagesItens () {
    return(  
        <>
        <main className="main" >
            
       
    
        <div>
        <h2>Alerta!</h2>
        
         <p>Se vais utilizar <span>MB WAY</span> pela primeira vez, segue estas dicas:</p>
         <p>- Nunca introduzas números de telemóveis que não te pertencem</p>
         <p>- Não partilhes códigos que recebas, na criação da tua conta <span>MB WAY</span></p>
        
         </div>
       
       <form className="form-messages">
       <button className="btn-create" >Mensagens</button>
       <button className="btn-create" >Pagamentos</button>
       <button className="btn-create" >Perfil de Candidato</button>
       <button className="btn-create" >Dados pessoais</button>
       </form>
       
       <NavLink className="link">
        A anunciar
       </NavLink>
       <NavLink className="link">
        A contratar
       </NavLink>

       <img className="img-message" src="https://st3.depositphotos.com/20888684/34697/v/450/depositphotos_346976758-stock-illustration-new-message-flat-icon-letter.jpg" alt="" />

       <h3>Ainda não tens Conversas abertas</h3>
       <article className="article-notice">
       Quando um prestador de serviço te enviar uma mensagem, a conversa vai aparecer aqui. Se tens algum serviço para oferecer, começa por publicar um anúncio.
       </article>
       
       </main>
       </>
    )
}