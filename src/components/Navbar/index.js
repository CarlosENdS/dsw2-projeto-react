import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar">
                <Link to='/'>
                    Inicio
                </Link>
                <Link to="/search">
                    Buscar
                </Link>
        </nav>
    )
}

export default Navbar;