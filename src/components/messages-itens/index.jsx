import React from "react";
import { NavLink } from "react-router-dom";


import "./styles.css"

export default function MessagesItens () {
    return(  
        <>
       
            
       
    
        <div className="alert">
        <h2>Alerta!</h2>
        
         <p>Se vais utilizar <strong> MB WAY</strong>pela primeira vez, segue estas dicas:</p>
         <p>- Nunca introduzas números de telemóveis que não te pertencem</p>
         <p>- Não partilhes códigos que recebas, na criação da tua conta <strong>MB WAY.</strong></p>
        
         </div>
         
      

       <form className="form-link-itens">
       <NavLink to="#"  className="link-itens" >Mensagens</NavLink>
       <NavLink to="#"  className="link-itens" >Pagamentos</NavLink>
       <NavLink to="#"  className="link-itens" >Perfil de Candidato</NavLink>
       <NavLink to="#"  className="link-itens" >Dados pessoais</NavLink>
       </form>
       
      
       <div className="messages">
        <h3>Ainda não tens Conversas abertas</h3>
        <img className="img-message" src="https://st3.depositphotos.com/20888684/34697/v/450/depositphotos_346976758-stock-illustration-new-message-flat-icon-letter.jpg" alt="" />

       
       <article>
       Quando um prestador de serviço te enviar uma mensagem, a conversa vai aparecer aqui. Se tens algum serviço para oferecer, começa por publicar um anúncio. 
       </article>
       <article>
        Este é o lugar mais seguro para comunicares com outros membros do <strong>All Services </strong>. Para começares a conversar com outros membros, pesquisa por algum serviço ou publica um anúncio.</article>
        <p>Usa-o para partilhar fotos, localizações e para fechar negócios.</p>
       </div>
      
       </>
    )
}