import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Content from '../../components/Content';
import './Home.css';

const Home = () => {
    return(
        <div className='main-container'>
            <Header title="Recomendações de Jogos!"/>
            <h2 className="main-title-search">Página Inicial</h2>
            <main className='content-container'>
                <Content />
                </main>
                <Footer />
            </div>
        )
}

export default Home;