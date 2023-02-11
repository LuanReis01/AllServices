import React from "react";
import FeaturedPost from "../../components/featured-post";

import PostList from "../../components/post-list";


export default function Home () {
const posts = [
    {
        image: "https://imperiobusiness.com/wp-content/uploads/2022/07/carpinteiro.jpg",
        date: "fevereiro 8, 2023",
        title: "Pedro Duarte Carpinteiro",
        description: "Com mais de 40 anos de experiência, executo todo o tipo de trabalhos de carpintaria, pavimentos, flutuantes, escadas, portas exteriores e interiores, escadas, móveis de cozinha, roupeiros, móveis de quarto de banho, telheiros, mesas, cadeiras, estantes, roda-pés e painéis. Faço reparações sempre que possível. Região do Grande Porto.",
    },
    {
        image: "https://www.creditooudebito.com.br/y/3564/pedreiro.jpg",
        date: "janeiro 24, 2023",
        title: "José Alberto Serviços Pedreiro",
        description: "Faço todo tipo de reparações de pedreiro e de trolha. Colocação de todo o tipo de cerâmicas, reparações em telhados, todos os tipo de pinturas, isolamento capoto e etc.",
    },
    {
        image: "https://www.saladaeletrica.com.br/saladaeletrica/wp-content/uploads/2022/05/man-an-electrical-technician-working-in-a-switchboard-with-fuses-installation-and-connection-of-electrical-equipment-close-up-min-600x400.jpg",
        date: "janeiro 13, 2023",
        title: "Eletricistas Credenciados",
        description: "Técnico Responsável. ELETRICIDADE GERAL - Detecção e reparação de avarias. Contador - pedido à E-Redes. Contador - alteração da localização com Termo de responsabilidade E-REDES. Contador- trifásico para monofásico. Coluna montante - reparação/ substituição (com ou sem projeto).",
    },
    {
        image: "https://transportesfaria.com/web/wp-content/uploads/2017/08/mudan%C3%A7as-porto-transportes-faria-montagem-de-moveis.jpg",
        date: "dezembro 15, 2022",
        title: "Montador de móveis",
        description: "Montagem e desmontagem de móveis novos e usados. Faça já o seu orçamento. Atuo na zona de Porto."
    }

]
    return (
        <div>
        <FeaturedPost />

        <PostList posts ={posts} />
        
        </div>
    );

}