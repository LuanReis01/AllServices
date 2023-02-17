import React from "react";
import Input from "../form-input/input";
import Select from "../select";

import "./styles.css";

export default function AdvertiseForm () {

return(
    <form>
           

        <Input 
        type="file"
        text="Insira uma imagem"
        name="name"
            
        />

        <Input 
        type="text"
        text="Nome do Anúncio"
        name="name"
        placeholder="Título"
        />

        <Input 
        type="text"
        text="Descrição"
        name="name"
        placeholder="Conte-nos um pouco sobre o seu serviço"
        />

        <Select name="category-id" text="Selecione a categoria" />

        <div>
        <input type="submit" value="Criar Anúncio" />
        </div>
    </form>
    )
}