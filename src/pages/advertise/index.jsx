import React from "react";
import AdvertiseForm from "../../components/advertise-form";

import "./styles.css";



export default function Advertise() {
  return(
    <main className="main">
  <div className="new-adversite" >
    <h1> Criar Anúncio</h1>
    <p>Crie o anúncio com o seu serviço</p>
     <AdvertiseForm btnText="Criar Anúncio" />
  </div>
  </main>
  )


};