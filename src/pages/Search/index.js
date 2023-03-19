import { useEffect, useState } from 'react';
import CardGame from '../../components/CardGame';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import './Search.css';

const Search = () => {

    const [games, setGames] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'faa75551d8msh237a58e18a3a8b2p17c365jsn3edc68cdb061',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    

    useEffect(() => {
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options)
            .then(response => response.json())
            .then(data => setGames(data));
        console.log('dsa')
    }, [])

    return (
        <div className='main-container'>
            <Header title="Busque por seus jogos!" />
            <h2 className="main-title-search">Busque a partir das suas preferências</h2>
            <main className='content-container'>
                <SearchBar placeholder={"Digite o nome do seu jogo aqui!"} />
                <div className='grid-container'>
                    {games.map( game => <CardGame title={game.title} image={game.thumbnail} description={game.short_description} />)}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Search;