import React from "react";
import { Form } from "react-router-dom";

import "./styles.css"

export default function SearchBox () {
  
  return (
     
    <form>
      <label className="label">
       Todos os serviços em um só lugar.
      </label>
      <div className="Busca">
        <input type="text" className="txtBusca" placeholder="O que procuras?" />
        <button className="btnBusca" type="submit"> Pesquisar </button>
      </div>
    </form>
  
    );
}