import React, {useState, useEffect} from "react";
import FeaturedPost from "../../components/featured-post";
import SearchBox from "../../components/searchbox";

import PostList from "../../components/post-list";

import "./styles.css";

const mock = [
    {
        image: "https://imperiobusiness.com/wp-content/uploads/2022/07/carpinteiro.jpg",
        date: "fevereiro 8, 2023",
        title: "Pedro Duarte Carpinteiro",
        description: "Com mais de 40 anos de experiência. Colocação e Reparação de Portas e Aduelas, Fechaduras, Puxadores, Janelas, Soalho Flutuante ou Deck, Pladur, Rodapés e Tectos falsos.  Qualidade, Respeito de Prazos e Preço Justo Garantidos."
        
    },
    {
        image: "https://www.creditooudebito.com.br/y/3564/pedreiro.jpg",
        date: "janeiro 24, 2023",
        title: "José Alberto Serviços Pedreiro",
        description: "Faço todo tipo de reparações de pedreiro e de trolha. Pequenas construções. Colocação de todo o tipo de cerâmicas, reparações em telhados, todos os tipo de pinturas, isolamento capoto e etc. Disponível todos os dias da semana. Entre em contato.",
    },
    {
        image: "https://www.saladaeletrica.com.br/saladaeletrica/wp-content/uploads/2022/05/man-an-electrical-technician-working-in-a-switchboard-with-fuses-installation-and-connection-of-electrical-equipment-close-up-min-600x400.jpg",
        date: "janeiro 13, 2023",
        title: "Eletricistas Credenciados",
        description: "Técnico Responsável. ELETRICIDADE GERAL - Detecção e reparação de avarias. Contador- alteração da localização com Termo de responsabilidade E-REDES. Contador- trifásico para monofásico (com ou sem projeto).",
    },
    {
        image: "https://transportesfaria.com/web/wp-content/uploads/2017/08/mudan%C3%A7as-porto-transportes-faria-montagem-de-moveis.jpg",
        date: "dezembro 15, 2022",
        title: "Montador de móveis",
        description: "Montagem e desmontagem de móveis novos e usados. Faça já o seu orçamento. Possuo disponibilidade das segundas aos sábados. Atuo na zona de Porto. Entre em contato para mais detalhes."
    }

]
export default function Home () {

    const [posts, setPosts] = useState (mock);

   async function getPosts(){
    /* const response = await fetch(); */
    }  

    useEffect (() => {
    getPosts();
    }, []);


    return (
        <main className="main">
        <div>
            <SearchBox />
        {
            posts && posts.length > 0 && <FeaturedPost post={ posts[0]}  />
        }

        <PostList posts ={posts} />
        
        </div>
        </main>
    );
    
}