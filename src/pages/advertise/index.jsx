import React from "react";
import { useNavigate } from 'react-router-dom'
import AdvertiseForm from "../../components/advertise-form";

import "./styles.css";



export default function Advertise() {

  const history = useNavigate ()

  function createPost(project) {
    
    
    project.cost = 0 
    project.services = []
    
    fetch('http://localhost:5000/advertise', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json() )
      .then((data) => {
        console.log(data)
        history ('/', {message: 'Anúncio criado com sucesso!'})
      })
    .catch((err) => console.log(err))

  }

  return(
    <main className="main">  
  <div className="new-adversite" >
    <h1> Criar Anúncio</h1>
    <p>Crie o anúncio com o seu serviço</p>
    <p>Quanto mais detalhado, melhor!</p>
     <AdvertiseForm handleSubmit={createPost}  btnText="Criar Anúncio" />
  </div>
   </main>  
  )


};