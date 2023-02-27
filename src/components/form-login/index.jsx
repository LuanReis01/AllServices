import React from "react";
import { NavLink } from "react-router-dom";


import "./styles.css"

export default function FormLogin () {
    return(
      
       

     
    <form className="form-login" >
        <label htmlFor="#"></label>
     <div className="itens ">
    <button className="button-itens" type="submit">Criar Conta</button>
    <button className="button-itens" type="submit">Entrar</button>
     </div>
     
    <div className="itens-login" >
    
    <input type="text" placeholder="Nome Completo"/>
    <input type="text" placeholder="Email"/>
    <input type="text" placeholder="Password"/>
    <input type="text" placeholder="Repetir Password"/>
    <button type="submit" >Enviar</button>
    <NavLink className="forgot-password" to="#" > Esqueceste-te da password?</NavLink>
    
     </div>
    </form>


    );
}