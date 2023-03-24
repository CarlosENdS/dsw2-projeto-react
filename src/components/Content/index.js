import { useEffect, useState } from 'react';
import CardGame from '../CardGame';
import inicioImg from "../../assets/inicio.jpg";
import template from "../../assets/template-games.png";
import interrogacao from "../../assets/interrogacao.jpg";
import './Content.css'


const Content = () => {

    const [games, setGames] = useState([]);
    const [selectedGameIndex, setSelectedGameIndex] = useState(0);
    const [date, setDate] = useState(new Date());
    const randomNumber1 = date.getDate();
    const randomNumber2 = date.getDate() + 31;
    const randomNumber3 = date.getDate() + 62;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'Chave API',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setDate(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);

    useEffect(() => {
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options)
            .then(response => response.json())
            .then(data => setGames(data));
        console.log('dsa')
    }, [])
    
    return(

    <div class="row">
    <div class="leftcolumn">
        <div class="card">
        <h2 class="title">Recomendações do Dia</h2>
        <div>
        {games.length > 0 &&
                <div className='grid-container'>
                    <CardGame title={games[randomNumber1].title} image={games[randomNumber1].thumbnail} description={games[randomNumber1].short_description} />
                    <CardGame title={games[randomNumber2].title} image={games[randomNumber2].thumbnail} description={games[randomNumber2].short_description} />
                    <CardGame title={games[randomNumber3].title} image={games[randomNumber3].thumbnail} description={games[randomNumber3].short_description} />
                </div>
            }
        </div>
        <p class="text">Recomendações de Jogos do dia {date.toLocaleDateString()}</p>
        </div>
        <div class="card">
        <h2 class="title">Como Utilizar o Sistema</h2>
        <img class="imagem" src={interrogacao} alt="Interrogação" style={{height: '200px'}}/>
        <p class="text">Acesse a página de busca pela barra de navegação.</p>
        <p>Selecione as opções de pesquisa desejadas e clique para obter os resultados.</p>
        </div>
    </div>
    <div class="rightcolumn">
        <div class="card">
        <h3 class="title">Bem-Vindo</h3>
        <img class="imagem" src={template} style={{width: '50%'}} alt="Bem-Vindo"/>
        <p class="text">Encontre o jogo ideal a partir de um mecanismo de buscas</p>
        <p>O site conta com uma gama de jogos de diversos gêneros a serem recomendados.</p>
        </div>
        <div class="card">
        <h2 class="title">Sobre</h2>
        <p class="text">Você pode buscar agora mesmo recomendações baseadas no estilo de jogo desejado e receberá diversas recomendações</p>
        </div>
        <div class="card">
        <h2 class="title">Jogos Disponíveis</h2>
        <p class="text">Contamos com uma lista de jogos gratuitos dos mais diversos gêneros para descobrir.</p>
        <p class="text">Além das  recomendações diárias, acesse a lista de jogos disponíveis e encontre seu jogo agora!</p>
        </div>
    </div>
    </div>

    )
}

export default Content;
