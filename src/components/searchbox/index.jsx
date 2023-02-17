import React from "react";
import { Form } from "react-router-dom";

import "./styles.css"

export default function SearchBox () {
  
  return (
     
    <form className="search-box">
      <label className="label">
       Todos os serviços em um só lugar.
      </label>
      <div className="Busca">
        <input type="text" className="txtBusca" placeholder="O que procuras?" />
        <button className="btn-search" type="submit"> Pesquisar </button>
      </div>
    </form>
  
    );
}